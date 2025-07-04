import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MiniCube from './MiniCube';

const MINI_CUBES = [
  { speed: 6, inclination: 30, name: 'JavaScript' },
  { speed: 8, inclination: 120, name: 'Typescript' },
  { speed: 10, inclination: 180, name: 'Python' },
  { speed: 12, inclination: 220, name: 'Node' },
  { speed: 14, inclination: 60, name: 'Java' },
  { speed: 16, inclination: 150, name: 'Express' },
];

const ORBIT_RADIUS_X = 420 * 0.7;
const ORBIT_RADIUS_Y = 160 * 0.7;
const ORBIT_RADIUS_Z = 50 * 0.7;

const degToRad = (deg: number) => deg * (Math.PI / 180);

const SpinningCube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const miniRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    // Manual rotation for better 3D effect
    gsap.to(cube, {
    rotateX: '+=360',
    rotateY: '+=360',
    duration: 6,
    repeat: -1,
    ease: 'linear',
  });

    gsap.to(cube, {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    MINI_CUBES.forEach((params, i) => {
      const el = miniRefs.current[i];
      if (!el) return;

      const angle = { theta: 0 };
      const inclinationRad = degToRad(params.inclination);

      gsap.to(angle, {
        theta: Math.PI * 2,
        duration: params.speed,
        repeat: -1,
        ease: 'linear',
        onUpdate: () => {
          const t = angle.theta;
          const x0 = ORBIT_RADIUS_X * Math.cos(t);
          const y0 = ORBIT_RADIUS_Y * Math.sin(t);
          const z0 = ORBIT_RADIUS_Z * Math.sin(t);

          const y = y0 * Math.cos(inclinationRad) - z0 * Math.sin(inclinationRad);
          const z = y0 * Math.sin(inclinationRad) + z0 * Math.cos(inclinationRad);
          const x = x0;

          const scale = 1 + z / (8 * ORBIT_RADIUS_Z);
          el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
          const opacity = gsap.utils.mapRange(-ORBIT_RADIUS_Z, 0, 0, 1, z);
          el.style.opacity = String(gsap.utils.clamp(0, 1, opacity));
        },
      });
    });
  }, []);

  return (
    <div className="relative w-[200px] h-[200px] mx-auto my-[200px] bg-[#111]">
      {/* Change perspective to 100px for fun */}
      <div className="relative w-[200px] h-[200px] mx-auto my-[200px] bg-[#111]" style={{ perspective: '1000px' }}>
        <div
          ref={cubeRef}
          className="relative w-full h-full transform-style-preserve-3d"
          style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(0deg) rotateY(0deg)',
          }}
        >
          {[
            'translateZ(100px)',
            'rotateY(180deg) translateZ(100px)',
            'rotateY(90deg) translateZ(100px)',
            'rotateY(-90deg) translateZ(100px)',
            'rotateX(90deg) translateZ(100px)',
            'rotateX(-90deg) translateZ(100px)',
          ].map((transform, idx) => (
            <div
              key={idx}
              className="absolute w-full h-full bg-[#036655] border border-blue-700/80 shadow-[0_0_10px_rgba(251,250,250,0.7),0_0_20px_rgba(246,245,246,0.4)] backface-visible"
              style={{ transform }}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-z-[50px] text-xl font-bold text-neutral-100 pointer-events-none z-10 drop-shadow-[0_0_20px_rgba(231,241,148,0.9)]">
        Software Engineer
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-style-preserve-3d">
        {MINI_CUBES.map((cube, index) => (
          <div
            key={index}
            ref={el => {
              miniRefs.current[index] = el;
            }}
            className="absolute transform-style-preserve-3d will-change-transform"
          >
            <MiniCube name={cube.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpinningCube;

