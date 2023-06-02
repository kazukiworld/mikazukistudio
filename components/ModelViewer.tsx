import { useEffect, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Moon } from './Moon';
import refObserver from '@/lib/refObserver';
import { useModelStore } from '@/lib/zustand/modelStore';
import { usePageStore } from '@/lib/zustand/pageStore';

export default function ModelViewer(props: any) {
    const { setPosition, setLightPosition, setZoom } = useModelStore();
    const { setCurrentSection, sections: { heroSection, aboutSection, serviceSection, serviceSection2, serviceSection3, serviceSection4, portfolioSection, contactSection } } = usePageStore();

    useEffect(() => {
        let deviceType = 'computer';

        if (window.innerWidth <= 480) {
            deviceType = 'mobile';
        } else if (window.innerWidth <= 1024) {
            deviceType = 'tablet';
        } else {
            deviceType = 'computer';
        }

        console.log(window.innerWidth)
        console.log(deviceType)

        refObserver([
            {
                ref: heroSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([0, -0.1, 0]);
                        setLightPosition([10, 12, -8]);
                        setZoom(20);
                    } else if (deviceType == 'tablet') {
                        setPosition([0, 0, 0]);
                        setLightPosition([8, -1, 0]);
                        setZoom(16);
                    } else {
                        setPosition([1, 0, 0]);
                        setLightPosition([3, -1, 0]);
                        setZoom(10);
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
                    } else if (deviceType == 'tablet') {
                        setPosition([0.4, 1.6, 0]);
                        setLightPosition([-12, -10, -4]);
                        setZoom(4);
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
                    } else if (deviceType == 'tablet') {
                        setPosition([-3, -6, 0]);
                        setLightPosition([0, 35, -20]);
                        setZoom(6);
                    } else {
                        setPosition([-12, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(3);
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
                    } else if (deviceType == 'tablet') {
                        setPosition([-3, -6, 0]);
                        setLightPosition([0, 35, -20]);
                        setZoom(6);
                    } else {
                        setPosition([-12, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(3);
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
                    } else if (deviceType == 'tablet') {
                        setPosition([-3, -6, 0]);
                        setLightPosition([0, 35, -20]);
                        setZoom(6);
                    } else {
                        setPosition([-12, -8, 3.8]);
                        setLightPosition([6, 6, -5]);
                        setZoom(3);
                    }
                    setCurrentSection('Service 3');
                }
            },
            {
                ref: serviceSection4,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([0, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(10);
                    } else if (deviceType == 'tablet') {
                        setPosition([0, -6, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(8);
                    } else {
                        setPosition([0, -8, 3.8]);
                        setLightPosition([10, 20, 20]);
                        setZoom(6);
                    }
                    setCurrentSection('Service 4');
                }
            },
            {
                ref: portfolioSection,
                action: () => {
                    if (deviceType == 'mobile') {
                        setPosition([2, -3.8, 0]);
                        setLightPosition([6, 6, 5]);
                        setZoom(12);
                    } else if (deviceType == 'tablet') {
                        setPosition([2, -7, 0]);
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
            {
                ref: contactSection,
                action: () => {
                    // if (deviceType == 'mobile') {
                    //     setPosition([2, -3.8, 0]);
                    //     setLightPosition([6, 6, 5]);
                    //     setZoom(12);
                    // } else {
                    //     setPosition([20, -8, 3.8]);
                    //     setLightPosition([0, 0, 0]);
                    //     setZoom(3);
                    // }
                    setCurrentSection('Contact')
                }
            },
        ])
    }, [heroSection])

    return (
        <div className='fixed inset-0 z-10 w-screen h-screen'>
            <Canvas>
                <Suspense>
                    <Moon />
                    <ambientLight intensity={0.02} />
                </Suspense>
            </Canvas>
        </div>
    );
}