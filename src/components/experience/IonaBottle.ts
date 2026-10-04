import * as THREE from 'three';

export interface BottleInstance {
  group: THREE.Group;
  bottleBody: THREE.Mesh;
  waterMesh: THREE.Mesh;
  capMesh: THREE.Mesh;
  labelMesh: THREE.Mesh;
  bubblesGroup: THREE.Group;
  dropletsGroup: THREE.Group;
  update: (time: number, scrollProgress: number) => void;
  setScale: (scale: number) => void;
}

export function createBottleLabelTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 2048;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Transparent background
    // Draw subtle vertical grid markers
    ctx.strokeStyle = 'rgba(125, 234, 240, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(120, 200);
    ctx.lineTo(120, 1848);
    ctx.moveTo(904, 200);
    ctx.lineTo(904, 1848);
    ctx.stroke();
    ctx.setLineDash([]);

    // Small top branding
    ctx.fillStyle = 'rgba(247, 255, 255, 0.75)';
    ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '6px';
    ctx.fillText('EST. 2026', 512, 380);

    // Giant vertical IONA text
    ctx.save();
    ctx.translate(512, 1024);
    ctx.rotate(-Math.PI / 2);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 italic 280px "Barlow Condensed", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('IONA', 0, 0);

    // Secondary sub-label under IONA
    ctx.font = '700 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(125, 234, 240, 0.95)';
    ctx.letterSpacing = '8px';
    ctx.fillText('ALKALINE IONISED WATER', 0, 130);

    ctx.restore();

    // Bottom technical labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '700 28px "Barlow Condensed", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.textAlign = 'center';
    ctx.fillText('750 ML · pH 8.5+ · BALANCED MINERALS', 512, 1720);

    // Thin technical line
    ctx.strokeStyle = 'rgba(32, 191, 211, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 1750);
    ctx.lineTo(724, 1750);
    ctx.stroke();

    ctx.fillStyle = 'rgba(169, 196, 202, 0.6)';
    ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('RECYCLABLE BPA-FREE RESIN · REFINED BY NATURE', 512, 1780);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
}

export function createIonaBottle(options?: {
  heightScale?: number;
  radiusScale?: number;
  waterColor?: string;
}): BottleInstance {
  const group = new THREE.Group();
  group.name = 'iona-bottle';

  const hScale = options?.heightScale ?? 1.0;
  const rScale = options?.radiusScale ?? 1.0;
  const waterColor = options?.waterColor ?? '#7deaf0';

  const bodyRadius = 0.55 * rScale;
  const bodyHeight = 2.4 * hScale;
  const neckRadius = 0.22 * rScale;
  const neckHeight = 0.55 * hScale;
  const capHeight = 0.45 * hScale;

  // 1. Outer Glass/PET Shell
  // Create bottle profile curve using LatheGeometry for photorealistic smooth organic curves
  const points: THREE.Vector2[] = [];
  
  // Base chamfer
  points.push(new THREE.Vector2(0, -bodyHeight * 0.5));
  points.push(new THREE.Vector2(bodyRadius * 0.85, -bodyHeight * 0.5));
  points.push(new THREE.Vector2(bodyRadius, -bodyHeight * 0.5 + 0.1));
  
  // Straight body
  points.push(new THREE.Vector2(bodyRadius, bodyHeight * 0.35));
  
  // Elegant shoulder curve
  points.push(new THREE.Vector2(bodyRadius * 0.95, bodyHeight * 0.42));
  points.push(new THREE.Vector2(bodyRadius * 0.6, bodyHeight * 0.5));
  points.push(new THREE.Vector2(neckRadius, bodyHeight * 0.5 + neckHeight * 0.4));
  
  // Neck
  points.push(new THREE.Vector2(neckRadius, bodyHeight * 0.5 + neckHeight));
  points.push(new THREE.Vector2(neckRadius * 1.06, bodyHeight * 0.5 + neckHeight + 0.04));
  points.push(new THREE.Vector2(neckRadius, bodyHeight * 0.5 + neckHeight + 0.08));

  const latheGeometry = new THREE.LatheGeometry(points, 48);
  
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#DDFEFF'),
    metalness: 0.05,
    roughness: 0.03,
    transmission: 0.92,
    ior: 1.48,
    thickness: 0.8,
    transparent: true,
    opacity: 0.92,
    reflectivity: 0.85,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    side: THREE.DoubleSide,
  });

  const bottleBody = new THREE.Mesh(latheGeometry, glassMaterial);
  bottleBody.castShadow = true;
  bottleBody.receiveShadow = true;
  group.add(bottleBody);

  // 2. Inner Water Mesh
  const innerPoints: THREE.Vector2[] = [];
  const innerRadius = (bodyRadius - 0.04);
  const innerHeight = bodyHeight * 0.95;

  innerPoints.push(new THREE.Vector2(0, -innerHeight * 0.5));
  innerPoints.push(new THREE.Vector2(innerRadius * 0.85, -innerHeight * 0.5));
  innerPoints.push(new THREE.Vector2(innerRadius, -innerHeight * 0.5 + 0.08));
  innerPoints.push(new THREE.Vector2(innerRadius, innerHeight * 0.34));
  innerPoints.push(new THREE.Vector2(innerRadius * 0.92, innerHeight * 0.4));
  innerPoints.push(new THREE.Vector2(neckRadius - 0.04, innerHeight * 0.48));
  innerPoints.push(new THREE.Vector2(0, innerHeight * 0.48));

  const waterLathe = new THREE.LatheGeometry(innerPoints, 36);
  const waterMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(waterColor),
    metalness: 0.0,
    roughness: 0.02,
    transmission: 0.85,
    ior: 1.333, // Water refractive index
    thickness: 1.2,
    transparent: true,
    opacity: 0.88,
    attenuationColor: new THREE.Color('#06232D'),
    attenuationDistance: 1.5,
  });

  const waterMesh = new THREE.Mesh(waterLathe, waterMaterial);
  group.add(waterMesh);

  // 3. Precision Aluminum Cap
  const capGeo = new THREE.CylinderGeometry(neckRadius * 1.08, neckRadius * 1.08, capHeight, 32);
  const capMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#E2EEF2'),
    metalness: 0.92,
    roughness: 0.22,
  });
  const capMesh = new THREE.Mesh(capGeo, capMat);
  capMesh.position.y = bodyHeight * 0.5 + neckHeight + capHeight * 0.45;
  group.add(capMesh);

  // Cap rim ring
  const capRingGeo = new THREE.TorusGeometry(neckRadius * 1.09, 0.02, 16, 32);
  const capRingMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#20BFD3'),
    metalness: 0.8,
    roughness: 0.3,
    emissive: new THREE.Color('#20BFD3'),
    emissiveIntensity: 0.4,
  });
  const capRing = new THREE.Mesh(capRingGeo, capRingMat);
  capRing.rotation.x = Math.PI / 2;
  capRing.position.y = capMesh.position.y - capHeight * 0.45;
  group.add(capRing);

  // 4. Label Surface Cylinder (Hugging the body)
  const labelGeo = new THREE.CylinderGeometry(
    bodyRadius + 0.005,
    bodyRadius + 0.005,
    bodyHeight * 0.72,
    48,
    1,
    true,
    -Math.PI * 0.5,
    Math.PI
  );
  const labelTexture = createBottleLabelTexture();
  const labelMat = new THREE.MeshBasicMaterial({
    map: labelTexture,
    transparent: true,
    opacity: 0.92,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const labelMesh = new THREE.Mesh(labelGeo, labelMat);
  labelMesh.position.y = -bodyHeight * 0.06;
  group.add(labelMesh);

  // 5. Internal micro-bubbles
  const bubblesGroup = new THREE.Group();
  const bubbleCount = 45;
  const bubbleGeo = new THREE.SphereGeometry(1, 8, 8);
  const bubbleMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#DDFEFF'),
    roughness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.7,
    ior: 1.1,
  });

  const bubbleInstances: { mesh: THREE.Mesh; speed: number; seed: number; baseY: number }[] = [];

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
    const radius = 0.015 + Math.random() * 0.035;
    bubble.scale.set(radius, radius, radius);

    const r = Math.random() * (innerRadius * 0.7);
    const theta = Math.random() * Math.PI * 2;
    bubble.position.x = Math.cos(theta) * r;
    bubble.position.z = Math.sin(theta) * r;
    
    const baseY = -innerHeight * 0.45 + Math.random() * innerHeight * 0.85;
    bubble.position.y = baseY;

    bubblesGroup.add(bubble);
    bubbleInstances.push({
      mesh: bubble,
      speed: 0.2 + Math.random() * 0.4,
      seed: Math.random() * 10,
      baseY,
    });
  }
  group.add(bubblesGroup);

  // 6. Exterior Water Droplets
  const dropletsGroup = new THREE.Group();
  const dropletCount = 28;
  const dropGeo = new THREE.SphereGeometry(1, 12, 12);
  const dropMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#FFFFFF'),
    roughness: 0.02,
    transmission: 0.95,
    ior: 1.33,
    transparent: true,
    opacity: 0.85,
  });

  for (let i = 0; i < dropletCount; i++) {
    const drop = new THREE.Mesh(dropGeo, dropMat);
    const dScale = 0.012 + Math.random() * 0.028;
    // Flatten hemisphere
    drop.scale.set(dScale, dScale * 1.3, dScale * 0.45);

    const angle = Math.random() * Math.PI * 2;
    const y = -bodyHeight * 0.4 + Math.random() * (bodyHeight * 0.75);
    drop.position.x = Math.cos(angle) * (bodyRadius + 0.008);
    drop.position.z = Math.sin(angle) * (bodyRadius + 0.008);
    drop.position.y = y;
    drop.lookAt(new THREE.Vector3(0, y, 0));
    drop.rotateY(Math.PI);

    dropletsGroup.add(drop);
  }
  group.add(dropletsGroup);

  const update = (time: number, _scrollProgress: number) => {
    // Animate inner bubbles rising gently
    bubbleInstances.forEach((b) => {
      const topLimit = innerHeight * 0.44;
      const bottomLimit = -innerHeight * 0.45;
      const travelRange = topLimit - bottomLimit;
      
      const newY = bottomLimit + (((b.baseY - bottomLimit) + time * b.speed) % travelRange);
      b.mesh.position.y = newY;
      b.mesh.position.x += Math.sin(time * 2 + b.seed) * 0.0008;
      b.mesh.position.z += Math.cos(time * 2 + b.seed) * 0.0008;
    });
  };

  const setScale = (scale: number) => {
    group.scale.set(scale, scale, scale);
  };

  return {
    group,
    bottleBody,
    waterMesh,
    capMesh,
    labelMesh,
    bubblesGroup,
    dropletsGroup,
    update,
    setScale,
  };
}
