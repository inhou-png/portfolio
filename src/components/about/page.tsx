'use client'

import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import { Draggable } from 'gsap/Draggable';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Observer, Draggable, SplitText);

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
            // trigger: "#about",
            start: "top top",
            // pin: true,
            scrub: true,
            // markers: true,
            animation: tl,
        })

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

    return (
        <div id="about" className='min-h-screen flex justify-center items-center my-10 md:my-0 overflow-hidden'>

            <div className='flex flex-wrap justify-center items-center'>
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
                        <p className='mb-5'>
                            Curto criar soluções limpas e reutilizáveis. Nos últimos anos, tenho me concentrado em tecnologias JavaScript, incluindo React, TypeScript, bem como ferramentas como Tailwind CSS e styled-components. Também tenho experiência em Next.js, Angular 2+, Sass e Stylus. Sempre aplico boas práticas de desenvolvimento para garantir a eficácia e a facilidade de manutenção do meu código.
                        </p>

                        <p>
                            Também tenho uma grande paixão por um bom design em geral (UI, web, tipografia, pixel art, animação, ilustrações isométricas, branding e assim por diante).
                        </p>
                    </div>
                </div>



                <div id="3d-about" className='w-[90%] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center about-media-head'>
                    {/* <Image alt='Face' src={face} className='w-[70%] h-auto md:w-[80%]' /> */}
                    <div className='three-head'></div>
                </div>
            </div>


            <div className='absolute flex flex-wrap justify-center items-center'>
                <div
                    id="card-about"
                    className="w-[85%] md:w-[45%] order-2 md:order-1 border-[3px] border-white bg-black p-0"
                    style={{ imageRendering: "pixelated", boxShadow: "6px 6px 0px #ff66a3" }}
                >

                    {/* Header */}
                    <div className="flex items-center justify-between border-b-[3px] border-white px-4 py-2">
                        <div className="flex gap-2">
                            <span className="block h-3 w-3 border-[2px] border-white bg-[#ff66a3]" />
                            <span className="block h-3 w-3 border-[2px] border-white bg-white/20" />
                            <span className="block h-3 w-3 border-[2px] border-white bg-white/20" />
                        </div>
                        <p className="font-mono text-[10px] font-[700] uppercase tracking-[0.2em] text-white/40">
                            sobre_mim.exe
                        </p>
                    </div>

                    {/* Avatar pixel + nome */}
                    <div className="flex items-center gap-4 border-b-[3px] border-white/20 px-4 py-4">
                        {/* Pixel avatar */}
                        <div
                            className="h-14 w-14 flex-shrink-0 border-[3px] border-white"
                            style={{
                                background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 7px,
            rgba(255,102,163,0.15) 7px,
            rgba(255,102,163,0.15) 8px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 7px,
            rgba(255,102,163,0.15) 7px,
            rgba(255,102,163,0.15) 8px
          ),
          #1a1a2e
        `,
                            }}
                        >
                            <div className="flex h-full w-full items-center justify-center font-mono text-[22px] font-[900] text-[#ff66a3]">
                                {'</>'}
                            </div>
                        </div>
                        <div>
                            <p className="font-mono text-[18px] font-[900] leading-none text-white">
                                Dev Front-end
                            </p>
                            <p className="mt-1 font-mono text-[11px] text-[#ff66a3]">
                                ● online
                            </p>
                        </div>
                    </div>

                    {/* Conteúdo principal */}
                    <div className="px-4 py-5">
                        <p className="mb-4 font-mono text-[13px] leading-[1.8] text-white/80">
                            Crio soluções limpas e reutilizáveis com foco em React, TypeScript e
                            Next.js. Boas práticas não são opcionais — são o padrão. Apaixonado
                            por UI, tipografia, pixel art, animação e branding.
                        </p>

                        {/* Stats pixel */}
                        <div className="mb-5 grid grid-cols-3 gap-[2px] border-[2px] border-white/20">
                            {[
                                { label: "anos xp", value: "3+" },
                                { label: "projetos", value: "20+" },
                                { label: "café/dia", value: "∞" },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col items-center border-[1px] border-white/10 py-3">
                                    <span className="font-mono text-[22px] font-[900] text-[#ff66a3]">{s.value}</span>
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-[4px]">
                            {["React", "TypeScript", "Next.js", "Tailwind", "GSAP"].map((tech) => (
                                <span
                                    key={tech}
                                    className="border-[2px] border-white/20 bg-white/5 px-2 py-[2px] font-mono text-[10px] font-[700] uppercase tracking-wider text-white/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                <div id="3d-pc" className='w-[90%] md:w-[30%] order-1 md:order-2 md:ml-10 mb-10 md:mb-0 flex justify-center about-media-pc'>
                    {/* <Image alt='Face' src={face} className='w-[70%] h-auto md:w-[80%]' /> */}
                    <div className='three-pc'></div>
                </div>
            </div>
        </div>
    )
}