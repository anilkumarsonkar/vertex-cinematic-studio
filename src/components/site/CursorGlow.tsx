import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      }
    };

    const tick = () => {
      tx += (x - tx) * 0.12;
      ty += (y - ty) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${tx - 18}px, ${ty - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen md:block"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.2 250 / 0.35), oklch(0.65 0.25 305 / 0.12) 35%, transparent 60%)",
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
      <div
        ref={trailRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-9 w-9 rounded-full mix-blend-difference md:block"
        style={{
          border: "1.5px solid oklch(0.98 0 0 / 0.8)",
          willChange: "transform",
        }}
      />
    </>
  );
}
