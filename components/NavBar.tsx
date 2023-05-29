import { usePageStore } from '@/lib/zustand/pageStore'
import { useState } from 'react';

export default function NavBar() {
    const { sections: { heroSection, aboutSection, serviceSection, portfolioSection } } = usePageStore();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleMenuClick = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }

    const handleOptionClick = (e: any) => {
        const name = e.target.name;

        switch (name) {
            case 'Hero': heroSection?.current && heroSection.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'About': aboutSection?.current && aboutSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Service': serviceSection?.current && serviceSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Portfolio': portfolioSection?.current && portfolioSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
        }

        setOpenMenu(false);
    }

    return (
        <div>
            <div className='hidden z-50 bg-[#090909] w-full fixed top-0 py-4 lg:px-48 lg:flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                    <h1>Mikazuki Studio</h1>
                </div>
                <ul className='w-1/3 flex justify-between items-center'>
                    <button name='Hero' onClick={handleOptionClick}>Home</button>
                    <button name='About' onClick={handleOptionClick}>About</button>
                    <button name='Service' onClick={handleOptionClick}>Service</button>
                    <button name='Portfolio' onClick={handleOptionClick}>Portfolio</button>
                </ul>
                <button className='py-2 px-4 border border-yellow-50'>
                    Contact Us
                </button>
            </div>

            <div className='w-full flex flex-col lg:hidden z-50 fixed top-0 py-2 px-4 bg-[#090909] space-y-2 lg:px-48 justify-center items-center'>
                <div className='z-50 w-full  flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <h1>Mikazuki Studio</h1>
                    </div>
                    <button onClick={handleMenuClick}>
                        <svg className='fill-white w-8 h-8' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero" /></svg>
                    </button>
                </div>
            </div>
            <div className={`z-40 w-full fixed bg-[#090909] border-b border-yellow-50 pt-10 transition-all duration-500 ease-in-out lg:hidden ${openMenu ? "translate-y-0" : "-translate-y-full"}`}>
                <div className='flex flex-col justify-center items-center p-4 space-y-2'>
                    <button name='Hero' onClick={handleOptionClick}>Home</button>
                    <button name='About' onClick={handleOptionClick}>About</button>
                    <button name='Service' onClick={handleOptionClick}>Service</button>
                    <button name='Portfolio' onClick={handleOptionClick}>Portfolio</button>
                </div>
            </div>
        </div>
    )
}
