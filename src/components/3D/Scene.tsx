import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { Suspense, useEffect } from "react";

export default function Scene() {
  return (
    <>
      <Canvas>
        <directionalLight intensity={3} position={[0, 2, 3]} />
        <Environment preset="city" />
        <Model />
      </Canvas>
    </>
  );
}
