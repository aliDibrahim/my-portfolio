// components/CursorGlow.jsx
import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-14 h-14 rounded-full bg-primary/15 shadow-lg shadow-primary/25 pointer-events-none z-9999 transition-transform"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(20px)',
      }}
    />
  );
};

export default CursorGlow;