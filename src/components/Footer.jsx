import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'

function Footer() {
  return (
    <div>
        <div className=' bg-zinc-900 w-full h-[30vh] flex justify-center items-center '>
            <div >
            <div className=' text-zinc-200 h-5 w-full px-10 py-auto text-center'>
            © 2025 Jyotiba Temple, Ninam Village. All rights reserved.
              <div className=' text-zinc-200 h-30 w-full px-10 py-auto text-center flex gap-20 pt-5 items-center'>
            <PiInstagramLogoFill/> <FaFacebook/><BsWhatsapp/>
            </div>
            </div>
           

            </div>
            
        </div>
    </div>
  )
}

export default Footer