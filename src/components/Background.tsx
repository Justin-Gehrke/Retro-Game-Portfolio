import { useEffect, useRef, useState } from "react";

type BackgroundProps = {
  tileScale?: number;            
  scrollSpeedPxPerSec?: number;  
  fillColor?: string;            
};

export default function Background({
  tileScale = 2,
  scrollSpeedPxPerSec = 60,
  fillColor = "#6e4616",
}: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  const [layout, setLayout] = useState(() => ({
    yStart: 0,
    canvasH: 0,
    winW: 0,
    winH: 0,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;


    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pixelart / Seams
    ctx.imageSmoothingEnabled = false;

    let animationFrameId = 0;

    const groundL1 = new Image();
    groundL1.src = "/Gameassets/roh/groundL1.png";
    const groundL2 = new Image();
    groundL2.src = "/Gameassets/roh/groundL2.png";
    const BASE_TILE = 64;

    const playerImg = new Image();
    playerImg.src = "/Gameassets/roh/PlayerRunn.png";

    const PLAYER_FRAMES = 4;
    const FRAME_WIDTH = 56;  // Breite eines Frames im Sprite
    const FRAME_HEIGHT = 56; // Höhe eines Frames

    let frameIndex = 0;
    let frameTimer = 0;
    const FRAME_DURATION = 0.23;



    // Welt/Timing
    let lastTime = performance.now();
    let scrollX = 0;

    // Canvas Maße in CSS-Pixeln
    let cssW = 0;
    let cssH = 0;


    // Berechnet die Layout-Parameter basierend auf der Fenstergröße und den Props
    const computeLayout = () => {
      const winW = window.innerWidth;
      const winH = window.innerHeight;


      const tileH = Math.round(BASE_TILE * tileScale);

      // Beginn letztes Drittel
      const yStart = Math.floor(winH * (2 / 3))


      const canvasH = tileH * 3;

      // Canvas darf nicht aus dem Bildschirm laufen
      const clampedCanvasH = Math.max(0, Math.min(canvasH, winH - yStart));

      // Canvas-Backing-Store (HiDPI)
      const dpr = window.devicePixelRatio || 1;
      cssW = winW;
      cssH = clampedCanvasH;

      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;


      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;

      setLayout({ yStart, canvasH: clampedCanvasH, winW, winH });
    };


    // Hilfsfunktion: zeichnet eine Reihe von gekachelten Bildern mit einem Offset
    const drawTiledRow = (
      img: HTMLImageElement,
      y: number,          // y innerhalb des Canvas (0..cssH)
      tileW: number,
      tileH: number,
      offsetX: number
    ) => {
      const yInt = Math.round(y);


      for (let x = -tileW + offsetX; x < cssW + tileW; x += tileW) {
        const xInt = Math.round(x);
        ctx.drawImage(img, xInt, yInt, tileW, tileH);
      }
    };


    // Animate-Funktion: scrollt den Hintergrund und animiert den Spieler
    //------------------------------------------------------------------------------ 
    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const tileW = Math.round(BASE_TILE * tileScale);
      const tileH = Math.round(BASE_TILE * tileScale);

      frameTimer += dt;
      if (frameTimer >= FRAME_DURATION) {
        frameTimer = 0;
        frameIndex = (frameIndex + 1) % PLAYER_FRAMES;
      }

      // Scroll nach links
      scrollX -= scrollSpeedPxPerSec * dt;

      // Wrap als int: 0..tileW-1
      const wrapped = Math.floor((((scrollX % tileW) + tileW) % tileW));

      
      ctx.clearRect(0, 0, cssW, cssH);

      
      if (groundL1.complete && groundL1.naturalWidth > 0) {
        drawTiledRow(groundL1, tileH, tileW, tileH, wrapped);
      }
      if (groundL2.complete && groundL2.naturalWidth > 0) {
        drawTiledRow(groundL2, tileH *2, tileW, tileH, wrapped);
      }

      if (playerImg.complete && playerImg.naturalWidth > 0) {
        const playerScale = tileScale + 2;

        const drawW = FRAME_WIDTH * playerScale;
        const drawH = FRAME_HEIGHT * playerScale;

        const playerX = 0; // feste X Position 
        const playerY = (layout.yStart - FRAME_WIDTH / 2) +6;
        console.log(playerY);
        const sx = frameIndex * FRAME_WIDTH;
        const sy = 0;

        ctx.drawImage(
          playerImg,
          sx, sy, FRAME_WIDTH, FRAME_HEIGHT,
          playerX, playerY,
          drawW, drawH
        );
      }
      animationFrameId = requestAnimationFrame(animate);
    };



    const start = () => {
      computeLayout();
      lastTime = performance.now();
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start wenn Bilder da sind
    if (groundL1.complete && groundL2.complete) {
      start();
    } else {
      let loaded = 0;
      const onLoad = () => {
        loaded += 1;
        if (loaded >= 2) start();
      };
      groundL1.addEventListener("load", onLoad);
      groundL2.addEventListener("load", onLoad);
    }

    const onResize = () => computeLayout();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
    };
  }, [tileScale, scrollSpeedPxPerSec]);

  return (
    <>
      
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          left: 0,
          top: layout.yStart,          
          width: layout.winW - 18,
          height: layout.canvasH,      
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      
      <div
        style={{
          position: "fixed",
          left: 0,
          top: layout.yStart + layout.canvasH,
          width: layout.winW - 18,
          height: `calc(100vh - ${layout.yStart + layout.canvasH}px )`,
          background: fillColor,
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
    </>
  );
}


