import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useThree} from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { OrbitControls, Html, Environment, SpotLight } from '@react-three/drei';
import { Moon } from './Moon';

export default function ModelViewer() {

    const lightTarget: any = useRef();
    
    return (
        <div className='h-full'>
            <Canvas>
                <OrbitControls />
                <Suspense fallback={null}>
                    <Moon/>
                    <directionalLight
                        position={[18, -5, -5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-bias={-0.0001}
                        target={lightTarget.current}
                    />
                    <ambientLight intensity={0.03} />
                    <object3D ref={lightTarget} position={[0, 0, 0]} />
                    {/* <Environment preset="studio" /> */}
                </Suspense>
            </Canvas>
        </div>
    )
}
