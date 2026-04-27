'use client'

//GSAP ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import InertiaPlugin from "gsap/InertiaPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Observer, Draggable, ScrambleTextPlugin, InertiaPlugin);

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

    // const tlBack = gsap.timeline();
    // ScrollTrigger.create({
    //   start: "top top",
    //   // end: "+=4000px",
    //   pin: true,
    //   // scrub: true,
    //   // markers: true,
    //   animation: tlBack,
    // })

    ScrollTrigger.create({
      trigger: "#pin",
      start: "top top",
      end: "+=4000px",
      pin: true,
      // scrub: true,
      // markers: true,
      animation: tl,
      onUpdate: (self) => {
      }
    })

    //background
    // tlBack.fromTo("body", {
    //   background: "rgb(0,0,0)"
    // }, {
    //   background: "rgb(30,45,73)"
    // }, 0);

    //FIRST TIME
    // tl.to("#text-about", {
    //   xPercent: -150,
    //   // opacity: 0,
    //   ease: "power3.inOut"
    // }, 0.2);

    // tl.to(".three-head", {
    //   yPercent: 150,
    //   // xPercent: -120,
    //   // scale: 50,
    //   // opacity: 0,
    //   // rotate: 360,
    //   ease: "power3.inOut",
    //   onStart: () => {
    //     //trocar face da cabeça de lego
    //     console.log("modelHead", modelHead);
    //   }
    // }, 0.2);

    // let scaleBgProjects = 4;
    // tl.fromTo("#background-projects", {
    //   width: 0,
    //   height: 0,
    //   bottom: -100,
    //   right: 0,
    //   backgroundColor: "#000",
    //   scale: 0,
    //   // transformOrigin: "bottom right",
    //   // background: "radial-gradient(circle at 150% 150%, hsla(295, 70%, 40%, 0.55) 0%, hsla(295, 70%, 40%, 0.28) 0%, transparent 0%), radial-gradient(circle at 150% 150%,  hsla(316, 85%, 55%, 1) 0%, hsla(316, 85%, 55%, 0.70) 40%, transparent 80%), transparent",
    //   // background: "radial-gradient(circle at 50% 130%, hsla(295, 70%, 40%, 0.55) 0%, hsla(295, 70%, 40%, 0.28) 35%, transparent 60%), radial-gradient(circle at 50% 88%,  hsla(316, 85%, 55%, 1) 0%, hsla(316, 85%, 55%, 0.70) 40%, transparent 80%),hsl(330, 75%, 88%)",
    //   // background: "radial-gradient(circle at 50% 62%, hsla(178, 82%, 60%, 0.70) 0%, hsla(178, 82%, 60%, 0.42) 30%, transparent 44%),radial-gradient(circle at 50% 80%, hsla(278, 70%, 35%, 0.80) 0%, hsla(278, 70%, 35%, 0.40) 35%, transparent 68%),radial-gradient(circle at 50% 62%, hsla(300, 90%, 50%, 1)    0%, hsla(300, 90%, 50%, 0.70) 40%, transparent 90%),hsl(315, 70%, 82%)",
    // }, {
    //   width: "100vh",
    //   height: "100vh",
    //   bottom: 0,
    //   scale: scaleBgProjects,
    //   // ease: "power3.inOut",
    // }, "<");

    //stars
    // tl.fromTo("#stars", {
    //   scale: 1,
    //   left: "-100vh",
    //   // left: "-110%",
    //   borderRadius: "100%",
    //   onUpdate: ScrollTrigger.update
    // }, {
    //   scale: 1 / scaleBgProjects,
    //   left: "-68vh",
    //   // left: "-68%",
    //   borderRadius: "0%",
    //   onUpdate: ScrollTrigger.update
    // }, "<");

    //tools
    // const toolsIcons = document.querySelectorAll(".tools-icon");
    // for (let tool of toolsIcons) {
    //   gsap.to(tool, {
    //     yPercent: Math.floor(Math.random() * (-30 - 30 + 1)) + 30,
    //     xPercent: Math.floor(Math.random() * (-30 - 30 + 1)) + 30,
    //     yoyo: true,
    //     ease: "power1.inOut",
    //     duration: 3,
    //     repeat: -1,
    //   })
    // }


    //SECOND TIME
    // tl.fromTo("#card-about", {
    //   yPercent: 120,
    //   opacity: 0,
    // }, {
    //   yPercent: 0,
    //   opacity: 1,
    //   ease: "power3.inOut"
    // }, "-=0.3");

    // tl.fromTo(".three-pc", {
    //   scale: 0,
    // }, {
    //   scale: 1,
    //   ease: "power3.inOut"
    // }, "-=0.4");

    // tl.fromTo(".tools-icon", {
    //   scale: 0,
    // }, {
    //   scale: 1,
    //   ease: "power3.inOut"
    // }, "+=0.1");

    // tl.fromTo("#title-projects", {
    //   scale: 0,
    // }, {
    //   scale: 1,
    //   scrambleText: {
    //     text: "FERRAMENTAS",
    //     chars: "001"
    //   },
    //   ease: "power3.inOut"
    // }, "-=0.4");


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

    // Draggable.create(".tools-icon", {
    //   bounds: "#about",
    //   inertia: true
    // });

    // Draggable.create(".drag-item", {
    //   type: "x,y",
    //   bounds: ".drag-zone",
    //   onDragStart: function () {
    //     console.log(this.target);
    //     gsap.set(this.target.querySelector("span"), {
    //       background: "black",
    //       color: "white"
    //     });
    //   },
    //   onDragEnd: function () {
    //     console.log(this.target);
    //     gsap.set(this.target.querySelector("span"), {
    //       background: "white",
    //       color: "black"
    //     });
    //   }
    // });
  });

  //STARS
  useEffect(() => {
    /* ── Canvas stars ── */
    const canvas: any = document.getElementById('stars');
    if (!canvas) return;
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
    <main>
      <canvas id="stars" className="fixed"></canvas>

      <div id="smooth-content" className="scrollbar">
        <Intro />
        <div id="pin">
          <About />
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
