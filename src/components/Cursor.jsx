import { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

export default function Cursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = cursorDot.current;
    const ring = cursorRing.current;
    if (!dot || !ring) return;

    document.body.classList.add('custom-cursor-active');

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX = mouseX;
      dotY = mouseY;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      animId = requestAnimationFrame(animate);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      if (isClickable) {
        dot.classList.add('scale-0');
        ring.classList.add('scale-150', '!opacity-50', '!border-accent');
      } else {
        dot.classList.remove('scale-0');
        ring.classList.remove('scale-150', '!opacity-50', '!border-accent');
      }
    };

    const onMouseLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnterWindow = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '0.7';
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveWindow, { passive: true });
    document.addEventListener('mouseenter', onMouseEnterWindow, { passive: true });
    
    animId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      document.removeEventListener('mouseenter', onMouseEnterWindow);
      cancelAnimationFrame(animId);
    };
  }, []);

  const dotColor = theme === 'light' ? '#6366f1' : '#818cf8';
  const ringBorder = theme === 'light' ? 'rgba(99,102,241,0.4)' : 'rgba(129,140,248,0.5)';

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ willChange: 'transform', backgroundColor: dotColor }}
      />
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] opacity-70 transition-[width,height,opacity,border-color] duration-200"
        style={{ willChange: 'transform', border: `1px solid ${ringBorder}` }}
      />
    </>
  );
}

