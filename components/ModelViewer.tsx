import { useEffect, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Moon } from './Moon';
import refObserver from '@/lib/refObserver';
import { useModelStore } from '@/lib/zustand/modelStore';
import { usePageStore } from '@/lib/zustand/pageStore';

export default function ModelViewer(props: any) {
    const { setPosition, setLightPosition, setZoom} = useModelStore();
    const { setCurrentSection, sections: { heroSection, aboutSection, serviceSection, serviceSection2, serviceSection3, contactSection, portfolioSection } } = usePageStore();

    useEffect(() => {
        let deviceType = 'computer';

        if (window.innerWidth <= 480) {
            deviceType = 'mobile';
        } else if (window.innerWidth <= 768) {
            deviceType = 'tablet';
        } else {
            deviceType = 'computer';
        }

        refObserver([
            {
                ref: heroSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([0.1, 0.6, 0]);
                        setLightPosition([3, -1, -0.6]);
                        setZoom(10);
                        // setPosition([0.4, 3.4, 0]);
                        // setLightPosition([3, -1, -0.6]);
                        // setZoom(3.8);
                    } else {
                        setPosition([40, 10, 0]);
                        setLightPosition([3, -1, 0]);
                        setZoom(1.3);
                    }

                    setCurrentSection('Hero');
                }
            },
            {
                ref: aboutSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([-0.2, 1.3, 0]);
                        setLightPosition([-12, -10, -4]);
                        setZoom(7);
                    } else {
                        setPosition([8, 0.8, 2.8]);
                        setLightPosition([-5, -5, -5]);
                        setZoom(1.3);
                    }
                    setCurrentSection('About');
                }
            },
            {
                ref: serviceSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([-0.5, -3.8, 0]);
                        setLightPosition([0, 40, -20]);
                        setZoom(10);
                    } else {
                        setPosition([-20, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(1.3);
                    }
                    setCurrentSection('Service');
                }
            },
            {
                ref: serviceSection2,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([-0.5, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(10);
                    } else {
                        setPosition([-20, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(1.3);
                    }
                    setCurrentSection('Service 2');
                }
            },
            {
                ref: serviceSection3,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([-0.5, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(10);
                    } else {
                        setPosition([-20, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(1.3);
                    }
                    setCurrentSection('Service 3');
                }
            },
            {
                ref: contactSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([0, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(10);
                    } else {
                        setPosition([0, -8, 3.8]);
                        setLightPosition([10, 20, 20]);
                        setZoom(6);
                    }
                    setCurrentSection('Contact');
                }
            },
            {
                ref: portfolioSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([2, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(12);
                    } else {
                        setPosition([20, -8, 3.8]);
                        setLightPosition([0, 0, 0]);
                        setZoom(3);
                    }
                    setCurrentSection('Portfolio')
                }
            },
        ])
    }, [heroSection])

    return (
        <div className='fixed inset-0 z-10 w-screen h-screen'>
            <Canvas>
                <Suspense fallback={false}>
                    <Moon />
                    <ambientLight intensity={0.02} />
                </Suspense>
            </Canvas>
        </div>
    );
}