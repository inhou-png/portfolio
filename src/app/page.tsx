'use client'

//GSAP ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Observer, Draggable);

// import Image from 'next/image'
import React, { useEffect, useState, useRef, use } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'
import System from "@/components/system/page";

export default function Home() {
  const [modelHead, setModelHead]: any = useState(null);
  const [modelComputer, setModelComputer]: any = useState(null);
  const refMain: any = useRef(null);

  //GSAP
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: false
    });

    const tl = gsap.timeline();
    const tlBack = gsap.timeline();

    ScrollTrigger.create({
      start: "top top",
      // end: "+=4000px",
      pin: true,
      scrub: true,
      markers: true,
      animation: tlBack,
    })

    ScrollTrigger.create({
      trigger: "#pin",
      start: "top top",
      end: "+=4000px",
      pin: true,
      scrub: true,
      markers: true,
      animation: tl,
      onUpdate: (self) => {
      }
    })

    //background
    const proxy = { progress: 0 };
    tlBack.to(proxy, {
      progress: 1,
      onUpdate() {
        const offset = proxy.progress * 2 - 1;
        const el = refMain.current!;

        // cada ponto do degradê mapeia offset -1→0→+1
        // p=0 → tudo preto | p=0.5 → degradê | p=1 → tudo azul
        const p = proxy.progress;
        const x0 = Math.max(0, -offset) * 100;           // onde o preto termina (%)
        const x1 = Math.min(1, 1 - offset) * 100;        // onde o azul começa (%)
        // const rgbColor = [56, 80, 126];

        el.style.background = `linear-gradient(to bottom,rgb(0,0,0) ${x0}%,rgb(3,8,30) ${x0 + (x1 - x0) * 0.05}%,rgb(30,45,73) 100%)`;
      },
    }, 0);


    //FIRST TIME
    tl.to("#text-about", {
      xPercent: -150,
      // opacity: 0,
      ease: "power3.inOut"
    }, 0.2);

    tl.to(".three-head", {
      yPercent: 150,
      // xPercent: -120,
      // scale: 50,
      // opacity: 0,
      // rotate: 360,
      ease: "power3.inOut",
      onStart: () => {
        //trocar face da cabeça de lego
        console.log("modelHead", modelHead);
      }
    }, 0.2);

    let scaleBgProjects = 4;
    tl.fromTo("#background-projects", {
      width: 0,
      height: 0,
      bottom: -100,
      right: 0,
      backgroundColor: "#000",
      scale: 0,
      // transformOrigin: "bottom right",
      // background: "radial-gradient(circle at 150% 150%, hsla(295, 70%, 40%, 0.55) 0%, hsla(295, 70%, 40%, 0.28) 0%, transparent 0%), radial-gradient(circle at 150% 150%,  hsla(316, 85%, 55%, 1) 0%, hsla(316, 85%, 55%, 0.70) 40%, transparent 80%), transparent",
      // background: "radial-gradient(circle at 50% 130%, hsla(295, 70%, 40%, 0.55) 0%, hsla(295, 70%, 40%, 0.28) 35%, transparent 60%), radial-gradient(circle at 50% 88%,  hsla(316, 85%, 55%, 1) 0%, hsla(316, 85%, 55%, 0.70) 40%, transparent 80%),hsl(330, 75%, 88%)",
      // background: "radial-gradient(circle at 50% 62%, hsla(178, 82%, 60%, 0.70) 0%, hsla(178, 82%, 60%, 0.42) 30%, transparent 44%),radial-gradient(circle at 50% 80%, hsla(278, 70%, 35%, 0.80) 0%, hsla(278, 70%, 35%, 0.40) 35%, transparent 68%),radial-gradient(circle at 50% 62%, hsla(300, 90%, 50%, 1)    0%, hsla(300, 90%, 50%, 0.70) 40%, transparent 90%),hsl(315, 70%, 82%)",
    }, {
      width: "100vh",
      height: "100vh",
      bottom: 0,
      scale: scaleBgProjects,
      // ease: "power3.inOut",
    }, "<");

    //stars
    tl.fromTo("#stars", {
      scale: 1,
      left: "-100vh",
      borderRadius: "100%",
      onUpdate : ScrollTrigger.update
    }, {
      scale: 1 / scaleBgProjects,
      left: "-68vh",
      borderRadius: "0%",
      onUpdate : ScrollTrigger.update
    }, "<");

    //SECOND TIME
    // tl.fromTo("#card-about", {
    //   yPercent: 120,
    //   opacity: 0,
    // }, {
    //   yPercent: 0,
    //   opacity: 1,
    //   ease: "power3.inOut"
    // }, "-=0.3");

    tl.fromTo(".three-pc", {
      scale: 0,
      // xPercent: 120,
      // opacity: 0,
    }, {
      scale: 1,
      // xPercent: 0,
      // opacity: 1,
      ease: "power3.inOut"
    }, "-=0.4");

    // tl.to("#card-about", {
    //   xPercent: -200,
    //   scale: 2,
    //   opacity: 1,
    //   ease: "power3.inOut"
    // }, 0.8);

    // const threePcEl: any = document.querySelector(".three-pc");
    // tl.to(".three-pc", {
    //   x: () => (window.innerWidth / 4 - threePcEl?.offsetWidth / 5) * -1,
    //   opacity: 1,
    //   scale: 2,
    //   ease: "power3.inOut"
    // }, 0.8);
    // tl.to(".three-pc",
    //   {
    //     yPercent: 125,
    //     scale: 10,
    //     ease: "none",
    //     duration: 0.2
    //   }, ">");


    // //SYSTEM OS
    // const macLoader: any = gsap.to("#mac-loader", {
    //   scale: 0.8,
    //   yoyo: true,
    //   repeat: -1,
    //   duration: 1,
    //   ease: "power1.inOut",
    //   paused: true,
    //   opacity: 1,
    // });

    // tl.to("#test-os", {
    //   opacity: 1,
    //   display: "block",
    //   ease: "none",
    //   duration: 0,
    //   onComplete: () => {
    //     gsap.set("#desktop", { opacity: 0 });
    //     const bootTl = gsap.timeline();

    //     bootTl
    //       .add(() => macLoader.play())

    //       .to({}, { duration: 2 }) // espera 2s

    //       .add(() => macLoader.pause())

    //       .to("#mac-loader", { opacity: 0, duration: 0.5 })

    //       .to("#mac-welcome", { opacity: 1, duration: 0.5 })

    //       .to({}, { duration: 2 }) // espera 2s

    //       .to("#mac-welcome", { opacity: 0, duration: 0.5 })

    //       .to("#desktop", { opacity: 1, duration: 0.5 });
    //   }
    // }, ">");


    Draggable.create(".drag-item", {
      type: "x,y",
      bounds: ".drag-zone",
      onDragStart: function () {
        console.log(this.target);
        gsap.set(this.target.querySelector("span"), {
          background: "black",
          color: "white"
        });
      },
      onDragEnd: function () {
        console.log(this.target);
        gsap.set(this.target.querySelector("span"), {
          background: "white",
          color: "black"
        });
      }
    });
  });

  return (
    <main className={`scrollbar`} ref={refMain} style={{
      position: "fixed",
      inset: 0,
      zIndex: -1,
      background: "#000",
    }}>
      <div id="smooth-content" className="scrollbar" style={{ willChange: "transform" }}>
        <Intro />
        <div id="pin" style={{ willChange: "transform" }}>
          <About setModelComputer={setModelComputer} setModelHead={setModelHead} />
        </div>
        {/* <Projects /> */}
      </div>

      <div id='test-os'>
        <System />
      </div>

      <FixedItems />
    </main>
  )
}
