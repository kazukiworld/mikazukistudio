'use client';

import ContactForm from '@/components/ContactForm';
import DownArrowBtn from '@/components/DownArrowBtn';
import GradientBackground from '@/components/GradientBackground';
import LoadingScreen from '@/components/LoadingScreen';
import ModelViewer from '@/components/ModelViewer'
import NavBar from '@/components/NavBar';
import ParticlesContainer from '@/components/ParticlesContainer';
import Portfolio from '@/components/Portfolio';
import { useModelStore } from '@/lib/zustand/modelStore';
import { usePageStore } from '@/lib/zustand/pageStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const {setSections, currentSection } = usePageStore();
  const { modelLoading } = useModelStore();
  const heroSection = useRef<HTMLDivElement | null>(null);
  const aboutSection = useRef<HTMLDivElement | null>(null);
  const serviceSection = useRef<HTMLDivElement | null>(null);
  const serviceSection2 = useRef<HTMLDivElement | null>(null);
  const serviceSection3 = useRef<HTMLDivElement | null>(null);
  const serviceSection4 = useRef<HTMLDivElement | null>(null);
  const portfolioSection = useRef<HTMLDivElement | null>(null);
  const contactSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSections({
      heroSection, aboutSection, serviceSection, serviceSection2,
      serviceSection3, serviceSection4, portfolioSection, contactSection
    });
  }, [])

  const handleContactClick = () => {
    contactSection?.current && contactSection?.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={`text-yellow-50 ${modelLoading ? 'fixed' : 'relative'}`}>

      {/* A background with a solid color and colorful blurred circle animations */}
      <GradientBackground />

      {/* A loading screen for the 3D model */}
      <LoadingScreen />

      {/* Navigation bar at the top */}
      <NavBar />

      {/* Displays moon model.  Able to manipulate the position, light, and camera zoom. */}
      <ModelViewer />

      {/* Displays glowing stars in the background.  Able to manipulate values like size, quantity, and more. */}
      <ParticlesContainer />

      {/* An arrow icon at the bottom of the screen to navigate to each section by scrolling. */}
      <DownArrowBtn />

      {/* Sections that consists of key information like about, services, portfolio, and contact */}
      <div className='w-full h-screen lg:h-auto overflow-y-scroll lg:overflow-auto scroll-smooth snap-mandatory snap-y'>

        <div ref={heroSection} className={`snap-center z-20 relative px-4 md:px-14 lg:px-24 md:w-4/5 lg:w-3/5 h-screen flex flex-col justify-center space-y-4 lg:space-y-8`}>
          <h1 className={`font-custom font-bold text-4xl w-4/5 md:text-6xl transition-all duration-1000 ease-in-out ${modelLoading ? 'opacity-0' : 'opacity-100'}`}>
            We
            <span className='font-medium glow-effect inline-block md:px-4'>
              Illuminate
            </span>
            Your Global Digital Presence.
          </h1>
          <h2 className={`transition-all delay-50 duration-1000 ease-in-out lg:text-lg ${modelLoading ? 'opacity-0' : 'opacity-100'}`}>
            A Japanese creative web design + development studio
            based in the U.S, crafting bilingual digital experiences with
            Storytelling and Interactivity.
          </h2>
          <div>
            <button className='font-custom bg-yellow-50 text-black font-bold px-4 py-3 rounded' onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>

        <div ref={aboutSection} className='snap-center z-20 w-full h-screen space-y-20 lg:py-24 px-4 md:px-14 lg:px-48 flex flex-col justify-center items-center relative'>
          <div className='flex justify-end items-center space-x-8'>
            <h1 className={`font-custom w-2/3 lg:w-2/5 text-2xl md:text-5xl text-end transition-all duration-700 ease-in-out ${currentSection == 'About' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              A fusion of Western design sophistication and the grace of Japanese aesthetics
            </h1>
            <hr className={`bg-yellow-50 w-0.5 md:w-1 transition-all duration-1000 ease-in-out ${currentSection == 'About' ? 'h-full' : 'h-0'}`} />
          </div>
          <div>
            <p className={`w-full md:w-1/2 lg:w-1/3 lg:text-lg transition-all duration-1000 delay-100 ease-in-out ${currentSection == 'About' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              Mikazuki Studio specializes in bilingual English and Japanese web design and development
              with global clients. Our expertise in multiple languages ensures a smooth user experience,
              targeting both English and Japanese markets.
            </p>
          </div>
        </div>

        <div ref={serviceSection} className='snap-center z-10 relative px-4 md:px-14 lg:px-48 w-full h-screen flex flex-col justify-center md:items-end'>
          <div className='md:w-2/3 space-y-4 lg:space-y-8'>
            <h1 className={`font-custom text-2xl md:text-5xl transition-all duration-1000 ease-in-out ${currentSection == 'Service' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              Website Creation
            </h1>
            <p className={`w-full lg:text-lg transition-all duration-1000 delay-100 ease-in-out ${currentSection == 'Service' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              Embark on a seamless journey from ideation to the final launch of your website.
              Our comprehensive services cover every aspect, including research, design, development,
              and deployment. We bring your vision to life with a touch of elegance, creating captivating
              online experiences that resonate with your target audience.
            </p>
          </div>
        </div>

        <div ref={serviceSection2} className='snap-center z-10 relative px-4 md:px-14 lg:px-48 w-full space-y-4 lg:space-y-8 h-screen flex flex-col justify-center md:items-end'>
          <div className='md:w-2/3 lg:w-1/2 space-y-4 lg:space-y-8'>
            <h1 className={`font-custom text-2xl md:text-5xl transition-all duration-1000 ease-in-out ${currentSection == 'Service 2' ? 'opacity-100' : 'opacity-0'}`}>
              Localization and SEO Support
            </h1>
            <p className={`w-full lg:text-lg transition-all duration-1000 delay-50 ease-in-out ${currentSection == 'Service 2' ? 'opacity-100' : 'opacity-0'}`}>
              Expand your reach across borders with our international support for localization and search
              engine optimization. We ensure your website adapts to different cultural contexts and
              languages, while optimizing its visibility in search engine results. This ensures your
              brand resonates with audiences around the world.
            </p>
          </div>
        </div>

        <div ref={serviceSection3} className='snap-center z-10 relative px-4 md:px-14 lg:px-48 w-full space-y-4 lg:space-y-8 h-screen flex flex-col justify-center md:items-end'>
          <div className='md:w-2/3 lg:w-1/2 space-y-4 lg:space-y-8'>
            <h1 className={`font-custom text-2xl md:text-5xl  transition-all duration-1000 ease-in-out ${currentSection == 'Service 3' ? 'opacity-100' : 'opacity-0'}`}>
              Custom Web-Based Systems and Software
            </h1>
            <p className={`w-full lg:text-lg transition-all duration-1000 delay-50 ease-in-out ${currentSection == 'Service 3' ? 'opacity-100' : 'opacity-0'}`}>
              Unlock the full potential of your digital presence with our web-based systems and software
              solutions. From content management systems to e-commerce platforms, we develop user-friendly
              and technologically advanced solutions that streamline your operations and enhance your online
              capabilities.
            </p>
          </div>
        </div>

        <div ref={serviceSection4} className={`snap-center relative z-20 w-full space-y-8 h-screen flex flex-col justify-center items-center px-4 md:px-14 transition-all duration-1000 ease-in-out ${currentSection == 'Service 4' ? 'opacity-100' : 'opacity-0'}`}>
          <div className='md:w-2/3 lg:w-1/3 flex flex-col justify-center items-center space-y-4 lg:space-y-6'>
            <h1 className='font-custom font-bold text-center text-2xl md:text-5xl'>Free Consultation</h1>
            <p className='w-full text-center lg:text-lg'>
              Begin your digital journey by contacting us today for a free consultation. Our team of experts
              is ready to offer insights and suggestions to help you achieve your digital ambitions.
            </p>
            <button className='bg-yellow-50 text-black rounded font-bold px-4 py-3' onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>

        <div ref={portfolioSection} className='snap-start'>
          <Portfolio />
        </div>

        <div ref={contactSection} className='snap-start'>
          <ContactForm />
        </div>

      </div>
    </main >
  )
}
