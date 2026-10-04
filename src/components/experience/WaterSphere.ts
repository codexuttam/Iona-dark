import * as THREE from 'three';

export interface WaterSphereInstance {
  group: THREE.Group;
  sphereMesh: THREE.Mesh;
  particlesGroup: THREE.Group;
  update: (time: number, scrollProgress: number) => void;
  setVisible: (visible: boolean) => void;
  setOpacity: (opacity: number) => void;
}

export function createWaterSphere(): WaterSphereInstance {
  const group = new THREE.Group();
  group.name = 'water-sphere-group';

  // Radius ~1.5 - huge transparent water sphere
  const sphereGeo = new THREE.SphereGeometry(1.4, 48, 48);
  const sphereMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#7DEAF0'),
    roughness: 0.05,
    metalness: 0.05,
    transmission: 0.94,
    ior: 1.34,
    thickness: 1.4,
    transparent: true,
    opacity: 0.0, // starts invisible, revealed at Section 03
    reflectivity: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    attenuationColor: new THREE.Color('#083E50'),
    attenuationDistance: 2.0,
  });

  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
  group.add(sphereMesh);

  // Floating internal mineral particles inside the water sphere
  const particlesGroup = new THREE.Group();
  const particleCount = 60;
  const pGeo = new THREE.SphereGeometry(0.024, 8, 8);
  const pMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#20BFD3'),
    transparent: true,
    opacity: 0.0,
  });

  const pData: { mesh: THREE.Mesh; speed: number; orbitR: number; phi: number; theta: number }[] = [];

  for (let i = 0; i < particleCount; i++) {
    const mesh = new THREE.Mesh(pGeo, pMat);
    const orbitR = 0.2 + Math.random() * 1.05;
    const phi = Math.random() * Math.PI;
    const theta = Math.random() * Math.PI * 2;

    mesh.position.set(
      orbitR * Math.sin(phi) * Math.cos(theta),
      orbitR * Math.cos(phi),
      orbitR * Math.sin(phi) * Math.sin(theta)
    );

    particlesGroup.add(mesh);
    pData.push({
      mesh,
      speed: 0.3 + Math.random() * 0.5,
      orbitR,
      phi,
      theta,
    });
  }
  group.add(particlesGroup);

  // Position for Section 03: placed to the right
  group.position.set(1.4, 0.0, 0.2);

  const update = (time: number, scrollProgress: number) => {
    // Gentle pulsation and wobble
    const pulse = 1 + Math.sin(time * 1.5) * 0.03;
    sphereMesh.scale.set(pulse, 1 / pulse, pulse);

    // Orbit particles inside
    pData.forEach((p, idx) => {
      p.theta += p.speed * 0.015;
      p.phi += Math.sin(time * 0.5 + idx) * 0.005;
      p.mesh.position.x = p.orbitR * Math.sin(p.phi) * Math.cos(p.theta);
      p.mesh.position.y = p.orbitR * Math.cos(p.phi);
      p.mesh.position.z = p.orbitR * Math.sin(p.phi) * Math.sin(p.theta);
    });

    // Control visibility and opacity based on scrollProgress
    // Section 03 is around scroll 0.28 to 0.44
    const sStart = 0.25;
    const sPeak = 0.35;
    const sEnd = 0.46;

    let targetAlpha = 0;
    if (scrollProgress >= sStart && scrollProgress <= sEnd) {
      if (scrollProgress < sPeak) {
        targetAlpha = (scrollProgress - sStart) / (sPeak - sStart);
      } else {
        targetAlpha = 1 - (scrollProgress - sPeak) / (sEnd - sPeak);
      }
    }

    sphereMat.opacity = Math.max(0, Math.min(1, targetAlpha * 0.88));
    pMat.opacity = Math.max(0, Math.min(1, targetAlpha * 0.95));
    group.visible = targetAlpha > 0.01;
  };

  const setVisible = (v: boolean) => {
    group.visible = v;
  };

  const setOpacity = (op: number) => {
    sphereMat.opacity = op;
    pMat.opacity = op;
  };

  return { group, sphereMesh, particlesGroup, update, setVisible, setOpacity };
}
