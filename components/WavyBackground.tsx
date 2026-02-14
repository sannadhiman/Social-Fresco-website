import React, { useEffect, useRef } from 'react';

export const WavyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      // Handle High DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.008; // Speed of animation
      
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      // Configuration for the waves
      const lines = 6;
      const baseAmplitude = 80;
      const frequency = 0.0015;
      const centerY = height * 0.5;
      
      // Brand Yellow RGB: 245, 190, 11
      
      for (let i = 0; i < lines; i++) {
        // Offset each line slightly to create the "ribbon" or 3D effect
        const offset = (i / lines) * Math.PI * 2;
        
        // Vary opacity for depth
        const opacity = 0.2 + (Math.sin(time + offset) + 1) * 0.15;
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 190, 11, ${opacity})`;
        ctx.lineWidth = 2.5;

        for (let x = 0; x <= width; x += 5) {
          // Combine sine waves to create an organic, non-repetitive flowing shape
          const y = centerY 
            + Math.sin(x * frequency + time + offset) * baseAmplitude
            + Math.cos(x * frequency * 0.5 - time) * (baseAmplitude * 0.5)
            + Math.sin(x * frequency * 2 + time) * (baseAmplitude * 0.2);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        // Smooth out the line
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60 mix-blend-multiply"
      />
      {/* Add a fade mask so the waves don't look cut off at edges if they go high */}
      <div className="absolute inset-0 bg-gradient-to-b from-fresco-cream/80 via-transparent to-fresco-cream/80"></div>
    </div>
  );
};