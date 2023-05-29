'use client';

import DownArrowBtn from '@/components/DownArrowBtn';
import LoadingScreen from '@/components/LoadingScreen';
import ModelViewer from '@/components/ModelViewer'
import NavBar from '@/components/NavBar';
import ParticlesContainer from '@/components/ParticlesContainer';
import { usePageStore } from '@/lib/zustand/pageStore';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { setSections } = usePageStore();
  const heroSection = useRef<HTMLDivElement | null>(null);
  const aboutSection = useRef<HTMLDivElement | null>(null);
  const serviceSection = useRef<HTMLDivElement | null>(null);
  const serviceSection2 = useRef<HTMLDivElement | null>(null);
  const serviceSection3 = useRef<HTMLDivElement | null>(null);
  const contactSection = useRef<HTMLDivElement | null>(null);
  const portfolioSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSections({
      heroSection, aboutSection, serviceSection, serviceSection2,
      serviceSection3, contactSection, portfolioSection
    });
  }, [])

  const portfolioData = [
    {
      company: "Aloha Service Specialists",
      title: "Crafting a Simple Yet Effective Website and Custom Book Keeping System",
      description: "Transformed the online presence of a leading Japanese cleaning company based in Hawaii that serves diverse clients including prominent real estate companies.  We created a dynamic bilingual website featuring modern design elements and mplemented a custom bookkeeping system for seamless financial management.",
      link: "https://alohaservicespecialists.com",
      image: "/alohaservicewebsite.png"
    }
  ]

  const portfolios = () => {
    for (const i in portfolioData) {
      const portfolio = portfolioData[i];

      return (
        <div className='px-4 lg:px-48 z-20 grid lg:grid-cols-2 gap-12 lg:text-lg lg:space-y-8'>
          <h1 className='font-bold text-4xl lg:text-8xl'>{portfolio?.company}</h1>
          <div className='w-full h-full flex flex-col items-center justify-center space-y-6'>
            <Link href={portfolio?.link}>
              <Image className='w-full object-cover' src={portfolio?.image} alt="Aloha Service Specialists Website" width={2000} height={2000} />
            </Link>
            <h2 className='font-bold text-3xl'>{portfolio?.title}</h2>
            <p>{portfolio?.description}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <main className='relative'>
      <div className='relative text-yellow-50'>
        <div className='fixed inset-0 bg-[#090909] z-0'></div>

        <LoadingScreen/>

        {/* Navigation bar at the top */}
        <NavBar />

        {/* Displays moon model.  Able to manipulate the position, light, and camera zoom. */}
        <ModelViewer />

        {/* Displays glowing stars in the background.  Able to manipulate values like size, quantity, and more. */}
        <ParticlesContainer />

        {/* An arrow icon at the bottom of the screen to navigate to each section by scrolling. */}
        <DownArrowBtn />

        {/* Sections that consists of key information like about, services, portfolio, and contact */}
        <div ref={heroSection} className='z-20 relative px-4 lg:px-24 lg:w-1/2 h-screen flex flex-col justify-end lg:justify-center space-y-4 lg:space-y-8 pb-36 lg:pb-0'>
          <h1 className='text-3xl lg:text-6xl font-bold'>We Illuminate Your Global Digital Presence.</h1>
          <h2 className=''>
            A Japanese creative web design + development studio
            based in the U.S, crafting bilingual digital experiences with
            Storytelling and Interactivity.
          </h2>
          <div>
            <button className='bg-rose-600 font-bold px-4 py-3'>Contact Us</button>
          </div>
        </div>

        <div ref={aboutSection} className='z-20 shrink-0 w-full h-screen py-36 px-4 lg:py-24 lg:px-48 flex flex-col justify-between items-center relative'>
          <div className='flex justify-end items-center space-x-8'>
            <h1 className='w-2/3 lg:w-1/3 font-bold text-3xl lg:text-5xl text-end'>A fusion of Western design sophistication and the grace of Japanese aesthetics</h1>
            <hr className='bg-yellow-50 h-full w-0.5 md:w-1' />
          </div>
          <div>
            <p className='w-full lg:w-1/3 lg:text-lg'>
              Mikazuki Studio specializes in bilingual English and Japanese web design and development
              with global clients. Our expertise in multiple languages ensures a smooth user experience,
              targeting both English and Japanese markets.
            </p>
          </div>
        </div>


        <div ref={serviceSection} className='relative px-4 lg:px-48 w-full h-screen flex flex-col justify-center lg:items-end'>
          <div className='lg:w-1/2 space-y-4 lg:space-y-8'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Website Creation</h1>
            <p className='w-full lg:text-lg'>
              Embark on a seamless journey from ideation to the final launch of your website.
              Our comprehensive services cover every aspect, including research, design, development,
              and deployment. We bring your vision to life with a touch of elegance, creating captivating
              online experiences that resonate with your target audience.
            </p>
          </div>
        </div>

        <div ref={serviceSection2} className='relative px-4 lg:px-48 w-full space-y-4 lg:space-y-8 h-screen flex flex-col justify-center lg:items-end'>
          <div className='lg:w-1/2 space-y-4 lg:space-y-8'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Localization and SEO Support</h1>
            <p className='w-full lg:text-lg'>
              Expand your reach across borders with our international support for localization and search
              engine optimization. We ensure your website adapts to different cultural contexts and
              languages, while optimizing its visibility in search engine results. This ensures your
              brand resonates with audiences around the world.
            </p>
          </div>
        </div>

        <div ref={serviceSection3} className='relative px-4 lg:px-48 w-full space-y-4 lg:space-y-8 h-screen flex flex-col justify-center lg:items-end'>
          <div className='lg:w-1/2 space-y-4 lg:space-y-8'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Custom Web-Based Systems and Software</h1>
            <p className='w-full lg:text-lg'>
              Unlock the full potential of your digital presence with our web-based systems and software
              solutions. From content management systems to e-commerce platforms, we develop user-friendly
              and technologically advanced solutions that streamline your operations and enhance your online
              capabilities.
            </p>
          </div>
        </div>

        <div ref={contactSection} className='relative z-20 w-full space-y-8 h-screen flex flex-col justify-center items-center px-4'>
          <div className='lg:w-1/3 flex flex-col justify-center items-center space-y-4 lg:space-y-6'>
            <h1 className='font-bold text-center text-2xl lg:text-5xl'>Free Consultation</h1>
            <p className='w-full text-center lg:text-lg'>
              Begin your digital journey by contacting us today for a free consultation. Our team of experts
              is ready to offer insights and suggestions to help you achieve your digital ambitions.
            </p>
            <button className='bg-rose-600 font-bold px-4 py-3'>Contact Us</button>
          </div>
        </div>

        <div ref={portfolioSection} className='relative z-0 w-full space-y-8 h-screen flex flex-col justify-center items-center'>
          {portfolios()}
        </div>
      </div>
    </main >
  )
}
