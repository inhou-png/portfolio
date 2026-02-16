'use client'

//GSAP ANIMATION
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// import Image from 'next/image'
import React, { useEffect, useState, useRef } from "react";

//COMPONENTS
import FixedItems from '@/components/fixed-items/page'
import Intro from '@/components/intro/page'
import Projects from '@/components/projects/page'
import About from '@/components/about/page'

export default function Home() {

  const main: any = useRef();
  const smoother: any = useRef();
  const [offset, setOffset]: any = useState(0);
  const [bgColor, setBgColor] = useState([0, 0, 0]);
  // const rgbColor = [56, 80, 126];
  const rgbColor = [71, 55, 125];

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


  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: false
    });
  }, [])

  return (
    <main className={`bg-dark`} ref={main}>
      <div id="smooth-content" style={{ backgroundColor: `rgb(${bgColor})` }}>
        <Intro />
        <About />
        <Projects />
      </div>
      <FixedItems offset={offset} />
    </main>
  )
}
