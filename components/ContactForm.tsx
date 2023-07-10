import React, { useState, ChangeEvent, FormEvent } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sendContactForm from '@/lib/server/sendContactForm';

type Values = {
    name: string,
    email: string,
    phone: string,
    company: string,
    subject: string,
    message: string,
}

export default function ContactForm() {
    const [btnString, setBtnString] = useState<string>('Submit');
    const [values, setValues] = useState<Values>({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result: string | null = await sendContactForm(values);

        if (result == 'Success') {
            setBtnString('Message Sent')
        } else {
            setBtnString('Message Failed')
        }
    }

    return (
        <div className='z-30 relative pt-12 min-h-screen lg:pt-0 bg-[#090909] w-full h-full flex flex-col justify-center items-center'>
            <ToastContainer />
            <h2 className='m-4 lg:m-12 text-white text-xl font-bold'>Let Us Hear From You</h2>
            <form className='w-full mb-12 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                <div className='space-y-4 lg:space-y-0 mb-4 w-full lg:w-4/6 lg:space-x-8 flex flex-col lg:flex-row justify-center items-start'>
                    <ul className='w-full lg:w-1/2 space-y-4 px-4 md:px-12 lg:px-0'>
                        <li className=''>
                            <h3 className='text-white'>Name</h3>
                            <input
                                placeholder=""
                                name="name"
                                type="name"
                                value={values.name}
                                onChange={handleChange}
                                className='px-2 text-black rounded w-full border-2 border-slate-600'
                            />
                        </li>
                        <li className=''>
                            <h3 className='text-white'>Email</h3>
                            <input
                                required
                                placeholder="example@gmail.com"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                className='px-2 text-black rounded w-full border-2 border-slate-600'
                            />
                        </li>
                        <li className=''>
                            <h3 className='text-white'>Phone Number (Optional)</h3>
                            <input
                                placeholder=""
                                name="phone"
                                type="tel"
                                value={values.phone}
                                onChange={handleChange}
                                className='px-2 text-black rounded w-full border-2 border-slate-600'
                            />
                        </li>
                        <li className=''>
                            <h3 className='text-white'>Company</h3>
                            <input
                                placeholder=""
                                name="company"
                                type="text"
                                value={values.company}
                                onChange={handleChange}
                                className='px-2 text-black rounded w-full border-2 border-slate-600'
                            />
                        </li>
                    </ul>

                    <div className='w-full lg:w-1/2 flex flex-col space-y-4  px-4 md:px-12 lg:px-0'>
                        <div className=''>
                            <h3 className='text-white'>Subject</h3>
                            <input
                                placeholder=""
                                name="subject"
                                type="text"
                                value={values.subject}
                                onChange={handleChange}
                                className='px-2 text-black rounded w-full border-2 border-slate-600'
                            />
                        </div>
                        <div className=''>
                            <h3>Message</h3>
                            <textarea
                                required
                                placeholder="What would you like to inquire about?"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                className='h-40 px-2 text-black rounded w-full border-2 border-slate-600' cols={10} rows={7} />
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <button type="submit" className='px-16 rounded border-2 border-white text-white h-8'>{btnString}</button>
                </div>
            </form>
            <h3 className='p-4 text-sm w-full text-center text-white'>Copyright © 2023 Mikazuki Studio. All Rights Reserved</h3>
        </div>
    )
}