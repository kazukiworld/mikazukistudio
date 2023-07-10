import { useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Moon } from './Moon';
import refObserver from '@/lib/refObserver';
import { useModelStore } from '@/lib/zustand/modelStore';
import { usePageStore } from '@/lib/zustand/pageStore';

interface SectionConfig {
    mobile: { position: [number, number, number]; light: [number, number, number]; zoom: number };
    tablet: { position: [number, number, number]; light: [number, number, number]; zoom: number };
    computer: { position: [number, number, number]; light: [number, number, number]; zoom: number };
}

interface Config {
    heroSection: SectionConfig;
    aboutSection: SectionConfig;
    serviceSection: SectionConfig;
    serviceSection2: SectionConfig;
    serviceSection3: SectionConfig;
    serviceSection4: SectionConfig;
    portfolioSection: SectionConfig;
    contactSection: SectionConfig;
}

export default function ModelViewer() {
    const { setPosition, setLightPosition, setZoom, modelLoading } = useModelStore();
    const { setCurrentSection, sections } = usePageStore();

    const deviceType = window.innerWidth <= 480 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'computer';

    const config: Config = {
        'heroSection': {
            'mobile': { position: [0, -0.1, 0], light: [10, 12, -8], zoom: 20 },
            'tablet': { position: [0, 0, 0], light: [8, -1, 0], zoom: 16 },
            'computer': { position: [1, 0, 0], light: [3, -1, 0], zoom: 10 },
        },
        'aboutSection': {
            'mobile': { position: [-0.2, 1.3, 0], light: [-12, -10, -4], zoom: 7 },
            'tablet': { position: [0.4, 1.6, 0], light: [-12, -10, -4], zoom: 4 },
            'computer': { position: [8, 0.8, 2.8], light: [-5, -5, -5], zoom: 1.3 },
        },
        'serviceSection': {
            'mobile': { position: [-0.5, -3.8, 0], light: [0, 40, -20], zoom: 10 },
            'tablet': { position: [-3, -6, 0], light: [0, 35, -20], zoom: 6 },
            'computer': { position: [-12, -8, 3.8], light: [6, 6, -5], zoom: 3 },
        },
        'serviceSection2': {
            'mobile': { position: [-0.5, -3.8, 0], light: [6, 6, 5], zoom: 10 },
            'tablet': { position: [-3, -6, 0], light: [0, 35, -20], zoom: 6 },
            'computer': { position: [-12, -8, 3.8], light: [6, 6, -5], zoom: 3 },
        },
        'serviceSection3': {
            'mobile': { position: [-0.5, -3.8, 0], light: [6, 6, 5], zoom: 10 },
            'tablet': { position: [-3, -6, 0], light: [0, 35, -20], zoom: 6 },
            'computer': { position: [-12, -8, 3.8], light: [6, 6, -5], zoom: 3 },
        },
        'serviceSection4': {
            'mobile': { position: [0, -3.8, 0], light: [6, 6, 5], zoom: 10 },
            'tablet': { position: [0, -6, 0], light: [6, 6, 5], zoom: 8 },
            'computer': { position: [0, -8, 3.8], light: [10, 20, 20], zoom: 6 },
        },
        'portfolioSection': {
            'mobile': { position: [2, -3.8, 0], light: [6, 6, 5], zoom: 12 },
            'tablet': { position: [2, -7, 0], light: [6, 6, 5], zoom: 12 },
            'computer': { position: [20, -8, 3.8], light: [0, 0, 0], zoom: 3 },
        },
        'contactSection': {
            'mobile': { position: [2, -3.8, 0], light: [6, 6, 5], zoom: 12 },
            'tablet': { position: [2, -7, 0], light: [6, 6, 5], zoom: 12 },
            'computer': { position: [20, -8, 3.8], light: [0, 0, 0], zoom: 3 },
        },
    };

    const setValues = (section: keyof Config) => {
        if (!modelLoading && config[section]) {
            const { position, light, zoom } = config[section][deviceType];

            console.log(config[section][deviceType])
            setPosition(position);
            setLightPosition(light);
            setZoom(zoom);
        }
    }

    useEffect(() => {
        let refObserverArray = [];

        for (const key in sections) {
            if (sections.hasOwnProperty(key)) {
                const sectionKey = key as keyof Config;
                refObserverArray.push({
                    ref: sections[sectionKey],
                    action: () => {
                        setCurrentSection(sectionKey);
                        setValues(sectionKey);
                    },
                });
            }
        }

        refObserver(refObserverArray);
    }, [modelLoading, sections])

    return (
        <div className='fixed inset-0 z-10 w-screen h-screen'>
            <Canvas>
                <Suspense fallback={null}>
                    <Moon />
                    <ambientLight intensity={0.02} />
                </Suspense>
            </Canvas>
        </div>
    );
}