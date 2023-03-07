import React from 'react'
import '../styles/Hero.css'
import HeroImage from '../assets/back1.jpg'
import { gsap } from "gsap";

const Hero = () => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  React.useEffect(() => {
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
  }, [tl]);
  return (
      <div className='heroComponent'>
          <section className='heroText'>
              <div className='hero__content'>
                  <h1 className='hero__title text'>NFT CARDS</h1>
              </div>
          </section>
          <section className='heroImage'>
              <div className='hero__image'>
                  <img src={HeroImage} alt='Hero Image' />
              </div>
          </section>
    </div>
  )
}

export default Hero