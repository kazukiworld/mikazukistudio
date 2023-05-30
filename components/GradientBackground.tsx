import React from 'react'

export default function GradientBackground() {
    return (
        <div>
            {/* <svg
                className='fixed inset-0'
                xmlns='http://www.w3.org/2000/svg'
                width='2000' height='2000'>
                <filter id='n' x='0' y='0'>
                    <feTurbulence
                        type='fractalNoise'
                        baseFrequency='0.75'
                        stitchTiles='stitch' />
                </filter>
                <rect width='2000' height='2000' filter="url(#n)" opacity='0.80' />
            </svg> */}
            <div className='fixed inset-0 z-0 w-full h-full bg-[#090909]'></div>
            {/* <div className='fixed inset-0 z-0 w-full h-full flex justify-center items-center'>
                <div className="absolute w-48 h-48 bg-slate-900 opacity-70 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute w-48 h-48 bg-blue-900 opacity-70 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute w-48 h-48 bg-pink-900 opacity-70 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div> */}
        </div>
    )
}
