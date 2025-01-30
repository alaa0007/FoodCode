import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Mesh } from 'three';

interface Model3DProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  onError?: (error: Error) => void;
}

export function Model3D({ url, scale = 1, position = [0, 0, 0], onError }: Model3DProps) {
  const mesh = useRef<Mesh>(null);
  
  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload(url);
      } catch (error) {
        onError?.(error as Error);
      }
    };
    
    loadModel();
  }, [url, onError]);

  const { scene } = useGLTF(url);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={mesh}
      object={scene.clone()}
      scale={scale}
      position={position}
    />
  );
}