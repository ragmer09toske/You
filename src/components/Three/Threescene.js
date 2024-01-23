import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

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
        const renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Geometry and Material
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        
        // Cube
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resizing
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} />
    );
}

export default ThreeScene;