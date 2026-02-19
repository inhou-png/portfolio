'use client'

//GSAP ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Observer);

// import Image from 'next/image'
import React, { useEffect, useState, useRef } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'

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


  //GSAP start scroll smooth
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: false
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin",
        start: "top top",
        end: "+=4000px",
        pin: true,
        scrub: true,
        markers: true,
        onUpdate: (self) => {
        }
      },
    });


    //FIRST TIME
    tl.to("#text-about", {
      xPercent: -120,
      opacity: 0,
      ease: "power3.inOut"
    }, 0.1);

    tl.to(".three-head", {
      // yPercent: -120,
      scale: 0,
      opacity: 0,
      ease: "power3.inOut"
    }, 0.1);

    //SECOND TIME
    tl.fromTo("#card-about", {
      yPercent: 120,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      ease: "power3.inOut"
    }, 0.1);
    tl.fromTo(".three-pc", {
      xPercent: 120,
      opacity: 0,
    }, {
      xPercent: 0,
      opacity: 1,
      ease: "power3.inOut"
    }, 0.1);


    tl.to("#card-about", {
      xPercent: -200,
      scale: 2,
      opacity: 1,
      ease: "power3.inOut"
    }, 1);

    const threePcEl: any = document.querySelector(".three-pc");
    tl.to(".three-pc", {
      x: () => (window.innerWidth / 4 - threePcEl?.offsetWidth / 5) * -1,
      opacity: 1,
      scale: 2,
      ease: "power3.inOut"
    }, 1);


    tl.to(".three-pc",
      {
        yPercent: 125,
        scale: 10,
        ease: "power3.inOut"
      }, ">");

  }, []);

  return (
    <main className={`bg-dark scrollbar`} >
      <div id="smooth-content" className="scrollbar" style={{ backgroundColor: `rgb(${bgColor})` }}>
        <Intro />
        <div id="pin">
          <About />
        </div>

        <div id='test-os'>
          teste os
        </div>
        {/* <Projects /> */}
      </div>
      <FixedItems offset={offset} />
    </main>
  )
}
