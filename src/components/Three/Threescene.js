import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import earthTexture from '../../Assets/moonwhite.jpg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeScene() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background

        // Set a fixed size for the container
        const containerWidth = 400;
        const containerHeight = 300;

        renderer.setSize(containerWidth, containerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Geometry and Material
        const geometry = new THREE.SphereGeometry(1, 32, 32);

        // Load texture
        const textureLoader = new THREE.TextureLoader();
        const earthTextureMap = textureLoader.load(earthTexture);
        earthTextureMap.encoding = THREE.sRGBEncoding; // Set texture encoding for better color representation

        const material = new THREE.MeshStandardMaterial({ map: earthTextureMap, transparent: true });
        material.metalness = -3; // Adjust material properties as needed

        // Sphere
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Center the sphere in the scene
        sphere.position.set(0, 0, 0);

        // Adjust camera position
        camera.position.z = 3;

        // Add ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add directional light to cast shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Setup OrbitControls for mouse controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        // Enable gamma correction in the renderer
        renderer.gammaOutput = true;
        renderer.gammaFactor = 2.2;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update controls
            controls.update();

            renderer.render(scene, camera);
        };

        animate();

        // Handle resizing
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(containerWidth, containerHeight);
            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ overflow: 'auto', width: '400px', height: '300px' }} />;
}

export default ThreeScene;
