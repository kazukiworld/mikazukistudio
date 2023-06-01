import { usePageStore } from '@/lib/zustand/pageStore';
import { useEffect, useState } from 'react';

export default function DownArrowBtn() {
    const { currentSection, sections: { aboutSection, serviceSection, serviceSection2, serviceSection3, serviceSection4, contactSection, portfolioSection } } = usePageStore();
    const [end, setEnd] = useState<boolean>(false);

    useEffect(() => {
        currentSection == 'Contact' ? setEnd(true) : setEnd(false);
    }, [currentSection])

    const handleArrowClick = () => {
        switch (currentSection) {
            case 'Hero': aboutSection?.current && aboutSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'About': serviceSection?.current && serviceSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Service': serviceSection2?.current && serviceSection2?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Service 2': serviceSection3?.current && serviceSection3?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Service 3': serviceSection4?.current && serviceSection4?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Service 4': portfolioSection?.current && portfolioSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'Portfolio': contactSection?.current && contactSection?.current.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }

    return (
        <div>
            <button onClick={handleArrowClick} className={`z-40 fixed bottom-8 right-8 w-auto lg:w-full flex justify-center items-center transition-all ${end ? 'opacity-0' : 'opacity-100'}`}>
                <div className='border border-yellow-50 rounded-full p-3 lg:p-4'>
                    <svg className='fill-yellow-50 w-6 h-6 lg:w-8 lg:h-8' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z" fillRule="nonzero" />
                    </svg>
                </div>
            </button>
        </div>
    )
}
