import React, { useState } from 'react';
import { ModelCard } from './components/ModelCard';
import { ARView } from './components/ARView';

const LANTERN_MODEL = {
  id: 1,
  title: 'Lanterne Traditionnelle',
  imageUrl: 'https://images.unsplash.com/photo-1603826773137-0c3e4d0c0055?auto=format&fit=crop&q=80',
  modelUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb'
};

function App() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleModelSelect = (modelUrl: string) => {
    setError(null);
    setSelectedModel(modelUrl);
  };

  if (selectedModel) {
    return (
      <>
        {error && (
          <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
            {error}
          </div>
        )}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setSelectedModel(null)}
            className="bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            ← Retour
          </button>
        </div>
        <ARView 
          modelUrl={selectedModel} 
          onError={(e) => {
            setError("Erreur lors du chargement du modèle 3D. Veuillez réessayer.");
            setSelectedModel(null);
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Visualisation 3D en Réalité Augmentée
        </h1>
        <p className="text-gray-600 mb-8">
          Cliquez sur la lanterne pour la visualiser en réalité augmentée. 
          Assurez-vous d'utiliser Chrome sur Android pour une meilleure expérience.
        </p>
        <div className="max-w-md mx-auto">
          <ModelCard
            title={LANTERN_MODEL.title}
            imageUrl={LANTERN_MODEL.imageUrl}
            onClick={() => handleModelSelect(LANTERN_MODEL.modelUrl)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;