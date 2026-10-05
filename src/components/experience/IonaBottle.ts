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

    // Whisper-thin delicate frame
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(140, 220);
    ctx.lineTo(140, 1828);
    ctx.moveTo(884, 220);
    ctx.lineTo(884, 1828);
    ctx.stroke();

    // Top provenance marker
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.font = '300 20px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '10px';
    ctx.fillText('SUBTERRANEAN SANCTUARY', 512, 380);

    // Architectural Monolithic IONA text
    ctx.save();
    ctx.translate(512, 1024);
    ctx.rotate(-Math.PI / 2);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '300 220px "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '18px';
    ctx.fillText('I O N A', 0, 0);

    // Quiet, elegant secondary label under IONA
    ctx.font = '300 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = 'rgba(215, 235, 240, 0.8)';
    ctx.letterSpacing = '12px';
    ctx.fillText('NATURAL ALKALINE & IONISED', 0, 120);

    ctx.restore();

    // Bottom origin and batch markers
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.font = '300 20px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '8px';
    ctx.textAlign = 'center';
    ctx.fillText('380M GLACIAL AQUIFER · pH 8.5', 512, 1710);

    ctx.fillStyle = 'rgba(165, 185, 195, 0.45)';
    ctx.font = '300 16px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('BPA-FREE CRYSTAL RESIN · BALANCED BY NATURE', 512, 1750);
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

  // 3. Precision Brushed Platinum / Silver Cap
  const capGeo = new THREE.CylinderGeometry(neckRadius * 1.07, neckRadius * 1.07, capHeight, 36);
  const capMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#DFE6E9'),
    metalness: 0.94,
    roughness: 0.22,
  });
  const capMesh = new THREE.Mesh(capGeo, capMat);
  capMesh.position.y = bodyHeight * 0.5 + neckHeight + capHeight * 0.45;
  group.add(capMesh);

  // Cap bevel ring (Polished subtle platinum chamfer)
  const capRingGeo = new THREE.TorusGeometry(neckRadius * 1.075, 0.015, 16, 36);
  const capRingMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#FFFFFF'),
    metalness: 0.98,
    roughness: 0.1,
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

  const dropInstances: { mesh: THREE.Mesh; angle: number; speed: number; baseY: number }[] = [];

  for (let i = 0; i < dropletCount; i++) {
    const drop = new THREE.Mesh(dropGeo, dropMat);
    const dScale = 0.012 + Math.random() * 0.028;
    // Flatten hemisphere
    drop.scale.set(dScale, dScale * 1.3, dScale * 0.45);

    const angle = Math.random() * Math.PI * 2;
    const baseY = -bodyHeight * 0.4 + Math.random() * (bodyHeight * 0.75);
    drop.position.x = Math.cos(angle) * (bodyRadius + 0.008);
    drop.position.z = Math.sin(angle) * (bodyRadius + 0.008);
    drop.position.y = baseY;
    drop.lookAt(new THREE.Vector3(0, baseY, 0));
    drop.rotateY(Math.PI);

    dropletsGroup.add(drop);
    dropInstances.push({
      mesh: drop,
      angle,
      speed: 0.02 + Math.random() * 0.05,
      baseY
    });
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

    // Animate exterior droplets trickling down
    dropInstances.forEach((d) => {
      const topLimit = bodyHeight * 0.35;
      const bottomLimit = -bodyHeight * 0.4;
      const travelRange = topLimit - bottomLimit;
      
      // Trickle down (negative speed)
      let newY = bottomLimit + (((d.baseY - bottomLimit) - time * d.speed) % travelRange);
      if (newY < bottomLimit) {
        newY += travelRange; // wrap around to top
      }
      d.mesh.position.y = newY;
      d.mesh.lookAt(new THREE.Vector3(0, newY, 0));
      d.mesh.rotateY(Math.PI);
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
