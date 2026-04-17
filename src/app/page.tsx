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
import React, { useEffect, useState, useRef } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'
import System from "@/components/system/page";

export default function Home() {

  const [offset, setOffset]: any = useState(0);
  const [bgColor, setBgColor] = useState([0, 0, 0]);
  const rgbColor = [56, 80, 126];
  // const rgbColor = [71, 55, 125];

  //BACKGROUND TRANSITION (BLACK TO RGB CHOICE)
  useEffect(() => {
    rgbColor.map((e, idx) => {
      let percent = ((rgbColor[idx] * 100) / rgbColor[0]);
      if (Math.floor(((window.scrollY / 10) * percent) / 100) > e) bgColor[idx] = e;
      else bgColor[idx] = (idx == 1 || idx == 2) ? Math.floor(((window.scrollY / 10) * percent) / 100) : Math.floor(window.scrollY / 10);
    })
    setOffset(window.scrollY)
    setBgColor(bgColor);
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      rgbColor.map((e, idx) => {
        let percent = ((rgbColor[idx] * 100) / rgbColor[0]);
        if (Math.floor(((window.scrollY / 10) * percent) / 100) > e) bgColor[idx] = e;
        else bgColor[idx] = (idx == 1 || idx == 2) ? Math.floor(((window.scrollY / 10) * percent) / 100) : Math.floor(window.scrollY / 10);
      })
      setOffset(window.scrollY)
      setBgColor(bgColor);
    }
  });

  //GSAP
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: false
    });

    const tl = gsap.timeline();

    const triggerTl = ScrollTrigger.create({
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


    //FIRST TIME
    tl.to("#text-about", {
      xPercent: -120,
      opacity: 0,
      ease: "power3.inOut"
    }, 0.2);
    tl.to(".three-head", {
      // yPercent: -120,
      scale: 0,
      opacity: 0,
      ease: "power3.inOut"
    }, 0.2);


    //SECOND TIME
    tl.fromTo("#card-about", {
      yPercent: 120,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power3.inOut"
    }, 0.2);
    tl.fromTo(".three-pc", {
      xPercent: 120,
      opacity: 0,
    }, {
      xPercent: 0,
      opacity: 1,
      ease: "power3.inOut"
    }, 0.2);
    tl.to("#card-about", {
      xPercent: -200,
      scale: 2,
      opacity: 1,
      ease: "power3.inOut"
    }, 0.8);
    const threePcEl: any = document.querySelector(".three-pc");
    tl.to(".three-pc", {
      x: () => (window.innerWidth / 4 - threePcEl?.offsetWidth / 5) * -1,
      opacity: 1,
      scale: 2,
      ease: "power3.inOut"
    }, 0.8);
    tl.to(".three-pc",
      {
        yPercent: 125,
        scale: 10,
        ease: "none",
        duration: 0.2
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


    //DRAG ITEMS DESKTOP
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
  }, []);

  return (
    <main className={`bg-dark scrollbar`} >
      <div id="smooth-content" className="scrollbar" style={{ backgroundColor: `rgb(${bgColor})` }}>
        <Intro />
        <div id="pin">
          <About />
        </div>
        {/* <Projects /> */}
      </div>

      <div id='test-os'>
        <System />
      </div>

      <FixedItems offset={offset} />
    </main>
  )
}
