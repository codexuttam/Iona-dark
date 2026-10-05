import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { createIonaBottle, BottleInstance } from './IonaBottle';
import { createWaterWave, WaterWaveInstance } from './WaterSurface';
import { createWaterSphere, WaterSphereInstance } from './WaterSphere';
import { createEnvironmentAtmosphere, EnvironmentAtmosphere } from './BubblesAndParticles';
import { lerp } from '../../lib/utils';
import envMapUrl from '../../assets/images/underwater_ambient_env_1791133503549.jpg';

interface SceneProps {
  scrollProgress: number;
  activeSectionIndex: number;
  selectedBottleIndex?: number;
  onBottleInteract?: (isInteracting: boolean) => void;
}

export default function Scene({
  scrollProgress,
  activeSectionIndex: _activeSectionIndex,
  selectedBottleIndex = 1,
}: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Interactive drag state
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const manualRotation = useRef({ x: 0, y: 0 });
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(scrollProgress);
  scrollProgressRef.current = scrollProgress;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Scene & Fog Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#02080D');
    scene.fog = new THREE.FogExp2('#02080D', 0.08);

    // 3. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight('#06232D', 1.4);
    scene.add(ambientLight);

    const mainCyanLight = new THREE.DirectionalLight('#20BFD3', 2.8);
    mainCyanLight.position.set(3, 4, 3);
    mainCyanLight.castShadow = !isMobile;
    scene.add(mainCyanLight);

    const rimLight = new THREE.DirectionalLight('#7DEAF0', 3.2);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    const bottomDeepLight = new THREE.PointLight('#083E50', 2.0, 15);
    bottomDeepLight.position.set(0, -3, 2);
    scene.add(bottomDeepLight);

    const topSoftSpot = new THREE.SpotLight('#DDFEFF', 2.2, 20, Math.PI / 4, 0.5, 1);
    topSoftSpot.position.set(0, 7, 2);
    scene.add(topSoftSpot);

    // 5. Environment Map (Texture Loader)
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      envMapUrl,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      },
      undefined,
      () => {
        // Fallback gracefully if load fails
      }
    );

    // 6. Objects & Entities
    // Main Hero Bottle
    const mainBottle: BottleInstance = createIonaBottle();
    scene.add(mainBottle.group);

    // Secondary bottles for Section 07 (Product Range showcase)
    const bottle250: BottleInstance = createIonaBottle({ heightScale: 0.72, radiusScale: 0.85 });
    const bottle1L: BottleInstance = createIonaBottle({ heightScale: 1.28, radiusScale: 1.15 });
    bottle250.group.position.set(-1.8, -0.4, 0);
    bottle1L.group.position.set(1.8, 0.2, 0);
    bottle250.group.visible = false;
    bottle1L.group.visible = false;
    scene.add(bottle250.group);
    scene.add(bottle1L.group);

    // Water wave in background
    const waterWave: WaterWaveInstance = createWaterWave();
    scene.add(waterWave.mesh);

    // Section 03 Water Sphere
    const waterSphere: WaterSphereInstance = createWaterSphere();
    scene.add(waterSphere.group);

    // Underwater particles, bubbles, rays
    const atmosphere: EnvironmentAtmosphere = createEnvironmentAtmosphere();
    scene.add(atmosphere.bubblesGroup);
    scene.add(atmosphere.particlesField);
    scene.add(atmosphere.energyRibbon);
    scene.add(atmosphere.lightRays);

    setIsReady(true);

    // 7. Mouse & Touch Interactions
    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseTarget.current.x = normX * 0.35;
      mouseTarget.current.y = normY * 0.25;

      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMousePosition.current.x;
        const deltaY = e.clientY - previousMousePosition.current.y;
        manualRotation.current.y += deltaX * 0.008;
        manualRotation.current.x += deltaY * 0.008;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      // Allow drag rotation primarily around Section 06/Bottle or anywhere when hovering
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.current.y;
        manualRotation.current.y += deltaX * 0.008;
        manualRotation.current.x += deltaY * 0.008;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 8. Resize Handler
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 9. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let currentCamX = 0;
    let currentCamY = 0;
    let currentCamZ = 5.8;
    let currentLookAtX = 0;
    let currentLookAtY = 0;
    let currentLookAtZ = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const p = scrollProgressRef.current;

      // Smooth mouse lerp
      mouseCurrent.current.x = lerp(mouseCurrent.current.x, mouseTarget.current.x, 0.06);
      mouseCurrent.current.y = lerp(mouseCurrent.current.y, mouseTarget.current.y, 0.06);

      // Damp manual rotation back toward 0 gently when not dragging
      if (!isDraggingRef.current) {
        manualRotation.current.x = lerp(manualRotation.current.x, 0, 0.02);
      }

      // Camera Choreography interpolation based on scrollProgress p (0 to 1)
      let targetCamX = 0;
      let targetCamY = 0;
      let targetCamZ = 5.8;
      let targetLookAtX = 0;
      let targetLookAtY = 0;
      let targetLookAtZ = 0;

      // Bottle Transform targets
      let targetBottleX = 0;
      let targetBottleY = 0;
      let targetBottleZ = 0;
      let targetRotX = 0;
      let targetRotY = 0;
      let targetRotZ = 0;
      let targetScale = isMobile ? 0.8 : 1.0;

      // Multi-bottle visibility flag for Section 07 and 08
      let showMultiBottles = false;

      // Check section element positions for pinpoint accurate scroll choreography
      const processEl = document.getElementById('process');
      const bottleEl = document.getElementById('bottle');
      const rangeEl = document.getElementById('range');
      const questionsEl = document.getElementById('questions');

      let processFraction = -1;
      if (processEl) {
        const pRect = processEl.getBoundingClientRect();
        if (pRect.top <= window.innerHeight * 0.8 && pRect.bottom >= window.innerHeight * 0.2) {
          const totalDistance = pRect.height + window.innerHeight * 0.6;
          const current = (window.innerHeight * 0.8) - pRect.top;
          processFraction = Math.min(1, Math.max(0, current / totalDistance));
        }
      }

      const rangeRect = rangeEl?.getBoundingClientRect();
      const bottleRect = bottleEl?.getBoundingClientRect();
      const questionsRect = questionsEl?.getBoundingClientRect();

      if (rangeRect && rangeRect.top <= window.innerHeight * 0.6) {
        // Section 07 & 08: PRODUCT RANGE & QUESTIONS
        showMultiBottles = true;
        targetCamX = 0;
        targetCamY = questionsRect && questionsRect.top <= window.innerHeight * 0.5 ? 0.1 : -0.15;
        targetCamZ = 5.6;

        targetBottleX = 0;
        targetBottleY = -0.1;
        targetBottleZ = 0;

        targetRotX = 0;
        targetRotY = time * 0.1;
        targetRotZ = 0;
        targetScale = 0.95;
      } else if (bottleRect && bottleRect.top <= window.innerHeight * 0.5) {
        // Section 06: OUR BOTTLE SHOWCASE (Close-up 360 inspection)
        const bTotal = bottleRect.height || window.innerHeight;
        const bProgress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - bottleRect.top) / bTotal));
        targetCamX = lerp(-0.5, 0.0, bProgress);
        targetCamY = 0.0;
        targetCamZ = lerp(4.5, 3.8, bProgress);

        targetBottleX = lerp(0.5, 0.0, bProgress);
        targetBottleY = 0;
        targetBottleZ = 0;

        targetRotX = 0.05;
        targetRotY = 2.5 + bProgress * Math.PI + time * 0.15;
        targetRotZ = 0.0;
        targetScale = isMobile ? 0.95 : 1.15;
      } else if (processFraction >= 0) {
        // Section 05: THE IONA PROCESS (FROM NATURE TO YOU.)
        // Dynamic bottle rotation driven directly by scrolling through the 4 stages!
        targetCamX = lerp(0.3, -0.1, processFraction);
        targetCamY = 0.05;
        targetCamZ = 4.8;

        targetBottleX = isMobile ? 0 : 0.48;
        targetBottleY = 0.0;
        targetBottleZ = 0;

        targetRotX = 0.08;
        // Rotates smoothly through 450 degrees dynamically linked to the user's scroll:
        targetRotY = 0.6 + processFraction * (Math.PI * 2.5) + time * 0.04;
        targetRotZ = -0.06;
        targetScale = isMobile ? 0.75 : 1.05;
      } else {
        // Sections 01 - 04 (before Process)
        if (p < 0.12) {
          // Section 01: HERO
          const t = p / 0.12;
          targetCamX = lerp(0, 0.3, t);
          targetCamY = lerp(0, 0.1, t);
          targetCamZ = lerp(5.8, 5.4, t);

          targetBottleX = lerp(0.85, 1.1, t);
          targetBottleY = lerp(0.1, 0.15, t);
          targetBottleZ = 0;

          targetRotX = 0.25;
          targetRotY = -0.45 + time * 0.15;
          targetRotZ = -0.58;
        } else if (p < 0.25) {
          // Section 02: PHILOSOPHY (WATER, REIMAGINED.)
          const t = (p - 0.12) / 0.13;
          targetCamX = lerp(0.3, -0.8, t);
          targetCamY = lerp(0.1, 0.25, t);
          targetCamZ = lerp(5.4, 5.1, t);

          targetBottleX = lerp(1.1, 1.35, t);
          targetBottleY = lerp(0.15, 0.0, t);
          targetBottleZ = 0;

          targetRotX = 0.15;
          targetRotY = lerp(-0.45, 0.4, t) + time * 0.1;
          targetRotZ = lerp(-0.58, -0.15, t);
        } else if (p < 0.38) {
          // Section 03: ALKALINE WATER (BALANCED BY NATURE.)
          const t = (p - 0.25) / 0.13;
          targetCamX = lerp(-0.8, -1.0, t);
          targetCamY = lerp(0.25, 0.35, t);
          targetCamZ = lerp(5.1, 4.8, t);

          targetBottleX = lerp(1.35, 1.0, t);
          targetBottleY = lerp(0.0, -0.1, t);
          targetBottleZ = 0;

          targetRotX = 0.1;
          targetRotY = 0.6 + time * 0.12;
          targetRotZ = -0.1;
        } else {
          // Section 04: IONISED WATER (IONISED. REFINED.)
          const t = Math.min(1, Math.max(0, (p - 0.38) / 0.12));
          targetCamX = lerp(-1.0, 0.8, t);
          targetCamY = lerp(0.35, 0.2, t);
          targetCamZ = lerp(4.8, 4.6, t);

          targetBottleX = lerp(1.0, -0.8, t);
          targetBottleY = lerp(-0.1, 0.0, t);
          targetBottleZ = 0;

          targetRotX = 0.15;
          targetRotY = 1.0 + time * 0.2;
          targetRotZ = 0.1;
        }
      }

      // Smooth camera interpolation
      currentCamX = lerp(currentCamX, targetCamX + mouseCurrent.current.x * 0.4, 0.05);
      currentCamY = lerp(currentCamY, targetCamY + mouseCurrent.current.y * 0.4, 0.05);
      currentCamZ = lerp(currentCamZ, targetCamZ, 0.05);
      camera.position.set(currentCamX, currentCamY, currentCamZ);

      currentLookAtX = lerp(currentLookAtX, targetLookAtX, 0.05);
      currentLookAtY = lerp(currentLookAtY, targetLookAtY, 0.05);
      currentLookAtZ = lerp(currentLookAtZ, targetLookAtZ, 0.05);
      camera.lookAt(currentLookAtX, currentLookAtY, currentLookAtZ);

      // Smooth Bottle interpolation
      mainBottle.group.position.x = lerp(mainBottle.group.position.x, targetBottleX, 0.06);
      mainBottle.group.position.y = lerp(mainBottle.group.position.y, targetBottleY + Math.sin(time * 1.2) * 0.04, 0.06);
      mainBottle.group.position.z = lerp(mainBottle.group.position.z, targetBottleZ, 0.06);

      // Add mouse drag manual rotation + gentle mouse follow
      mainBottle.group.rotation.x = lerp(
        mainBottle.group.rotation.x,
        targetRotX + mouseCurrent.current.y * 0.5 + manualRotation.current.x,
        0.06
      );
      mainBottle.group.rotation.y = lerp(
        mainBottle.group.rotation.y,
        targetRotY + mouseCurrent.current.x * 0.6 + manualRotation.current.y,
        0.06
      );
      mainBottle.group.rotation.z = lerp(mainBottle.group.rotation.z, targetRotZ, 0.06);

      mainBottle.setScale(targetScale);
      mainBottle.update(time, p);

      // Update secondary range bottles
      bottle250.group.visible = showMultiBottles;
      bottle1L.group.visible = showMultiBottles;
      if (showMultiBottles) {
        bottle250.group.rotation.y = time * 0.12;
        bottle1L.group.rotation.y = time * 0.09;
        bottle250.update(time, p);
        bottle1L.update(time, p);
      }

      // Update background water wave
      waterWave.update(time, p);

      // Update water sphere
      waterSphere.update(time, p);

      // Update atmosphere (bubbles, particles, rays)
      atmosphere.update(time, p);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  // Update bottle size selection when user clicks a size in ProductRange
  useEffect(() => {
    // Subtly highlighted when selected
  }, [selectedBottleIndex]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
      style={{ touchAction: 'pan-y' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />
      {!isReady && (
        <div className="absolute inset-0 bg-[#02080D] transition-opacity duration-1000 pointer-events-none" />
      )}
    </div>
  );
}
