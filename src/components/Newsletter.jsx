import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-[#fcba03] p-10 md:flex justify-evenly items-center text-center ">
      <div className='text-black text md:text-3xl'>Want to learn latest IT Skill?
        <div className='text-[#f7ead7] text-xl '> Sign up to our newsletter and stay updated</div>
      </div>
      <div className='right-[100px] p-20' >
        <input type="email" placeholder="Enter your email" className='p-2 w-[450px] border border-black rounded' />
        <button className='bg-black text-[#f7ead7] p-2 rounded'>Subscribe</button>
      </div>
    </div>
  );
}
