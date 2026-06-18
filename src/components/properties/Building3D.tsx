"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Cars() {
  const carColors = ["#c41e3a", "#2d2d2d", "#4a4a4a", "#1a1a2e", "#8b0000", "#2e5c6e", "#b8860b"];
  const carPositions = [
    { x: -2.8, z: -2.2, rot: 0.3 },
    { x: -1.5, z: -2.5, rot: -0.2 },
    { x: 0.2, z: -2.6, rot: 0.1 },
    { x: 1.8, z: -2.4, rot: -0.15 },
    { x: 3.0, z: -2.1, rot: 0.25 },
    { x: -2.5, z: 2.0, rot: -0.5 },
    { x: -0.8, z: 2.2, rot: 0.2 },
    { x: 1.2, z: 2.1, rot: -0.3 },
    { x: 2.8, z: 1.9, rot: 0.4 },
    { x: -3.2, z: -0.5, rot: 0.1 },
    { x: 3.3, z: -0.8, rot: -0.1 },
    { x: -1.0, z: -1.0, rot: 0.05 },
    { x: 1.5, z: -1.2, rot: -0.08 },
  ];

  return (
    <group>
      {carPositions.map((pos, idx) => (
        <group key={idx} position={[pos.x, -3.2, pos.z]} rotation={[0, pos.rot, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.45, 0.18, 0.9]} />
            <meshStandardMaterial color={carColors[idx % carColors.length]} roughness={0.3} metalness={0.6} />
          </mesh>
          <mesh position={[0, 0.12, -0.1]} castShadow>
            <boxGeometry args={[0.35, 0.1, 0.55]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
          </mesh>
          {[-0.28, 0.28].map((zx) => (
            <group key={zx}>
              <mesh position={[-0.22, -0.08, zx]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
                <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh position={[0.22, -0.08, zx]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
                <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
              </mesh>
            </group>
          ))}
          <mesh position={[0.24, 0.05, 0.47]}>
            <boxGeometry args={[0.05, 0.05, 0.03]} />
            <meshStandardMaterial color="#ffeeaa" emissive="#ffcc66" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[-0.24, 0.05, 0.47]}>
            <boxGeometry args={[0.05, 0.05, 0.03]} />
            <meshStandardMaterial color="#ffeeaa" emissive="#ffcc66" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Balcony({ position, width, depth, side }: { position: [number, number, number]; width: number; depth: number; side: 'front' | 'back' | 'left' | 'right' }) {
  let posOffset = [0, 0, 0];
  let rotOffset = 0;
  let barWidth = width;

  if (side === 'front') {
    posOffset = [0, 0, depth / 2 + 0.12];
    barWidth = width;
  } else if (side === 'back') {
    posOffset = [0, 0, -depth / 2 - 0.12];
    barWidth = width;
  } else if (side === 'left') {
    posOffset = [-width / 2 - 0.12, 0, 0];
    barWidth = depth;
    rotOffset = Math.PI / 2;
  } else if (side === 'right') {
    posOffset = [width / 2 + 0.12, 0, 0];
    barWidth = depth;
    rotOffset = Math.PI / 2;
  }

  return (
    <group position={[position[0] + posOffset[0], position[1] + 0.08, position[2] + posOffset[2]]} rotation={[0, rotOffset, 0]}>
      <mesh position={[0, -0.02, 0]} receiveShadow>
        <boxGeometry args={[width + 0.08, 0.04, 0.35]} />
        <meshStandardMaterial color="#8a8a9a" metalness={0.4} roughness={0.6} />
      </mesh>
      {Array.from({ length: Math.floor((barWidth - 0.1) / 0.18) }).map((_, i) => {
        const xPos = -barWidth / 2 + 0.15 + i * 0.18;
        return (
          <mesh key={i} position={[xPos, 0.12, 0]} castShadow>
            <boxGeometry args={[0.04, 0.2, 0.04]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.7} roughness={0.3} />
          </mesh>
        );
      })}
      <mesh position={[0, 0.23, 0]} castShadow>
        <boxGeometry args={[barWidth + 0.04, 0.04, 0.06]} />
        <meshStandardMaterial color="#b0b0c0" metalness={0.8} />
      </mesh>
    </group>
  );
}

function Building({ autoRotate }: { autoRotate: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (autoRotate && group.current) {
      group.current.rotation.y = clock.elapsedTime * 0.06;
    }
  });

  const floors = 25;
  const floorH = 0.44;
  const baseW = 2.8;
  const baseD = 2.8;

  const getTaper = (i: number) => {
    if (i < 15) return 0;
    return (i - 15) * 0.018;
  };

  return (
    <group ref={group} position={[0, -3.6, 0]}>
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[baseW + 1.4, 0.45, baseD + 1.4]} />
        <meshStandardMaterial color="#0a0e18" roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[baseW + 1.2, 0.08, baseD + 1.2]} />
        <meshStandardMaterial color="#d4a847" metalness={0.75} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.15, baseD / 2 + 0.35]} castShadow>
        <boxGeometry args={[1.2, 0.08, 0.6]} />
        <meshStandardMaterial color="#d4a847" metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.05, baseD / 2 + 0.25]}>
        <boxGeometry args={[0.8, 0.3, 0.05]} />
        <meshPhysicalMaterial color="#88aacc" metalness={0.6} transmission={0.5} />
      </mesh>

      {Array.from({ length: floors }).map((_, i) => {
        const y = 0.7 + i * floorH;
        const taper = getTaper(i);
        const ww = baseW - taper;
        const dd = baseD - taper;
        const isUpperFloor = i >= 20;
        const isMidFloor = i >= 12 && i < 20;
        const hasBalcony = i >= 5;
        const balconySides: Array<'front' | 'back' | 'left' | 'right'> = [];
        if (hasBalcony) {
          if (i % 4 === 0 || i % 4 === 1) balconySides.push('front');
          if (i % 4 === 1 || i % 4 === 2) balconySides.push('back');
          if (i % 4 === 2 || i % 4 === 3) balconySides.push('left');
          if (i % 4 === 3 || i % 4 === 0) balconySides.push('right');
        }

        return (
          <group key={i} position={[0, y, 0]}>
            <mesh castShadow receiveShadow position={[0, -0.02, 0]}>
              <boxGeometry args={[ww + 0.12, 0.04, dd + 0.12]} />
              <meshStandardMaterial color="#1a202e" roughness={0.45} metalness={0.15} />
            </mesh>
            <mesh position={[0, floorH / 2, 0]} castShadow>
              <boxGeometry args={[ww, floorH - 0.05, dd]} />
              <meshPhysicalMaterial
                color={isUpperFloor ? "#1a4a7a" : isMidFloor ? "#0e3a6e" : "#0a2a55"}
                metalness={0.88}
                roughness={0.1}
                transmission={0.35}
                thickness={0.5}
                emissive={i % 4 === 0 ? "#1a4a7a" : "#0a1a3a"}
                emissiveIntensity={i % 4 === 0 ? 0.1 : 0.02}
                clearcoat={0.95}
                clearcoatRoughness={0.12}
              />
            </mesh>
            {[-1.3, -0.65, 0, 0.65, 1.3].map((x) => (
              <mesh key={x} position={[x * (ww / 2.3), floorH / 2, 0]}>
                <boxGeometry args={[0.045, floorH, dd + 0.05]} />
                <meshStandardMaterial color="#c8d0e0" metalness={0.65} roughness={0.25} />
              </mesh>
            ))}
            <mesh position={[0, 0.02, 0]}>
              <boxGeometry args={[ww + 0.1, 0.025, dd + 0.1]} />
              <meshStandardMaterial color="#2a3242" metalness={0.45} />
            </mesh>
            <mesh position={[0, floorH - 0.03, 0]}>
              <boxGeometry args={[ww + 0.1, 0.025, dd + 0.1]} />
              <meshStandardMaterial color="#2a3242" metalness={0.45} />
            </mesh>
            <mesh position={[0, floorH - 0.08, dd / 2 + 0.05]}>
              <boxGeometry args={[ww - 0.3, 0.03, 0.1]} />
              <meshStandardMaterial color="#3a4050" />
            </mesh>
            {balconySides.map((side) => (
              <Balcony
                key={side}
                position={[0, floorH / 2, 0]}
                width={ww - 0.2}
                depth={dd}
                side={side}
              />
            ))}
          </group>
        );
      })}

      <mesh position={[0, 0.7 + floors * floorH + 0.1, 0]} castShadow>
        <boxGeometry args={[baseW - 0.2, 0.12, baseD - 0.2]} />
        <meshStandardMaterial color="#3a3a4a" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.7 + floors * floorH + 0.45, 0]} castShadow>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color="#d4a847" metalness={0.9} roughness={0.15} emissive="#d4a847" emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[0, 0.7 + floors * floorH + 0.9, 0]}>
        <coneGeometry args={[0.28, 0.55, 8]} />
        <meshStandardMaterial color="#e8c060" metalness={0.95} emissive="#d4a847" emissiveIntensity={0.18} />
      </mesh>

      <group position={[0, 0.7 + floors * floorH + 0.08, 0]}>
        <mesh position={[0, -0.05, 0]} receiveShadow>
          <boxGeometry args={[3.2, 0.08, 3.2]} />
          <meshStandardMaterial color="#4a4a5a" roughness={0.6} metalness={0.2} />
        </mesh>
        {[-1.2, -0.4, 0.4, 1.2].map((x) => (
          <mesh key={x} position={[x, 0, 1.0]}>
            <boxGeometry args={[0.6, 0.02, 0.6]} />
            <meshStandardMaterial color="#6a6a7a" roughness={0.5} />
          </mesh>
        ))}
        <mesh position={[-0.8, 0.05, -0.3]}>
          <boxGeometry args={[1.6, 0.06, 1.2]} />
          <meshPhysicalMaterial
            color="#1a8aaa"
            metalness={0.95}
            roughness={0.06}
            transmission={0.88}
            thickness={0.35}
            emissive="#0a5a7a"
            emissiveIntensity={0.2}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[-1.6, 0.08, -0.3]}>
          <boxGeometry args={[0.08, 0.04, 1.2]} />
          <meshStandardMaterial color="#ffffff" metalness={0.3} />
        </mesh>
        <mesh position={[1.1, 0.05, 0.6]}>
          <boxGeometry args={[0.9, 0.06, 0.9]} />
          <meshPhysicalMaterial
            color="#2a9aba"
            metalness={0.9}
            roughness={0.07}
            transmission={0.85}
            thickness={0.3}
            emissive="#0a6a8a"
            emissiveIntensity={0.15}
          />
        </mesh>
        <mesh position={[-1.2, 0.1, 1.2]}>
          <boxGeometry args={[0.5, 0.04, 0.8]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <mesh position={[0.2, 0.1, 1.3]}>
          <boxGeometry args={[0.5, 0.04, 0.7]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
        <group position={[-0.8, 0.14, 1.25]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.05, 0.4, 6]} />
            <meshStandardMaterial color="#8a7a5a" />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <coneGeometry args={[0.35, 0.12, 6]} />
            <meshStandardMaterial color="#c4a86a" />
          </mesh>
        </group>
        <Sparkles count={60} scale={[3.2, 0.3, 3.2]} size={0.06} color="#88ddff" />
        {[-1.5, -0.5, 0.5, 1.5].map((x, idx) => (
          <mesh key={idx} position={[x, 0.25, 1.65]}>
            <boxGeometry args={[0.8, 0.4, 0.03]} />
            <meshPhysicalMaterial color="#aaccee" metalness={0.7} transmission={0.4} opacity={0.6} transparent />
          </mesh>
        ))}
        {[-1.5, -0.5, 0.5, 1.5].map((z, idx) => (
          <mesh key={`side-${idx}`} position={[-1.65, 0.25, z]}>
            <boxGeometry args={[0.03, 0.4, 0.8]} />
            <meshPhysicalMaterial color="#aaccee" metalness={0.7} transmission={0.4} opacity={0.6} transparent />
          </mesh>
        ))}
      </group>

      {[
        [-2.2, -2.5], [2.3, -2.4], [-2.4, 2.0], [2.2, 2.1], [-3.0, -1.0], [3.1, -0.8], [-2.9, 0.5], [2.8, 0.7],
      ].map(([x, z], idx) => (
        <group key={`tree-${idx}`} position={[x, -3.0, z]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.22, 0.5, 6]} />
            <meshStandardMaterial color="#5a3a2a" />
          </mesh>
          <mesh position={[0, 0.32, 0]} castShadow>
            <coneGeometry args={[0.32, 0.55, 6]} />
            <meshStandardMaterial color="#2a6a2a" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.65, 0]} castShadow>
            <coneGeometry args={[0.22, 0.4, 6]} />
            <meshStandardMaterial color="#3a8a3a" roughness={0.5} />
          </mesh>
        </group>
      ))}

      {[
        [-2.5, -2.2], [2.8, -2.0], [-2.7, 2.3], [2.6, 2.4],
      ].map(([x, z], idx) => (
        <group key={`lamp-${idx}`} position={[x, -3.2, z]}>
          <mesh>
            <cylinderGeometry args={[0.06, 0.09, 1.1, 6]} />
            <meshStandardMaterial color="#8a8a7a" metalness={0.5} />
          </mesh>
          <mesh position={[0, 1.1, 0]}>
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshStandardMaterial color="#ffdd88" emissive="#ffaa44" emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}

      <Cars />
    </group>
  );
}

export default function Tower3D({ interactive }: { interactive: boolean }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [7.8, 4.2, 9.0], fov: 40 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#0b0f17"]} />
      <fog attach="fog" args={["#0b0f17", 15, 32]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[10, 14, 7]}
        intensity={1.8}
        color="#e8f0ff"
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.0001}
      />
      <directionalLight position={[-6, 6, -5]} intensity={0.65} color="#7090ff" />
      <pointLight position={[2, 0.8, 2]} intensity={0.5} color="#d4a847" />
      <Suspense fallback={null}>
        <Building autoRotate={!interactive} />
      </Suspense>
      {interactive && (
        <OrbitControls
          enablePan={true}
          minDistance={5.5}
          maxDistance={20}
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI / 1.5}
          target={[0, 2.8, 0]}
        />
      )}
    </Canvas>
  );
}
