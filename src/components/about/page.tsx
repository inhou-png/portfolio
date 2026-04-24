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


//TESTE
import face from '@/images/head-torta-gif.gif'

export default function About({ setModelComputer, setModelHead }: any) {
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
            // trigger: "#about",
            // pin: true,
            // end: "+=4000px",
            // markers: true,
            animation: tl,
        });

        tl.fromTo(
            "#marker",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 2.1, ease: "power2.out" },
            1
        );

        tl.fromTo(
            "#title-person",
            { color: "#fff" },
            { color: "#000" },
            1
        );

        let split = SplitText.create("#title-person", {
            type: "chars,words,lines",
            linesClass: "chars",
            autoSplit: true,
            mask: "chars",
        });

        tl.from(split.chars, {
            duration: 0.6,
            xPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out",
        }, 1);

        // tl.fromTo("#about-text-1", {
        //     scale: 1,
        // }, {
        //     scale: 1,
        //     scrambleText: {
        //         text: "Curto criar soluções limpas e reutilizáveis. Nos últimos anos, tenho me concentrado em tecnologias JavaScript, incluindo React, TypeScript, bem como ferramentas como Tailwind CSS e styled-components. Também tenho experiência em Next.js, Angular 2+, Sass e Stylus. Sempre aplico boas práticas de desenvolvimento para garantir a eficácia e a facilidade de manutenção do meu código.",
        //     chars: "001"
        //   },
        //     ease: "power3.inOut"
        // }, ">");

        // tl.fromTo("#about-text-2", {
        //     scale: 1,
        // }, {
        //     scale: 1,
        //     scrambleText: {
        //         text: "Também tenho uma grande paixão por um bom design em geral (UI, web, tipografia, pixel art, animação, ilustrações isométricas, branding e assim por diante).",
        //         chars: "001"
        //     },
        //     ease: "power3.inOut"
        // }, ">");
    });

    //LEGO HEAD
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

        loader.load("/Head/Head.gltf", (gltf) => {
            console.log("intervalId.current", intervalId.current);
            clearInterval(intervalId.current);

            const model = gltf.scene;

            setModelHead(gltf.scene);

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

    //MACINTOSH
    useEffect(() => {
        let threeEl: any = document.querySelector(".three-pc");
        let aboutEl: any = document.querySelector(".about-media-pc");

        if (!threeEl) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            1,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0x000000, 0);

        renderer.setSize(aboutEl.clientWidth, aboutEl.clientWidth);
        threeEl.appendChild(renderer.domElement);

        camera.position.set(1, 1, 5);

        scene.add(new THREE.AmbientLight(0xffccff, 2));

        const dirLight = new THREE.DirectionalLight(0xffccff, 0);
        const dirLight2 = new THREE.DirectionalLight(0xfff000, 2);
        // const dirLight3 = new THREE.DirectionalLight(0xfff000, 4);
        const dirLight3 = new THREE.DirectionalLight(0xffcccc, 2);

        dirLight.position.set(5, 5, 5);
        dirLight2.position.set(-10, 0, 10);
        dirLight3.position.set(10, -2, 20);
        scene.add(dirLight, dirLight2, dirLight3);


        const loader = new GLTFLoader();

        loader.load(
            "/macintosh/scene.gltf",
            (gltf) => {
                const model = gltf.scene;

                scene.add(model);

                model.scale.set(7, 7, 7);
                model.position.set(0, 0, 0);

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());

                model.position.sub(center);

                console.log("Modelo carregado!");
            },
            (xhr) => {
                if (xhr.total > 0) {
                    const percent = (xhr.loaded / xhr.total) * 100;
                    console.log(`Carregando: ${percent.toFixed(1)}%`);
                } else {
                    console.log(`Carregando: ${xhr.loaded} bytes`);
                }
            },
            (error) => {
                console.error("Erro ao carregar GLTF:", error);
            }
        );


        let mouseX: any = 0;
        let mouseY: any = 0;

        window.addEventListener("mousemove", (e) => {
            mouseX = ((e.clientX / window.innerWidth) * 2 - 1) * -1;
            mouseY = (-(e.clientY / window.innerHeight) * 2 + 1) * -1;
        });

        function animate() {
            const intensity = 0.3;

            camera.position.x += (mouseX * intensity - camera.position.x) * 0.05;
            camera.position.y += ((mouseY + 2) * intensity - camera.position.y) * 0.05;

            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }

        renderer.setAnimationLoop(animate);

        return () => {
            renderer.dispose();
            threeEl.removeChild(renderer.domElement);
        };

    }, []);

    //STARS
    useEffect(() => {
        /* ── Canvas stars ── */
        const canvas: any = document.getElementById('stars');
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();

        window.addEventListener('resize', () => { resize(); buildStars(); });

        // Three layers: tiny/dim, medium, bright
        const layers = [
            { count: 350, rMin: 0.3, rMax: 0.8, alphaMin: 0.2, alphaMax: 0.5 },
            { count: 1500, rMin: 0.7, rMax: 1.4, alphaMin: 0.4, alphaMax: 0.75 },
            { count: 60, rMin: 1.3, rMax: 2.2, alphaMin: 0.7, alphaMax: 1.0 },
        ];

        let stars = [];

        function buildStars() {
            stars = [];
            layers.forEach(l => {
                for (let i = 0; i < l.count; i++) {
                    const hue = Math.random() < 0.2
                        ? "ocean"   // blue-white
                        : Math.random() < 0.15
                            ? `pink`  // warm yellow
                            : `white`;   // white
                    stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        r: l.rMin + Math.random() * (l.rMax - l.rMin),
                        alpha: l.alphaMin + Math.random() * (l.alphaMax - l.alphaMin),
                        twinkleSpeed: 0.3 + Math.random() * 1.5,
                        twinkleOffset: Math.random() * Math.PI * 2,
                        color: hue,
                        // glow: Math.random() < 0.25,
                    });
                }
            });
        }
        buildStars();

        let time = 0;
        function drawStars(dt) {
            time += dt;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                const flicker = 0.6 + 0.4 * Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
                const a = s.alpha * flicker;
                ctx.globalAlpha = a;

                if (s.glow) {
                    const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
                    g.addColorStop(0, s.color);
                    g.addColorStop(1, 'transparent');
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.globalAlpha = a;
                ctx.fillStyle = s.color;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        }

        // Animation loop
        let last = performance.now();
        function loop(now) {
            drawStars((now - last) / 1000);
            last = now;
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }, [])

    return (
        <div id="about" className='min-h-screen flex justify-center items-center my-10 md:my-0 overflow-hidden'>
            <div id='background-projects' className='flex overflow-hidden justify-center items-center absolute rounded-full'>
                <canvas id="stars" className='absolute right-0'></canvas>
            </div>

            <div id="person" className='flex flex-wrap justify-center items-center'>
                <div id="text-about" className='text-gray-300 w-[80%] md:w-[40%] order-2 md:order-1'>
                    <h1 className="mb-5 text-3xl md:text-4xl font-bold relative inline-block">
                        {/* Marca texto animado */}
                        <span
                            id='marker'
                            className="absolute -inset-x-2 -inset-y-1 -z-10"
                            style={{
                                background: "#fff",
                                transform: "rotate(-1.5deg) scaleX(0)",
                            }}
                        />
                        <span id="title-person">Um pouco sobre mim</span>
                    </h1>
                    <div className='font-serif leading-relaxed text-lg'>
                        <p className='mb-5' id='about-text-1'>
                            Curto criar soluções limpas e reutilizáveis. Nos últimos anos, tenho me concentrado em tecnologias JavaScript, incluindo React, TypeScript, bem como ferramentas como Tailwind CSS e styled-components. Também tenho experiência em Next.js, Angular 2+, Sass e Stylus. Sempre aplico boas práticas de desenvolvimento para garantir a eficácia e a facilidade de manutenção do meu código.
                        </p>

                        <p id='about-text-2'>
                            Também tenho uma grande paixão por um bom design em geral (UI, web, tipografia, pixel art, animação, ilustrações isométricas, branding e assim por diante).
                        </p>
                    </div>
                </div>



                <div id="3d-about" className='w-[90%] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center about-media-head'>
                    {/* <Image alt='Face' src={face} className='w-[70%] h-auto md:w-[80%]' /> */}
                    <div className='three-head'></div>
                </div>
            </div>

            <div id="projects" className='absolute flex flex-wrap justify-center items-center h-[100dvh] w-[100dvw]'>
                <h1 id="title-projects" className='absolute top-[25px] text-white text-3xl'>Ferramentas</h1>

                <div className='tools w-[50px] text-white'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

                    <span>JavaScript</span>
                </div>

                <div className='tools w-[50px] text-white'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                    <span>TypeScript</span>
                </div>

                <div className='tools w-[50px] text-white'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

                    <span>mongoDB</span>
                </div>


                <div className='tools w-[50px] text-white'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

                    <span>Node.js</span>
                </div>

                <div className='tools w-[50px] text-white'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

                    <span>Express</span>
                </div>

                <div id="3d-pc" className='w-[500px] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center about-media-pc'>
                    <div className='three-pc'></div>
                </div>
            </div>
        </div>
    )
}