import React from 'react';
import { TbBow } from "react-icons/tb";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className='bg-[#fcba03] p-4 w-full h-[350px] flex justify-center '>
      <div className='max-w-[1240px] mt-[50px]  mx-auto flex justify-between items-center'>
         <div>
            <h1 className='text-xl text-bold md:text-5xl flex items-center p-6 mt-4'>
             <span>Welcome to Arch</span><TbBow  /> <span>angel</span>
            </h1>
            <div className=' px-8 item-center text-xl md:text-3xl mt-4'>
                <p className='text-bold'>We are a team of talented professionals.</p>
                <span className='text-bold'>Who specialize in </span>
                    <ReactTyped
                        strings={[
                            "Web development",
                            "Marketing",
                            "Ethical Hacking",
                        ]}
                        typeSpeed={100}
                         backSpeed={120}
                        // attr="placeholder"
                        loop
                        >
                    
                        </ReactTyped>
            </div>
         </div> 
      </div>
    </div>
  );
}

export default Banner;
