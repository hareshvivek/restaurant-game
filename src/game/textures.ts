import * as THREE from 'three';

interface WoodTextureOptions {
  width?: number;
  height?: number;
  columns?: number;
  grainIntensity?: number;
  knots?: boolean;
}

/**
 * Procedurally generates a realistic wood plank texture matching reference plank layouts:
 * - Staggered vertical boards with varied plank lengths
 * - Micro-bevel joints and dark recessed seams
 * - Organic longitudinal wood grain fibers and subtle grain whorls
 * - Preserves the exact specified base color
 */
export function createWoodPlankTexture(
  baseColorHex: number,
  options: WoodTextureOptions = {}
): THREE.CanvasTexture {
  const width = options.width || 1024;
  const height = options.height || 1024;
  const columns = options.columns || 6;
  const grainIntensity = options.grainIntensity ?? 0.18;
  const hasKnots = options.knots ?? true;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Base RGB decomposition
  const rBase = (baseColorHex >> 16) & 255;
  const gBase = (baseColorHex >> 8) & 255;
  const bBase = baseColorHex & 255;

  // Background fill
  ctx.fillStyle = `rgb(${rBase}, ${gBase}, ${bBase})`;
  ctx.fillRect(0, 0, width, height);

  const colWidth = width / columns;

  // Generate staggered planks in each column
  // Each column has random joint heights to match reference varied plank lengths
  for (let c = 0; c < columns; c++) {
    const colLeft = c * colWidth;

    // Seeded/varied horizontal cuts per column
    // e.g. 2 to 3 planks per column height
    const cuts: number[] = [0];
    const cutCount = 2 + (c % 2);
    for (let i = 1; i < cutCount; i++) {
      // Deterministic staggered offsets based on column index
      const offsetRatio = (0.28 + ((c * 0.37 + i * 0.43) % 0.48));
      cuts.push(Math.floor(height * offsetRatio));
    }
    cuts.sort((a, b) => a - b);
    cuts.push(height);

    for (let p = 0; p < cuts.length - 1; p++) {
      const pTop = cuts[p];
      const pBottom = cuts[p + 1];
      const pHeight = pBottom - pTop;

      // Subtle plank-to-plank shade variation (±6%)
      const plankTint = ((c * 17 + p * 23) % 15 - 7) / 100;
      const rP = Math.min(255, Math.max(0, Math.round(rBase * (1 + plankTint))));
      const gP = Math.min(255, Math.max(0, Math.round(gBase * (1 + plankTint))));
      const bP = Math.min(255, Math.max(0, Math.round(bBase * (1 + plankTint))));

      // Draw plank base with subtle gradient across width (simulating light falloff on board crown)
      const grad = ctx.createLinearGradient(colLeft, pTop, colLeft + colWidth, pTop);
      grad.addColorStop(0, `rgb(${Math.round(rP * 0.94)}, ${Math.round(gP * 0.94)}, ${Math.round(bP * 0.94)})`);
      grad.addColorStop(0.3, `rgb(${rP}, ${gP}, ${bP})`);
      grad.addColorStop(0.85, `rgb(${Math.round(rP * 1.04)}, ${Math.round(gP * 1.04)}, ${Math.round(bP * 1.04)})`);
      grad.addColorStop(1, `rgb(${Math.round(rP * 0.92)}, ${Math.round(gP * 0.92)}, ${Math.round(bP * 0.92)})`);

      ctx.fillStyle = grad;
      ctx.fillRect(colLeft, pTop, colWidth, pHeight);

      // Realistic Wood Grain Lines along plank length
      ctx.save();
      ctx.beginPath();
      ctx.rect(colLeft, pTop, colWidth, pHeight);
      ctx.clip();

      const grainCount = Math.floor(colWidth * 0.7);
      for (let g = 0; g < grainCount; g++) {
        const xOffset = colLeft + (g / grainCount) * colWidth;
        const grainWave = ((c * 31 + g * 13) % 40) - 20;
        const grainAlpha = (0.04 + ((g * 7) % 10) * 0.015) * grainIntensity;
        const isDark = (g % 3 !== 0);

        ctx.strokeStyle = isDark
          ? `rgba(0, 0, 0, ${grainAlpha})`
          : `rgba(255, 255, 255, ${grainAlpha * 0.7})`;
        ctx.lineWidth = 1 + ((g * 3) % 2);

        ctx.beginPath();
        ctx.moveTo(xOffset, pTop);
        // Undulating grain curve
        const cp1x = xOffset + Math.sin((pTop + 50) * 0.015) * grainWave;
        const cp1y = pTop + pHeight * 0.35;
        const cp2x = xOffset - Math.sin((pTop + 200) * 0.015) * grainWave * 0.8;
        const cp2y = pTop + pHeight * 0.7;
        const endX = xOffset + Math.sin((pTop + 350) * 0.02) * (grainWave * 0.5);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, pBottom);
        ctx.stroke();
      }

      // Occasional natural wood knot / whorl
      if (hasKnots && ((c + p) % 3 === 1)) {
        const knotX = colLeft + colWidth * (0.35 + ((c * 9) % 30) / 100);
        const knotY = pTop + pHeight * (0.3 + ((p * 11) % 40) / 100);
        const knotRadius = 6 + ((c * 7) % 8);

        ctx.strokeStyle = `rgba(0, 0, 0, ${grainIntensity * 0.35})`;
        ctx.lineWidth = 1.5;
        for (let k = 1; k <= 4; k++) {
          ctx.beginPath();
          ctx.ellipse(knotX, knotY, knotRadius * k * 0.6, knotRadius * k * 1.5, 0.05, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      ctx.restore();

      // Transverse horizontal plank seam (end joint)
      if (p > 0) {
        // Soft recessed gap
        ctx.fillStyle = 'rgba(60, 40, 20, 0.45)';
        ctx.fillRect(colLeft, pTop - 1, colWidth, 1.5);
        // Subtle top bevel highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.fillRect(colLeft, pTop + 0.5, colWidth, 1);
      }
    }

    // Longitudinal vertical plank seam between columns
    if (c > 0) {
      // Soft seam
      ctx.fillStyle = 'rgba(60, 40, 20, 0.45)';
      ctx.fillRect(colLeft - 1, 0, 1.5, height);
      // Subtle edge bevel highlight along the board edge
      ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.fillRect(colLeft + 0.5, 0, 1, height);
    }
  }

  // Outer edge boundary seams for seamless tiling
  ctx.fillStyle = 'rgba(60, 40, 20, 0.35)';
  ctx.fillRect(0, 0, 1, height);
  ctx.fillRect(width - 1, 0, 1, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  return texture;
}
