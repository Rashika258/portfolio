"use client";
import * as React from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";

export interface IParticleCanvasProps {}

function Particles(props: IParticleCanvasProps) {
  const ref: any = React.useRef();
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(5000), {
      radius: 1.2,
    })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#FFB400"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ParticleCanvas() {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <Particles />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
