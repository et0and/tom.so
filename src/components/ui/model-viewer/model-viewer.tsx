"use client";

import { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  const { camera } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      let cameraZ: number;

      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = camera.fov * (Math.PI / 180);
        cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      } else if (camera instanceof THREE.OrthographicCamera) {
        cameraZ = maxDim * 2;
      } else {
        console.error("Unsupported camera type");
        cameraZ = maxDim * 2;
      }

      cameraZ *= 1.5;

      camera.position.set(center.x, center.y, center.z + cameraZ);
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  }, [camera, scene]);

  return (
    <Center>
      <primitive ref={modelRef} object={scene} />
    </Center>
  );
}

interface ComponentProps {
  modelPath: string;
}

export default function ModelViewer({ modelPath }: ComponentProps) {
  if (!modelPath) {
    return null; // Return null if no modelPath is provided
  }

  return (
    <div className="w-full aspect-square border dark:border-slate-50 border-neutral-900 bg-stone-700">
      <Canvas className="bg-stone-700">
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
        />
        <Model modelPath={modelPath} />
        <OrbitControls enablePan={false} />
        <Environment preset="warehouse" background={false} />
      </Canvas>
    </div>
  );
}
