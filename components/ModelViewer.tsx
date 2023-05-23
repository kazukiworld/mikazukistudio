import {useRef, Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { Moon } from './Moon';
import { Object3D } from 'three';

export default function ModelViewer(props: any) {
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