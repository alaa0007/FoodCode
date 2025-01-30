import { ARButton, XR, Controllers, Interactive } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { Model3D } from './Model3D';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';

interface ARViewProps {
  modelUrl: string;
  onError?: (error: Error) => void;
}

export function ARView({ modelUrl, onError }: ARViewProps) {
  return (
    <div className="h-screen w-screen">
      <div className="fixed top-4 right-4 z-50">
        <ARButton 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          Démarrer l'AR
        </ARButton>
      </div>
      <Canvas>
        <XR>
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Interactive>
              <Model3D 
                url={modelUrl} 
                scale={2} 
                position={[0, 0, -2]} 
                onError={onError}
              />
            </Interactive>
            <Environment preset="sunset" />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  );
}