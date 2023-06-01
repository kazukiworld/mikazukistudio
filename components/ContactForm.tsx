'use client'

import sendContactForm from '@/lib/server/sendContactForm';
import { usePageStore } from '@/lib/zustand/pageStore';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const [btnString, setBtnString] = useState('Submit');
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    // async function handleSubmit(e: any) {
    //     e.preventDefault();

    //     await sendContactForm(values).then((message: any) => {
    //         console.log(message)

    //         if (message) {
    //             console.log('asdasdgasdg')
    //             toast.success('Message Sent', {
    //                 position: toast.POSITION.TOP_CENTER,
    //                 hideProgressBar: true,
    //                 autoClose: 2000,
    //                 transition: Zoom,
    //             });
    //         } else {
    //             console.log('error')
    //             toast.error('Failed to Send Message', {
    //                 position: toast.POSITION.TOP_CENTER,
    //                 hideProgressBar: true,
    //                 autoClose: 2000,
    //                 transition: Zoom,
    //             });
    //         }
    //     });
    // }

    async function handleSubmit() {
        const results = await sendContactForm(values);

        console.log(results)

        if (results == 'Success') {
            setBtnString('Message Sent')
        } else {
            setBtnString('Message Failed')
        }
    }

    return (
        <div className='z-30 relative pt-12 lg:pt-0 bg-[#090909]'>
            <ToastContainer />
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='m-8 md:m-12 text-white text-xl font-bold'>Let Us Hear From You</h2>
                <form className='w-full mb-12 flex flex-col justify-center items-center' action="">
                    <div className='space-y-4 md:space-y-0 mb-4 w-full md:w-4/6 md:space-x-8 flex flex-col md:flex-row justify-center items-start'>
                        <ul className='w-full md:w-1/2 space-y-4'>
                            <li className='mx-4 md:mx-0'>
                                <h3 className='text-white'>Name</h3>
                                <input
                                    placeholder=""
                                    name="name"
                                    type="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    className='px-2 text-black rounded w-full border-2 boder-slate-600'
                                />
                            </li>
                            <li className='mx-4 md:mx-0'>
                                <h3 className='text-white'>Email</h3>
                                <input
                                    required
                                    placeholder="example@gmail.com"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className='px-2 text-black rounded w-full border-2 boder-slate-600'
                                />
                            </li>
                            <li className='mx-4 md:mx-0'>
                                <h3 className='text-white'>Phone Number (Optional)</h3>
                                <input
                                    placeholder=""
                                    name="phone"
                                    type="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    className='px-2 text-black rounded w-full border-2 boder-slate-600'
                                />
                            </li>
                            <li className='mx-4 md:mx-0'>
                                <h3 className='text-white'>Company</h3>
                                <input
                                    placeholder=""
                                    name="company"
                                    type="text"
                                    value={values.company}
                                    onChange={handleChange}
                                    className='px-2 text-black rounded w-full border-2 boder-slate-600'
                                />
                            </li>
                        </ul>
                        <div className='w-full md:w-1/2 flex flex-col space-y-4'>
                            <div className='mx-4 md:mx-0'>
                                <h3 className='text-white'>Subject</h3>
                                <input
                                    placeholder=""
                                    name="subject"
                                    type="text"
                                    value={values.subject}
                                    onChange={handleChange}
                                    className='px-2 text-black rounded w-full border-2 boder-slate-600'
                                />
                            </div>
                            <div className='mx-4 md:mx-0 text-white'>
                                <h3>Message</h3>
                                <textarea
                                    required
                                    placeholder="What would you like to inquire about?"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    className='h-40 px-2 text-black rounded w-full border-2 boder-slate-600' cols={10} rows={7} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <button formAction={handleSubmit} className='px-16 rounded border-2 boder-white text-white h-8'>{btnString}</button>
                    </div>
                </form>
                <h3 className='p-4 text-sm w-full text-center text-white'>Copyright © 2022 Mikazuki Studio. All Rights Reserved</h3>
            </div>
        </div>
    )
}