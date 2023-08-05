"use client"
import Image from 'next/image';
import React from 'react';
import webDevelopment from "/public/our-servies/Web App Development.png"
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiFirebase } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BiLogoNodejs, BiLogoJavascript } from 'react-icons/bi';

const OurServicePage = () => {
    return (
        <main className='container'>
            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>Web Development</h2>
                    <p>Web development refers to building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management. While the terms web developer and web designer are often used synonymously, they do not mean the same thing.</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>
                <Image src={webDevelopment} alt='' />
            </div>

            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <Image src={webDevelopment} alt='' />
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>Frontend Development</h2>
                    <p>What are web design services? A web design service provides you with a customized website design thats perfect for your business or personal site. They will work with you to create a design that matches your brand, while giving your customers a seamless user experience that will delight them.</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>
            </div>
                                                                    
            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>Mobile Application</h2>
                    <p>A Service is an application component that can perform long-running operations in the background. It does not provide a user interface. Once started, a service might continue running for some time, even after the user switches to another application.</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>
                <Image src={webDevelopment} alt='' />
            </div>

            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <Image src={webDevelopment} alt='' />
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>UI/UX Design</h2>
                    <p>When UX helps users accomplish their goals, UI creates a connection between the user and the service provider. Our UI designers aim to build keen brand awareness to help your company improve customer satisfaction, improve user interaction, as well as boost your business grow and enhance.</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>

            </div>
            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>Digital Marketing</h2>
                    <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>
                <Image src={webDevelopment} alt='' />
            </div>
            <div className='grid items-center gap-4 my-20 md:grid-cols-2'>
                <Image src={webDevelopment} alt='' />
                <div>
                    <h2 className='mt-5 mb-5 text-3xl'>Graphics Design</h2>
                    <p>Full-service design means that the design agency can provide a large range of services. These can range from brochure design to website design. Agencies will differ slightly on what they provide. But you will normally find their services on a service page on their website</p>
                    <div className='grid grid-cols-6 px-5 my-5 '>
                        <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                    </div>
                    <button className='px-10 py-3 my-5 btn'>Explore</button>
                </div>

            </div>

        </main>
    );
};

export default OurServicePage;
