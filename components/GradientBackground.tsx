import React from 'react'

export default function GradientBackground() {
    return (
        <div>
            <div className='fixed inset-0 z-0 w-full h-full bg-[#090909]'></div>
            <div className='fixed inset-0 z-0 w-full h-full flex justify-center items-center'>
                <div className="absolute top-14 left-0 w-48 h-48 bg-purple-900 opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute bottom-0 w-48 h-48 bg-blue-900 opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute right-0 w-48 h-48 bg-pink-900 opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
        </div>
    )
}
