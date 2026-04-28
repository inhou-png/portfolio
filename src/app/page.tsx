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
import React, { useEffect, useState, useRef } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'
import System from "@/components/system/page";

function shuffle(arr: any) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function buildBlocks(w: number, h: number, bs: number) {
  const cols = Math.ceil(w / bs);
  const rows = Math.ceil(h / bs);
  const list = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      list.push({ x: c * bs, y: r * bs, w: bs, h: bs });
  return shuffle(list);
};

export default function Home() {
  const blockSize = 50;
  // const blockColor = "DeepPink";
  const blockColor = "blue";


  const canvasRef = useRef(null);

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
      // markers: true,
      animation: tlBack,
    })

    ScrollTrigger.create({
      trigger: "#pin",
      start: "top top",
      end: "+=4000px",
      pin: true,
      scrub: true,
      // markers: true,
      animation: tl,
    })

    //background
    tlBack.fromTo("body", {
      background: "rgb(0,0,0)"
    }, {
      background: "rgb(30,45,73)"
    }, 0);


    const cv = canvasRef.current;
    if (!cv) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ctx = cv.getContext("2d");
    const blocks = buildBlocks(w, h, blockSize);
    cv.width = w;
    cv.height = h;
    ctx.clearRect(0, 0, w, h);

    const frameCount = { count: 0 };
    tl.to(frameCount, {
      count: blocks.length - 1,
      snap: { count: 1 },
      // ease: "none",
      ease: "power1.inOut",

      onUpdate: () => {
        const i = Math.round(frameCount.count);
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = blockColor;

        if (!i) { ctx.clearRect(0, 0, w, h); return };

        for (let j = 0; j <= i; j++) {
          const b = blocks[j];
          if (!b) continue;
          ctx.fillRect(b.x, b.y, b.w, b.h);
        }
      },
    }, 0.2);

    tl.fromTo(".three-pc", {
      scale: 0,
    }, {
      scale: 1,
      ease: "power3.inOut"
    }, "-=0.4");

    tl.fromTo(".text-project", {
      scale: 0,
    }, {
      scale: 1,
      ease: "power3.inOut"
    }, "<")

    tl.fromTo("#text-project-left", {
      xPercent: -200,
    }, {
      xPercent: 0,
      ease: "power3.inOut"
    }, "<")

    tl.fromTo("#text-project-right", {
      xPercent: 200,
    }, {
      xPercent: 0,
      ease: "power3.inOut"
    }, "<")

    tl.to(".scramble", {
      fontSize: "10dvw",
      scrambleText: {
        text: "SCROLLING",
        // chars:"01",
      },
      onComplete: () => {
        // gsap.to("#aaa", {
        //   color: "deeppink",
        //   duration: 1,
        //   ease: "steps(1)",
        //   // yoyo: true,
        //   repeat: -1,
        // });

      },
      ease: "power3.inOut",
    }, "+=0.1")


    tl.to("#pc", {
      opacity: 1,
      scale: 10,
      yPercent: 100,
      ease: "power3.inOut"
    }, ">");


    //SYSTEM OS
    const macLoader: any = gsap.to("#mac-loader", {
      scale: 0.8,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
      paused: true,
      opacity: 1,
    });

    tl.to("#test-os", {
      opacity: 1,
      display: "block",
      ease: "none",
      duration: 0,
      onComplete: () => {
        gsap.set("#desktop", { opacity: 0 });
        const bootTl = gsap.timeline();

        bootTl
          .add(() => macLoader.play())

          .to({}, { duration: 2 }) // espera 2s

          .add(() => macLoader.pause())

          .to("#mac-loader", { opacity: 0, duration: 0.5 })

          .to("#mac-welcome", { opacity: 1, duration: 0.5 })

          .to({}, { duration: 2 }) // espera 2s

          .to("#mac-welcome", { opacity: 0, duration: 0.5 })

          .to("#desktop", { opacity: 1, duration: 0.5 });
      }
    }, ">");

    Draggable.create(".tools-icon", {
      bounds: "#about",
      inertia: true
    });

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

  //STARS
  useEffect(() => {
    const canvas: any = document.getElementById('stars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    window.addEventListener('resize', () => { resize(); buildStars(); });

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
            ? "white"
            : Math.random() < 0.15
              ? `deeppink`
              : `white`;
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: l.rMin + Math.random() * (l.rMax - l.rMin),
            alpha: l.alphaMin + Math.random() * (l.alphaMax - l.alphaMin),
            twinkleSpeed: 0.3 + Math.random() * 1.5,
            twinkleOffset: Math.random() * Math.PI * 2,
            color: hue,
            glow: Math.random() < 0.25,
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
        <div id="pin" className="flex flex-col justify-center items-center will-change-transform">
          <About />
          <canvas id="pixel" ref={canvasRef} className="fixed" />

          <Projects />
        </div>
      </div>


      <div id='test-os'>
        <System />
      </div>

      <FixedItems />
    </main>
  )
}
