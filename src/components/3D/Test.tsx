import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Test() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(camera);

    const loader = new GLTFLoader();
    const group = new THREE.Group();
    loader.load("/model/model.gltf", (gltf) => {
      group.add(gltf.scene);
      scene.add(group);
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 5);
    scene.add(light);

    camera.position.z = 5;

    function tick() {
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }

    tick();
  }, []);

  return <canvas ref={canvas}></canvas>;
}
