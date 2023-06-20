import { useModelStore } from '@/lib/zustand/modelStore'
import Image from 'next/image';
import React from 'react'

export default function LoadingScreen() {
    const { modelLoading } = useModelStore();

    return (
        <div className={`fixed inset-0 bg-[#090909] transition-all duration-1000 ${modelLoading ? 'z-20 opacity-100 scale-100' : 'z-0 opacity-0 scale-[6]'}`}>
            <Image className={`fixed inset-0 h-screen w-screen object-fit opacity-50`} src={'/spaceship.gif'} alt='warp' width={640} height={358} />
        </div>
    )
}
