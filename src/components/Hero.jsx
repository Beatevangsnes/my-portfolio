import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/bv_profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({ 
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5, 
      delay: delay
    }
  }
})

const Hero = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex min-h-screen gap-2 flex-col-reverse md:flex-row items-center justify-center md:justify-between'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
            variants={container(0)}
            initial='hidden'
            animate='visible'
            className='pb-4 text-6xl tracking-light lg:mt-16 lg:text-8xl text-custom_pink font-montserrat font-black'>Hi there,
              I'm Beate!</motion.h1>
            <motion.p 
            variants={container(.5)}
            initial='hidden'
            animate='visible'
            className='my-2 max-w-xl py-4 font-bold text-custom_black tracking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
            initial={{ x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1}}
            className='rounded-lg'
             src={profilePic} alt='Beate Vangsnes' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero


