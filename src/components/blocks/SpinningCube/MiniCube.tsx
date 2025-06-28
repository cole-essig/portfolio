import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MiniCube = ({ name }) => {
  const miniCubeRef = useRef(null);

  useEffect(() => {
    const cube = miniCubeRef.current;
    if (!cube) return;

    gsap.to(cube, {
      rotationX: "+=360",
      rotationY: "+=360",
      duration: 6,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="relative w-10 h-10 perspective-[600px] my-12">
      <div className="absolute left-1/2 top-1/2 -translate-x-[35px] -translate-y-[60px] translate-z-0 text-xl font-bold text-slate-100 z-10 drop-shadow-[0_0_10px_rgba(204,230,255,0.6)]">
        {name}
      </div>
      <div
        className="relative w-full h-full transform-style-preserve-3d"
        ref={miniCubeRef}
      >
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden translate-z-5" />
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden rotate-y-180 translate-z-5" />
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden rotate-y-90 translate-z-5" />
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden -rotate-y-90 translate-z-5" />
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden rotate-x-90 translate-z-5" />
        <div className="absolute w-10 h-10 bg-[rgba(212,27,209,0.85)] border border-black backface-hidden -rotate-x-90 translate-z-5" />
      </div>
    </div>
  );
};

export default MiniCube;
