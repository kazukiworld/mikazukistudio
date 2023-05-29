import { useModelStore } from '@/lib/zustand/modelStore'
import { useProgress } from '@react-three/drei';
import Image from 'next/image';
import React from 'react'

export default function LoadingScreen() {
    const { modelLoading } = useModelStore();

    const {progress} = useProgress();
    return (
        <div className={`fixed bg-[#090909] inset-0 transition-all duration-500 ease-in-out ${modelLoading ? 'h-screen z-[60]' : 'h-0 z-[-10]'}`}>
            <div className={`w-full h-full flex flex-col justify-center items-center space-y-4  transition-all duration-200 ease-in-out ${modelLoading ? 'opacity-100' : 'opacity-0'}`}>
                {/* <Image src={'/salormoon.gif'} width={2000} height={2000}/> */}
                <h1 className='text-center text-2xl font-bold'>Mikazuki Studio</h1>
                <h2 className='text-center text-lg'>Bilungual Web Design + Development Agency</h2>
                <h2 className='text-center text-lg'>{progress}%</h2>
            </div>
        </div>
    )
}
