import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { TbBow } from "react-icons/tb";

export default function Header() {
    const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="bg-[#fcba03] p-4">
        <div className='max-w-[1240px] mt-[50px]  mx-auto flex justify-between items-center'>
           <div className='text-3xl font-bold flex items-center'>
            Arch <TbBow  />angel
           </div>
           {
            showMenu?
             <IoCloseSharp onClick={()=>{setShowMenu(!showMenu)}} className='md:hidden block text-2xl' />
              : <AiOutlineMenu onClick={()=>{setShowMenu(!showMenu)}} className='md:hidden block text-2xl'/>
           }
           {/* <AiOutlineMenu onClick={()=>{setShowMenu(!showMenu)}} className='md:hidden block text-2xl'/>
           <IoCloseSharp onClick={()=>{setShowMenu(!showMenu)}} className='md:hidden block text-2xl' /> */}
           <ul className='hidden md:flex space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Employee</li>
            <li>Join Us</li>
           </ul>
{/* for reaponsive */}
           <ul className='fixed md:hidden left-0 top-[118px] bg-[black] text-[#fcba03] w-full flex flex-col items-center h-screen'
            style={{display: showMenu? 'block': 'none'}}>
            <li className='p-5'>Home</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Employee</li>
            <li className='p-5'>Join Us</li>
           </ul>
        </div>
      
    </div>
  );
}
