import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BlackHoleVisualization = () => {
  const sphereRef = useRef();

  useEffect(() => {
    if (sphereRef.current) {
      const animate = () => {
        sphereRef.current.rotation.x += 0.001;
        sphereRef.current.rotation.y += 0.002;
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Black Hole */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="#000000" emissive="#ffff00" emissiveIntensity={0.3} />
      </mesh>

      {/* Accretion Disk */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.4, 16, 100]} />
        <meshPhongMaterial color="#ff6600" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>

      {/* Stars background */}
      <mesh>
        <sphereGeometry args={[100, 64, 64]} />
        <meshPhongMaterial side={THREE.BackSide} color="#001a33" />
      </mesh>
    </>
  );
};

const BlackHole = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {i18n.language === 'en' ? 'Black Hole Simulation' : 'محاكاة الثقوب السوداء'}
        </h1>
        <p className="text-gray-400">
          {i18n.language === 'en' 
            ? 'Explore the mysteries of black holes and their gravity effects'
            : 'استكشف أسرار الثقوب السوداء وتأثيرات جاذبيتها'}
        </p>
      </div>

      <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <Canvas>
          <BlackHoleVisualization />
        </Canvas>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Mass' : 'الكتلة'}</h3>
          <p className="text-gray-400 text-sm">{i18n.language === 'en' ? '10 million solar masses' : '10 ملايين كتلة شمسية'}</p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Radius' : 'نصف القطر'}</h3>
          <p className="text-gray-400 text-sm">{i18n.language === 'en' ? '~30 million km' : '~30 مليون كم'}</p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Type' : 'النوع'}</h3>
          <p className="text-gray-400 text-sm">{i18n.language === 'en' ? 'Supermassive' : 'فائقة الضخامة'}</p>
        </div>
      </div>
    </div>
  );
};

export default BlackHole;
