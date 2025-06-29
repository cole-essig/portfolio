import { useEffect, useRef } from 'react';
interface MeteorCanvasProps {
  stopCreation: number
}

const MeteorCanvas: React.FC<MeteorCanvasProps> = ({ stopCreation }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  type Meteor = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    length: number;
    opacity: number;
    width: number;
  };
  const meteors = useRef<Meteor[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function createMeteor() {
      if (!canvas) return;
      const startX = Math.random() * canvas.width;
      const startY = -20;
      const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
      const speed = Math.random() * 4 + 6;

      meteors.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 60 + 40,
        opacity: Math.random() * 0.5 + 0.3,
        width: Math.random() * 1.5 + 1,
      });
    }

    function drawMeteor(meteor: Meteor) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(
        meteor.x - meteor.vx * meteor.length,
        meteor.y - meteor.vy * meteor.length
      );
      ctx.strokeStyle = `rgba(255, 200, 0, ${meteor.opacity})`;
      ctx.lineWidth = meteor.width;
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'white';
      ctx.stroke();
    }

    let animationFrameId: number;

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < stopCreation) {
        createMeteor();
      }

      const mList = meteors.current;
      for (let i = mList.length - 1; i >= 0; i--) {
        const m = mList[i];
        m.x += m.vx;
        m.y += m.vy;

        drawMeteor(m);

        if (m.x > canvas.width + 400 || m.y > canvas.height + 400) {
          mList.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
    />
  );
}

export default MeteorCanvas;