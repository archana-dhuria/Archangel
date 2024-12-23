import React from 'react';
import laptop from '../assets/laptop.jpg';

export default function Experts() {
  return (
    <div className='bg-[white] w-full h-auto flex justify-center'>
    <img src={laptop} alt="experts" className='w-full h-auto object-cover'/>
    <div className='absolute right-0 left-[250px] top-[500px]  bg-opacity-90 p-5 text-center max-w-4xl mx-auto'>
      <p className='text-xl text-[#a88932] p-4 leading-relaxed tracking-wide'>
        In today’s digital age, mastering web development, marketing, and ethical hacking creates a trifecta of skills essential for navigating and thriving in the online world. These domains not only complement each other but also amplify the impact an individual or organization can make in the digital landscape.
        <h2 className='text-3xl mt-5'> Web Development</h2>
        <p className='mt-5'> Web development serves as the backbone of the online world, shaping how users interact with websites and applications.</p>
        <h2 className='text-3xl mt-5'> Marketing</h2>
        <p className='mt-5'>Digital marketing is the art of reaching the right audience with the right message at the right time.</p>
        <h2 className='text-3xl mt-5'> Hacking Expertise</h2>
        <p className='mt-5'> In an era of cyber threats, ethical hacking expertise is indispensable. Understanding the vulnerabilities of systems and proactively addressing security gaps can protect data and infrastructure from malicious attacks.</p>
      </p>
      <button className='rounded p-4 text-[#f7ead7] bg-[#bd7c22] mt-5 text-xl'>Get Started &rarr;</button>
    </div>
  </div>
  );
}