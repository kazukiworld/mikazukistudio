'use client';

import ModelViewer from '@/components/ModelViewer'
import ParticlesContainer from '@/components/ParticlesContainer';
import refObserver from '@/lib/refObserver';
import { useModelStore } from '@/lib/store';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { setPosition, setLightPosition, setZoom } = useModelStore();
  const heroSection = useRef<HTMLDivElement | null>(null);
  const aboutSection = useRef<HTMLDivElement | null>(null);
  const serviceSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refObserver(heroSection, () => {
      setPosition([40, 10, 0]);
      setLightPosition([3, -1, 0]);
      setZoom(1.3);
    })

    refObserver(aboutSection, () => {
      setPosition([8, 0.8, 2.8]);
      setLightPosition([-5, -5, -5]);
      setZoom(1.3);
    })

    refObserver(serviceSection, () => {
      setPosition([-20, -8, 3.8]);
      setLightPosition([5, 5, 5]);
      setZoom(1.3);
    })
  }, [])

  const handleArrowClick = () => {
    if (aboutSection.current) {
      aboutSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className='relative'>
      <div className='fixed inset-0 bg-black z-0'></div>
      <ModelViewer />
      <ParticlesContainer/>
      <div className='z-20 relative scroll-smooth snap-mandatory snap-y '>
        <div className='z-0 bg-black w-full fixed top-0 py-4 lg:px-48 flex justify-between items-center text-white'>
          <div>
            <h1>Mikazuki Studio</h1>
          </div>
          <ul className='w-1/3 flex justify-between items-center'>
            <button onClick={() =>  homeSection?.current.scrollIntoView({ behavior: 'smooth' })}>Home</button>
            <button onClick={() =>  aboutSection?.current.scrollIntoView({ behavior: 'smooth' })}>About</button>
            <button  onClick={() => serviceSection?.current.scrollIntoView({ behavior: 'smooth' })}>Service</button>
            <button>Portfolio</button>
          </ul>
          <button className='py-2 px-4 border border-white'>
            Contact Us
          </button>
        </div>

        <button onClick={handleArrowClick} className='fixed bottom-8 w-full flex justify-center items-center'>
          <div className='border border-white rounded-full p-4'>
            <svg className='fill-white w-8 h-8' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z" fillRule="nonzero" />
            </svg>
          </div>
        </button>

        <div ref={heroSection} className='snap-center px-4 lg:px-24'>
          <div className='lg:w-1/2 h-screen text-white flex flex-col justify-center space-y-8'>
            <h1 className='text-3xl lg:text-6xl font-bold'>We Illuminate Your Global Digital Presence.</h1>
            <h2 className='lg:text-lg'>
              A Japanese creative web design + development studio
              based in the U.S, crafting bilingual digital experiences with
              Storytelling and Interactivity.
            </h2>
            <div>
              <button className='bg-rose-600 font-bold px-4 py-3'>Contact Us</button>
            </div>
          </div>
        </div>

        <div ref={aboutSection} className='snap-center w-full h-screen text-white px-4 lg:py-24 lg:px-48 flex flex-col justify-between items-center relative'>
          <div className='flex justify-end items-center space-x-8'>
            <h1 className='w-2/3 lg:w-1/3 font-bold text-2xl lg:text-5xl text-end'>A fusion of Western design sophistication and the grace of Japanese aesthetics</h1>
            <hr className='bg-white h-full w-1' />
          </div>
          <div>
            <p className='w-full lg:w-1/3 lg:text-lg'>
              Mikazuki Studio specializes in bilingual English and Japanese web design and development
              with global clients. Our expertise in multiple languages ensures a smooth user experience,
              targeting both English and Japanese markets.
            </p>
          </div>
        </div>

        <div ref={serviceSection} className='w-full text-white px-4 lg:px-48 flex flex-col justify-center items-end relative'>
          <div className='w-1/2 space-y-8 h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Website Creation</h1>
            <p className='w-full lg:text-lg'>
              Embark on a seamless journey from ideation to the final launch of your website.
              Our comprehensive services cover every aspect, including research, design, development,
              and deployment. We bring your vision to life with a touch of elegance, creating captivating
              online experiences that resonate with your target audience.
            </p>
          </div>

          <div className='w-1/2 space-y-8 h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Localization and SEO Support</h1>
            <p className='w-full lg:text-lg'>
              Expand your reach across borders with our international support for localization and search
              engine optimization. We ensure your website adapts to different cultural contexts and
              languages, while optimizing its visibility in search engine results. This ensures your
              brand resonates with audiences around the world.
            </p>
          </div>

          <div className='w-1/2 space-y-8 h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Custom Web-Based Systems and Software</h1>
            <p className='w-full lg:text-lg'>
              Unlock the full potential of your digital presence with our web-based systems and software
              solutions. From content management systems to e-commerce platforms, we develop user-friendly
              and technologically advanced solutions that streamline your operations and enhance your online
              capabilities.
            </p>
          </div>

        </div>


      </div>
    </main>
  )
}
