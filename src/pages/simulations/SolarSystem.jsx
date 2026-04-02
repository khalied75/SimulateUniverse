import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Planet = ({ distance, size, color, speed, label }) => {
  const meshRef = useRef();
  const orbitRef = useRef();

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += speed;
      if (meshRef.current) {
        meshRef.current.position.x = Math.cos(angle) * distance;
        meshRef.current.position.z = Math.sin(angle) * distance;
        meshRef.current.rotation.y += 0.01;
      }
      if (orbitRef.current) {
        orbitRef.current.rotation.y = 0;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [distance, speed]);

  return (
    <>
      {/* Orbit line */}
      <line ref={orbitRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={64}
            array={new Float32Array(
              Array.from({ length: 64 }).flatMap((_, i) => [
                Math.cos((i / 64) * Math.PI * 2) * distance,
                0,
                Math.sin((i / 64) * Math.PI * 2) * distance,
              ])
            )}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#666666" transparent opacity={0.3} />
      </line>
      {/* Planet */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </>
  );
};

const SolarSystemVisualization = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 15, 20]} />
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffff00" />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={1} />
      </mesh>

      {/* Planets */}
      <Planet distance={4} size={0.3} color="#8c7853" speed={0.01} label="Mercury" />
      <Planet distance={6} size={0.5} color="#ffa500" speed={0.008} label="Venus" />
      <Planet distance={8} size={0.5} color="#4169e1" speed={0.006} label="Earth" />
      <Planet distance={10} size={0.4} color="#cd5c5c" speed={0.004} label="Mars" />
      <Planet distance={14} size={1} color="#daa520" speed={0.002} label="Jupiter" />
      <Planet distance={18} size={0.8} color="#f4a460" speed={0.001} label="Saturn" />
    </>
  );
};

const SolarSystem = () => {
  const { i18n } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          {i18n.language === 'en' ? 'Solar System Simulation' : 'محاكاة النظام الشمسي'}
        </h1>
        <p className="text-gray-400">
          {i18n.language === 'en' 
            ? 'Explore our solar system and planetary motion'
            : 'استكشف نظامنا الشمسي وحركة الكواكب'}
        </p>
      </div>

      <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <Canvas>
          <SolarSystemVisualization />
        </Canvas>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">
          {i18n.language === 'en' ? 'Planets Information' : 'معلومات الكواكب'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Mercury', nameAr: 'عطارد' },
            { name: 'Venus', nameAr: 'الزهرة' },
            { name: 'Earth', nameAr: 'الأرض' },
            { name: 'Mars', nameAr: 'المريخ' },
            { name: 'Jupiter', nameAr: 'المشتري' },
            { name: 'Saturn', nameAr: 'زحل' },
          ].map((planet) => (
            <div key={planet.name} className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-yellow-400 font-bold">{i18n.language === 'en' ? planet.name : planet.nameAr}</p>
              <p className="text-gray-400 text-sm"></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarSystem;
