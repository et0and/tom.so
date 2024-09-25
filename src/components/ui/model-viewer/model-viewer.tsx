"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import * as THREE from "three";

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const [error, setError] = useState<string | null>(null);

  const handleError = useMemo(
    () => (error: any) => {
      console.error("Error loading model:", error);
      setError("Failed to load the model. Using fallback.");
    },
    [],
  );

  const { scene: mainScene } = useGLTF(
    modelPath,
    undefined,
    undefined,
    handleError,
  );
  const { scene: fallbackScene } = useGLTF("https://tom.so/assets/3d/duck.glb");

  const sceneToRender = error ? fallbackScene : mainScene;

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Rotate the model
    }
  });

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
  }, [camera, sceneToRender]);

  return (
    <Center>
      <primitive ref={modelRef} object={sceneToRender} />
    </Center>
  );
}

interface ComponentProps {
  modelPath?: string;
}

export default function ModelViewer({
  modelPath = "https://tom.so/assets/3d/duck.glb",
}: ComponentProps) {
  return (
    <div className="w-[500px] h-[500px] border dark:border-slate-50 border-neutral-900">
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <ErrorBoundary
          fallback={
            <primitive
              object={useGLTF("https://tom.so/assets/3d/duck.glb").scene}
            />
          } // this is the fallback model if none is specified by the editor
        >
          <Model modelPath={modelPath} />
        </ErrorBoundary>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
