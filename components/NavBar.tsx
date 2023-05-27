import { usePageStore } from '@/lib/zustand/pageStore'

export default function NavBar() {
    const { sections: { heroSection, aboutSection, serviceSection, portfolioSection } } = usePageStore();

    return (
        <div>
            {/* <div className='sm:hidden z-50 bg-[#090909] w-full fixed top-0 py-4 lg:px-48 lg:flex justify-between items-center'>
                <div>
                    <h1>Mikazuki Studio</h1>
                </div>
                <ul className='w-1/3 flex justify-between items-center'>
                    <button onClick={() => heroSection?.current && heroSection.current.scrollIntoView({ behavior: 'smooth' })}>Home</button>
                    <button onClick={() => aboutSection?.current && aboutSection?.current.scrollIntoView({ behavior: 'smooth' })}>About</button>
                    <button onClick={() => serviceSection?.current && serviceSection?.current.scrollIntoView({ behavior: 'smooth' })}>Service</button>
                    <button onClick={() => portfolioSection?.current && portfolioSection?.current.scrollIntoView({ behavior: 'smooth' })}>Portfolio</button>
                </ul>
                <button className='py-2 px-4 border border-yellow-50'>
                    Contact Us
                </button>
            </div> */}
            <div className='sm:hidden z-50 bg-[#090909] w-full fixed top-0 py-4 lg:px-48 lg:flex justify-between items-center'>
                <div className='flex justify-between'>
                    <div>
                        <h1>Mikazuki Studio</h1>
                    </div>
                    <button className='py-2 px-4 border border-yellow-50'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}
