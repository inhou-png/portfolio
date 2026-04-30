'use client'

import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin);

import Image from 'next/image'


//IMAGENS
import face from '@/images/head-torta-gif.gif'
import moon from "@/images/moon.png";

export default function About() {
    let intervalId: any = useRef(null);

    //gsap
    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
            normalizeScroll: false
        });

        const tl = gsap.timeline();

        ScrollTrigger.create({
            start: "top top",
            scrub: true,
            trigger: "#about",
            // pin: true,
            // end: "+=4000px",
            markers: true,
            animation: tl,
        });

        gsap.to("#moon", {
            rotate: "360deg",
            repeat: -1,
            ease: "none",
            duration: 60
        })

        gsap.to("#head", {
            x: 25,
            y: 25,
            yoyo: true,
            ease: "power1.inOut",
            duration: 3,
            repeat: -1,
        })
    });

    useEffect(() => {
        const threeEl: any = document.querySelector(".three-head");
        const aboutEl: any = document.querySelector(".about-media-head");

        if (!threeEl) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.set(1, 1, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(aboutEl.clientWidth, aboutEl.clientWidth);
        threeEl.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 4);
        keyLight.position.set(5, 8, 5);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 3);
        fillLight.position.set(-3, 2, 5);
        scene.add(fillLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 2);
        topLight.position.set(0, 10, 0);
        scene.add(topLight);

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = ((e.clientX / window.innerWidth) * 2 - 1) * -1;
            mouseY = (-(e.clientY / window.innerHeight) * 2 + 1) * -1;
        };

        window.addEventListener("mousemove", onMouseMove);

        const loader = new GLTFLoader();

        const textureLoader = new THREE.TextureLoader();
        const textures = [
            textureLoader.load("/Head/face5.jpeg"),
            textureLoader.load("/Head/face6.jpeg"),
            textureLoader.load("/Head/face7.jpeg"),
        ];

        textures.forEach((t) => {
            t.flipY = false;
            t.colorSpace = THREE.SRGBColorSpace;
        });

        loader.load("/portfolio/Head/Head.gltf", (gltf) => {
            clearInterval(intervalId.current);

            const model = gltf.scene;

            scene.add(model);

            model.scale.set(0.006, 0.006, 0.006);

            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);

            let indexTexture = 0;

            intervalId.current = setInterval(() => {
                model.traverse((obj: any) => {
                    if (obj.isMesh && obj.material?.name === "CorDePele2") {
                        obj.material.map = textures[indexTexture];
                        obj.material.needsUpdate = true;
                    }
                });

                indexTexture = (indexTexture + 1) % textures.length;
            }, 3000);
        });

        function animate() {
            const intensity = 0.5;

            camera.position.x += (mouseX * intensity - camera.position.x) * 0.05;
            camera.position.y += (mouseY * intensity - camera.position.y) * 0.05;

            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);

            renderer.setAnimationLoop(null);
            renderer.dispose();

            if (renderer.domElement && threeEl.contains(renderer.domElement)) {
                threeEl.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div id='about' className='flex justify-center items-center w-[100%] relative'>
            <div id="text-about" className='relative flex flex-col gap-[25px]'>
                <h1 className="text-[5dvw] font-bold w-[250px] leading-[4dvw] text-white">
                    ABOUT
                    <span className='block text-[DeepPink]'>ME</span>
                </h1>

                <p className='leading-relaxed w-[35dvw] text-gray-300 text-[1.3dvw]'>
                    {/* Curto criar soluções limpas e reutilizáveis. Nos últimos anos, tenho me concentrado em tecnologias JavaScript, incluindo React, TypeScript, bem como ferramentas como Tailwind CSS e styled-components. Também tenho experiência em Next.js, Angular 2+, Sass e Stylus. Sempre aplico boas práticas de desenvolvimento para garantir a eficácia e a facilidade de manutenção do meu código. */}
                    {/* I have a bachelor's degree in Computer Science, I've been working as a developer for 4 years, and I love solving logic puzzles. Oh, and I have a dog named Zeca. */}
                    I have a bachelor's degree in Computer Science, I've been working as a developer for 4 years, and I love solving logic puzzles, as well as valuing good design and well-built interfaces. Oh, and I have a dog named Zeca.
                </p>

                <Image src={moon} alt='moon' className='w-[50dvw] absolute top-[50dvh]' id='moon' />
            </div>

            <div id="3d-about" className='w-[90%] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center about-media-head'>
                <div className='three-head' id='head'></div>
                {/* <Image alt='Face' src={face} className='w-[70%] h-auto md:w-[80%]' /> */}
            </div>
        </div>
    )
}