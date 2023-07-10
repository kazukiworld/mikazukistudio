import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PortfolioData {
    company: string;
    title: string;
    description: string;
    link: string;
    image: string;
}

const portfolioData: PortfolioData[] = [
    {
        company: "Aloha Service Specialists",
        title: "Crafting a Simple Yet Effective Website and a Custom Book Keeping System",
        description: "Transformed the online presence of a leading Japanese cleaning company based in Hawaii that serves diverse clients including prominent real estate companies. We created a dynamic bilingual website featuring modern design elements and implemented a custom bookkeeping system for seamless financial management.",
        link: "https://alohaservicespecialists.com",
        image: "/alohaservicewebsite.png"
    }
]

export default function Portfolio() {
    const portfolios = portfolioData.map((portfolio, key) => (
        <div key={key} className={`md:px-14 lg:px-48 z-20 grid lg:grid-cols-2 gap-4 lg:gap-12 lg:space-y-8`}>
            <h1 className='font-custom font-bold text-2xl lg:text-7xl'>{portfolio.company}</h1>
            <div className='w-full h-full flex flex-col items-center justify-center space-y-2'>
                <Link href={portfolio.link}>
                        <Image className='w-full object-cover' src={portfolio.image} alt="Website Image" loading='lazy' width={2000} height={2000} />
                </Link>
                <h2 className='font-bold text-lg lg:text-2xl'>{portfolio.title}</h2>
                <p>{portfolio.description}</p>
            </div>
        </div>
    ));

    return (
        <div className='snap-center relative z-10 py-24 px-4 w-full space-y-24 min-h-screen flex flex-col justify-center items-center '>
            {portfolios}
        </div>
    )
}