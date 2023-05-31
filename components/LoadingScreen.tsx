import { useModelStore } from '@/lib/zustand/modelStore'
import { useProgress } from '@react-three/drei';
import Image from 'next/image';
import React from 'react'

export default function LoadingScreen() {
    const { modelLoading } = useModelStore();

    const { progress } = useProgress();
    return (
        <div className={`fixed bg-[#090909] inset-0 transition-all duration-500 ease-in-out ${modelLoading ? 'h-screen z-[60]' : 'h-0 z-[-10]'}`}>
            <div className={`h-screen flex flex-col justify-center items-center space-y-4 transition-all duration-200 ease-in-out ${modelLoading ? 'opacity-100' : 'opacity-0'}`}>
                <svg className='w-24 h-24 fill-yellow-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.06337 163.08807" height="163.08807mm" width="163.06337mm">
                    <g transform="translate(-24.606278,-62.320422)">
                        <path id="path853" d="m 103.18753,225.37265 c -9.648146,-0.27566 -19.696859,-2.52376 -28.839587,-6.452 -7.186903,-3.0879 -12.883832,-6.47977 -19.446874,-11.5784 l -1.852084,-1.43883 -4.634698,-4.65865 -4.634701,-4.65865 -2.005388,-2.64583 c -5.478145,-7.22766 -9.411967,-14.36858 -12.31629,-22.35729 -0.864701,-2.37847 -2.476744,-7.85188 -2.863771,-9.72344 l -0.177821,-0.85989 h 5.831657 5.831658 l 0.302117,1.12447 c 2.388364,8.88953 7.427912,18.73449 13.341664,26.06348 5.187762,6.42927 12.597702,12.66157 20.172498,16.96655 2.582857,1.46791 7.384851,3.72365 7.942138,3.73082 l 0.330729,0.004 V 179.25591 149.62258 H 52.387527 24.606278 v -5.68732 -5.68732 l 27.715103,-0.0674 27.715104,-0.0674 0.06729,-29.56719 0.06729,-29.567187 h -0.487992 c -0.268396,0 -2.382269,0.941258 -4.6975,2.091682 l -4.209507,2.091682 -3.175,2.1189 c -4.509421,3.00945 -7.176675,5.207251 -11.116919,9.160274 l -3.443999,3.45517 -2.389865,3.174999 c -3.921503,5.20983 -6.826427,10.17802 -9.099092,15.56188 -1.084956,2.57021 -2.60754,6.93642 -3.177019,9.11052 l -0.294544,1.12448 H 32.416899 26.75417 l -0.147301,-0.23835 -0.147305,-0.23834 0.781511,-3.00991 C 30.884739,109.3486 38.239495,96.531265 48.54501,86.254875 57.196898,77.627439 66.727893,71.588264 78.713568,67.139009 l 3.175,-1.178604 4.06513,-1.03726 c 17.590422,-4.488373 35.094822,-3.166884 52.025812,3.927668 14.96007,6.268689 27.50097,16.74381 36.51594,30.500936 6.90474,10.536851 11.00321,21.837951 12.7327,35.109081 l 0.4415,3.38779 -0.0153,5.95313 -0.0153,5.95312 -0.43095,3.57188 c -3.03797,25.17973 -17.00735,46.95054 -38.67204,60.26902 -1.47035,0.90391 -2.80981,1.64348 -2.97656,1.64348 h -0.30318 v -6.29943 -6.29943 l 0.33072,-0.40661 c 0.18191,-0.22363 1.46183,-1.24987 2.84428,-2.28054 6.99783,-5.21713 13.60646,-12.61306 18.11386,-20.27178 1.57673,-2.67909 4.6403,-8.88163 4.6403,-9.39479 v -0.29117 h -18.65179 -18.6518 l -0.0675,25.33385 -0.0675,25.33386 -2.24896,0.74328 c -8.70076,2.87561 -18.48824,4.24679 -28.31041,3.96616 z m 7.40833,-11.458 4.10104,-0.26438 3.04271,-0.54035 c 1.67349,-0.2972 3.42966,-0.6101 3.9026,-0.69534 l 0.8599,-0.15499 v -31.3185 -31.31851 H 107.02398 91.54586 v 31.46439 31.4644 l 0.727604,0.14375 c 3.238008,0.6397 5.959933,1.01562 8.665106,1.19669 4.65061,0.3113 5.16398,0.31252 9.65729,0.0228 z m 64.40226,-56.02384 c 0.51821,-2.5044 0.98645,-6.32288 1.23254,-10.05137 l 0.2836,-4.29668 -0.29222,-4.03769 c -0.25211,-3.48354 -0.682,-6.81944 -1.22784,-9.5278 l -0.14664,-0.7276 h -20.48418 -20.48419 v 14.68437 14.68438 h 20.48419 20.48418 z m -52.49601,-50.99844 c 0,-17.244214 -0.0406,-31.35312 -0.0901,-31.35312 -0.0496,0 -1.22191,-0.236339 -2.60518,-0.525201 l -2.51502,-0.5252 -4.1842,-0.400841 c -4.90361,-0.469758 -8.61641,-0.505328 -12.8305,-0.122929 -2.860614,0.259583 -7.236481,0.898261 -8.268229,1.206789 l -0.463021,0.138459 v 31.467583 31.46759 h 15.47812 15.47813 z m 48.68333,10.70546 c 0,-0.36922 -2.24302,-5.25531 -3.39622,-7.39816 -1.38022,-2.5647 -5.04558,-8.03134 -7.09609,-10.583337 -3.98062,-4.954162 -10.0465,-10.447708 -15.75242,-14.266148 -2.64484,-1.769946 -9.1312,-5.30279 -10.4662,-5.700496 l -0.59532,-0.17735 v 19.200122 19.200119 h 18.65313 18.65312 z" />
                    </g>
                </svg>
                <h1 className='font-custom text-center text-2xl font-bold'>Mikazuki Studio</h1>
                <h2 className='text-center text-lg'>Japanese Creative Web Design + Development Agency Based In U.S</h2>
                <h2 className='text-center text-lg'>{progress}%</h2>
            </div>
        </div>
    )
}
