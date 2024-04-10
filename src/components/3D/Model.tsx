import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useControls } from "leva";
import GUI from "lil-gui";
import { useRecoilValue } from "recoil";
import { textModelTransformState, textScaleState } from "../../state/common";

export default function Model() {
  const { nodes } = useGLTF("/model/model.glb") as any;
  const textScaleValue = useRecoilValue(textScaleState);
  const textModelTransformValue = useRecoilValue(textModelTransformState);

  const textModelRef = useRef(null);
  const textRef = useRef(null);
  const { camera } = useThree();

  useEffect(() => {
    if (!textModelRef.current) return;
    camera.position.z = 5;
    textModelRef.current.position.z = 1;
  }, [textModelRef]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scale.set(textScaleValue, textScaleValue, textScaleValue);
    }
  }, [textScaleValue]);

  useFrame(() => {
    if (!textModelRef.current) return;
    textModelRef.current.rotation.y += 0.005;
    textModelRef.current.rotation.z += 0.005;
    textModelRef.current.position.y = textModelTransformValue;
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.04, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group>
      <Text
        font={"/fonts/Bohme.ttf"}
        color="white"
        fontSize={1}
        anchorX="center"
        anchorY="middle"
        position={[0, -0.3, 1]}
        scale={1}
        ref={textRef}
      >
        {`INTERACTION\n DEVELOPER`}
      </Text>

      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        ref={textModelRef}
        scale={3}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
