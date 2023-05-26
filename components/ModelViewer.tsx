import { useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Moon } from './Moon';
import refObserver from '@/lib/refObserver';
import { useModelStore } from '@/lib/zustand/modelStore';
import { usePageStore } from '@/lib/zustand/pageStore';

export default function ModelViewer(props: any) {
    const { setPosition, setLightPosition, setZoom } = useModelStore();
    const { setCurrentSection, sections: { heroSection, aboutSection, serviceSection, serviceSection2, serviceSection3, contactSection, portfolioSection } } = usePageStore();

    useEffect(() => {
        refObserver([
            {
                ref: heroSection,
                action: () => {
                    setPosition([40, 10, 0]);
                    setLightPosition([3, -1, 0]);
                    setZoom(1.3);
                    setCurrentSection('Hero');
                }
            },
            {
                ref: aboutSection,
                action: () => {
                    setPosition([8, 0.8, 2.8]);
                    setLightPosition([-5, -5, -5]);
                    setZoom(1.3);
                    setCurrentSection('About');
                }
            },
            {
                ref: serviceSection,
                action: () => {
                    setPosition([-20, -8, 3.8]);
                    setLightPosition([6, 6, -5]);
                    setZoom(1.3);
                    setCurrentSection('Service');
                }
            },
            {
                ref: serviceSection2,
                action: () => {
                    setCurrentSection('Service 2');
                    setPosition([-20, -8, 3.8]);
                    setLightPosition([6, 6, -5]);
                    setZoom(1.3);
                }
            },
            {
                ref: serviceSection3,
                action: () => {
                    setPosition([-20, -8, 3.8]);
                    setLightPosition([6, 6, -5]);
                    setZoom(1.3);
                    setCurrentSection('Service 3');
                }
            },
            {
                ref: contactSection,
                action: () => {
                    setPosition([0, -8, 3.8]);
                    setLightPosition([10, 20, 20]);
                    setZoom(6);
                    setCurrentSection('Contact');
                }
            },
            {
                ref: portfolioSection,
                action: () => {
                    setPosition([0, 10, 3.8]);
                    setLightPosition([0, 0, 0]);
                    setZoom(3);
                    setCurrentSection('Portfolio')
                }
            },
        ])
    }, [heroSection])


    // if (heroSection) {
    //     refObserver(heroSection, () => {
    //         setPosition([40, 10, 0]);
    //         setLightPosition([3, -1, 0]);
    //         setZoom(1.3);
    //         setCurrentSection('Hero');
    //     })
    // }

    // if (aboutSection) {
    //     refObserver(aboutSection, () => {
    //         setPosition([8, 0.8, 2.8]);
    //         setLightPosition([-5, -5, -5]);
    //         setZoom(1.3);
    //         setCurrentSection('About');
    //     })
    // }

    // if (serviceSection) {
    //     refObserver(serviceSection, () => {
    //         setPosition([-20, -8, 3.8]);
    //         setLightPosition([6, 6, -5]);
    //         setZoom(1.3);
    //         setCurrentSection('Service');
    //     })
    // }

    // if (serviceSection2) {
    //     refObserver(serviceSection2, () => {
    //         setCurrentSection('Service 2');
    //     })
    // }

    // if (serviceSection3) {
    //     refObserver(serviceSection3, () => {
    //         setCurrentSection('Service 3');
    //     })
    // }

    // refObserver(contactSection, () => {
    //     setPosition([0, -8, 3.8]);
    //     setLightPosition([10, 20, 20]);
    //     setZoom(6);
    //     setCurrentSection('Contact');
    // })

    // refObserver(portfolioSection, () => {
    //     setPosition([0, 10, 3.8]);
    //     setLightPosition([0, 0, 0]);
    //     setZoom(3);
    //     setCurrentSection('Portfolio')
    // })
    // }, [])

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