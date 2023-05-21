import React, { SetStateAction, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Moon } from './Moon';
import { useSpring, a } from 'react-spring';
import { Object3D } from 'three';

export default function ModelViewer() {
    const lightTarget = useRef<Object3D | null>(null);
    const [position, setPosition] = useState<number[] | null>(null);
    const [lightPosition, setLightPosition] = useState<number[] | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number | null>(0.7);

    const updatePosition = () => {
        setPosition([0, 0, 3]);
        setLightPosition([-5, -5, -7]);
        setZoomLevel(1.3);
    };

    return (
        <div className='h-full relative'>
            <button className='w-24 h-24 bg-red z-20' onClick={updatePosition}>
                Hello
            </button>
            <Canvas>
                <OrbitControls />
                <Suspense fallback={null}>
                    <Moon position={position} lightPosition={lightPosition} zoom={zoomLevel}/>
                    <ambientLight intensity={0.02} />
                    <object3D ref={lightTarget} position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </div>
    );
}