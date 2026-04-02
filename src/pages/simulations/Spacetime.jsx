import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SpacetimeVisualization = () => {
  const meshRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.0005;
        meshRef.current.rotation.y += 0.0008;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      {/* Spacetime Grid */}
      <mesh ref={meshRef}>
        <planeGeometry args={[20, 20, 50, 50]} />
        <meshPhongMaterial
          color="#1a1a4d"
          wireframe={true}
          wireframeLinewidth={2}
        />
      </mesh>

      {/* Central mass distortion */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
      </mesh>
    </>
  );
};

const Spacetime = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {i18n.language === 'en' ? 'Spacetime Simulation' : 'محاكاة الزمكان'}
        </h1>
        <p className="text-gray-400">
          {i18n.language === 'en' 
            ? 'Understand the structure of space and time'
            : 'افهم بنية الفضاء والزمن'}
        </p>
      </div>

      <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <Canvas>
          <SpacetimeVisualization />
        </Canvas>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Einstein\'s Theory' : 'نظرية أينشتاين'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Mass curves spacetime, and curved spacetime tells matter how to move.'
              : 'الكتلة تعوج الزمكان ومن ثم الزمكان المعووج يخبر المادة بكيفية التحرك'}
          </p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Gravity' : 'الجاذبية'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Gravity is not a force, but a curvature of spacetime caused by mass and energy.'
              : 'الجاذبية ليست قوة بل هي انحناء الزمكان ضناعه الكتلة والطاقة'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spacetime;
