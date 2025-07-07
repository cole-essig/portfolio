import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MiniCube: React.FC<{ name: string }> = ({ name }) => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    gsap.to(cube, {
      rotateX: '+=360',
      rotateY: '+=360',
      duration: 6,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="relative w-10 h-10 my-12" style={{ perspective: '800px' }}>
      <div className="absolute left-1/2 top-[-8px] transform -translate-x-1/2 -translate-y-full text-sm font-bold text-slate-100 drop-shadow-md z-10">
        {name}
      </div>

      <div
        ref={cubeRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(0deg) rotateY(0deg)',
        }}
      >
        <div
          className="absolute w-full h-full bg-[#FFC800] border-black"
          style={{ transform: 'translateZ(20px)' }}
        />
        <div
          className="absolute w-full h-full bg-[#FFC800] border border-black"
          style={{ transform: 'rotateY(180deg) translateZ(20px)' }}
        />
        <div
          className="absolute w-full h-full bg-[#FFC800] border border-black"
          style={{ transform: 'rotateY(90deg) translateZ(20px)' }}
        />
        <div
          className="absolute w-full h-full bg-[#FFC800] border border-black"
          style={{ transform: 'rotateY(-90deg) translateZ(20px)' }}
        />
        <div
          className="absolute w-full h-full bg-[#FFC800] border border-black"
          style={{ transform: 'rotateX(90deg) translateZ(20px)' }}
        />
        <div
          className="absolute w-full h-full bg-[#FFC800] border border-black"
          style={{ transform: 'rotateX(-90deg) translateZ(20px)' }}
        />
      </div>
    </div>
  );
};

export default MiniCube;


