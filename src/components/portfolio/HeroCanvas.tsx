import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const N = 2200;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      // ring-ish distribution
      const r = 2 + Math.random() * 6;
      const t = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 6;
      arr[i * 3] = Math.cos(t) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(t) * r;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#C084FC"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function NeuralNet() {
  const group = useRef<THREE.Group>(null!);
  const nodes = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 22; i++) {
      arr.push([
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return arr;
  }, []);
  const lines = useMemo(() => {
    const ls: Array<[THREE.Vector3, THREE.Vector3]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = new THREE.Vector3(...nodes[i]);
        const b = new THREE.Vector3(...nodes[j]);
        if (a.distanceTo(b) < 2.3) ls.push([a, b]);
      }
    }
    return ls;
  }, [nodes]);

  useFrame((s) => {
    if (group.current) {
      group.current.rotation.y = s.clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#C084FC" />
        </mesh>
      ))}
      {lines.map(([a, b], i) => {
        const geom = new THREE.BufferGeometry().setFromPoints([a, b]);
        const mat = new THREE.LineBasicMaterial({ color: "#7C3AED", transparent: true, opacity: 0.25 });
        return <primitive key={i} object={new THREE.Line(geom, mat)} />;
      })}
    </group>
  );
}

function Blob() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[2.6, 0.2, -1]}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={1.6}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function MouseRig() {
  useFrame((state) => {
    const { mouse, camera } = state;
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0B0B12"]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={1.4} color="#C084FC" />
      <pointLight position={[-6, -3, -4]} intensity={1} color="#7C3AED" />
      <ParticleField />
      <NeuralNet />
      <Blob />
      <MouseRig />
    </Canvas>
  );
}
