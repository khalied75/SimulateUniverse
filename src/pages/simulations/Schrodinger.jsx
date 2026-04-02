import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const QuantumBox = () => {
  const [position, setPosition] = useState([0, 0, 0]);
  const meshRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition([
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      ]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const animate = () => {
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.005;
          meshRef.current.rotation.y += 0.005;
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      {/* Quantum states */}
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.8} />
      </mesh>

      {/* Box boundaries */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={24}
            array={new Float32Array([
              -3, -3, -3, 3, -3, -3,
              3, -3, -3, 3, 3, -3,
              3, 3, -3, -3, 3, -3,
              -3, 3, -3, -3, -3, -3,
              -3, -3, 3, 3, -3, 3,
              3, -3, 3, 3, 3, 3,
              3, 3, 3, -3, 3, 3,
              -3, 3, 3, -3, -3, 3,
              -3, -3, -3, -3, -3, 3,
              3, -3, -3, 3, -3, 3,
              3, 3, -3, 3, 3, 3,
              -3, 3, -3, -3, 3, 3,
            ])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffff00" linewidth={2} />
      </lineSegments>
    </>
  );
};

const Schrodinger = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {i18n.language === 'en' ? "Schrödinger's Cats" : 'قطط شرودنغر'}
        </h1>
        <p className="text-gray-400">
          {i18n.language === 'en' 
            ? 'Discover quantum mechanics principles'
            : 'اكتشف مبادئ الميكانيكا الكمية'}
        </p>
      </div>

      <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <Canvas>
          <QuantumBox />
        </Canvas>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Superposition' : 'التراكب'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'A particle exists in multiple states simultaneously until observed.'
              : 'الجزيئ يوجد في حالات متعددة في نفس الوقت حتى لا يتم ملاحظته'}
          </p>
        </div>
        <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6">
          <h3 className="text-yellow-400 font-bold mb-2">{i18n.language === 'en' ? 'Collapse' : 'انهيار'}</h3>
          <p className="text-gray-400 text-sm">
            {i18n.language === 'en'
              ? 'Wave function collapses when observed, collapsing all possibilities.'
              : 'دالة الموجة انهيار عند ملاحظتها مما يؤدي إلى انهيار جميع الاحتماليات'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schrodinger;
