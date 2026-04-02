import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Star = ({ position, size, color, temp }) => {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      const flicker = () => {
        meshRef.current.intensity = 0.7 + Math.random() * 0.3;
        requestAnimationFrame(flicker);
      };
      flicker();
    }
  }, []);

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
};

const StarsVisualization = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 100]} intensity={0.5} />

      {/* Blue Giant */}
      <mesh position={[-8, 0, 0]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshPhongMaterial color="#4169e1" emissive="#4169e1" emissiveIntensity={0.7} />
      </mesh>

      {/* Red Giant */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshPhongMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.6} />
      </mesh>

      {/* White Dwarf */}
      <mesh position={[8, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshPhongMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
      </mesh>

      {/* Background stars */}
      <mesh>
        <sphereGeometry args={[200, 64, 64]} />
        <meshPhongMaterial side={THREE.BackSide} color="#000811" />
      </mesh>
    </>
  );
};

const Stars = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {i18n.language === 'en' ? 'Stars Simulation' : 'محاكاة النجوم'}
        </h1>
        <p className="text-gray-400">
          {i18n.language === 'en' 
            ? 'Explore stars and their characteristics'
            : 'استكشف النجوم وخصائصها'}
        </p>
      </div>

      <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <Canvas>
          <StarsVisualization />
        </Canvas>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Blue Giant' : 'عملاق أزرق'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Very hot, massive stars with surface temperature > 10,000K'
              : 'نجوم حارة وضخمة جدا بدرجة حرارة > 10000K'}
          </p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Red Giant' : 'عملاق حمراء'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Evolved stars with cooler surfaces, 3,500-5,000K'
              : 'نجوم متطورة السطح أبرد 3500-5000K'
            }
          </p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'White Dwarf' : 'قزم أبيض'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Compact remnants of dead stars, extremely dense'
              : 'بقايا متراصفة لنجوم ميتة غاية ي الكثافة'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stars;
