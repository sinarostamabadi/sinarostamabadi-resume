"use client";

import { useEffect, useRef } from "react";
import { useApp } from "@/context/AppProviders";

type Blob = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
};

export function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.35 });
  const { theme } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dark = theme === "dark";

    const blobs: Blob[] = [
      { x: 0.2, y: 0.25, r: 0.28, vx: 0.00018, vy: 0.00012, hue: 178 },
      { x: 0.72, y: 0.3, r: 0.34, vx: -0.00014, vy: 0.00016, hue: 198 },
      { x: 0.45, y: 0.72, r: 0.3, vx: 0.0001, vy: -0.00013, hue: 28 },
      { x: 0.85, y: 0.75, r: 0.22, vx: -0.00016, vy: -0.0001, hue: 168 },
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / width;
      mouse.current.y = e.clientY / height;
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      const g = ctx.createLinearGradient(0, 0, width, height);
      if (dark) {
        g.addColorStop(0, "#0a1220");
        g.addColorStop(0.5, "#0d1626");
        g.addColorStop(1, "#0b1422");
      } else {
        g.addColorStop(0, "#e7edf5");
        g.addColorStop(0.5, "#eef3f9");
        g.addColorStop(1, "#dde6f2");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0.05 || b.x > 0.95) b.vx *= -1;
        if (b.y < 0.05 || b.y > 0.95) b.vy *= -1;

        const px = (b.x + (mouse.current.x - 0.5) * 0.08) * width;
        const py = (b.y + (mouse.current.y - 0.5) * 0.08) * height;
        const radius = Math.max(width, height) * b.r;
        const pulse = 1 + Math.sin(frame * 0.012 + b.hue) * 0.04;

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius * pulse);
        if (b.hue < 40) {
          grad.addColorStop(0, dark ? "rgba(201, 107, 44, 0.16)" : "rgba(201, 107, 44, 0.18)");
          grad.addColorStop(0.45, dark ? "rgba(201, 107, 44, 0.05)" : "rgba(201, 107, 44, 0.06)");
          grad.addColorStop(1, "rgba(201, 107, 44, 0)");
        } else {
          const alpha = dark ? 0.16 : 0.22;
          grad.addColorStop(0, `hsla(${b.hue}, 55%, ${dark ? 42 : 48}%, ${alpha})`);
          grad.addColorStop(0.5, `hsla(${b.hue}, 50%, ${dark ? 48 : 55}%, ${dark ? 0.06 : 0.08})`);
          grad.addColorStop(1, `hsla(${b.hue}, 50%, 60%, 0)`);
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, radius * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
