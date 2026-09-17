import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export function BackgroundPixelStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COUNT = 320;
    const SPEED = 0.0006;
    const PIXEL = 2;

    let stars: Star[] = [];
    let raf: number;
    let w = 0;
    let h = 0;

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      stars = Array.from({ length: COUNT }, () => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        z: Math.random(),
        px: 0,
        py: 0,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.z -= SPEED;
        if (s.z <= 0) {
          s.x = Math.random() * 2 - 1;
          s.y = Math.random() * 2 - 1;
          s.z = 1;
          s.px = 0;
          s.py = 0;
        }

        const k = 0.5 / s.z;
        const sx = s.x * k * w + w / 2;
        const sy = s.y * k * h + h / 2;

        if (sx < 0 || sx >= w || sy < 0 || sy >= h) {
          s.px = 0;
          s.py = 0;
          continue;
        }

        const size = Math.max(PIXEL, PIXEL * (1 - s.z) * 3);
        const alpha = Math.min(1, (1 - s.z) * 1.4);

        const px = Math.round(sx / PIXEL) * PIXEL;
        const py = Math.round(sy / PIXEL) * PIXEL;

        if (s.px !== 0 && s.py !== 0) {
          ctx!.beginPath();
          ctx!.moveTo(s.px, s.py);
          ctx!.lineTo(px, py);
          ctx!.strokeStyle = `rgba(142, 180, 232, ${alpha * 0.35})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        ctx!.fillStyle = `rgba(232, 238, 247, ${alpha})`;
        ctx!.fillRect(px, py, Math.round(size), Math.round(size));

        s.px = px;
        s.py = py;
      }

      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}