import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaFigma } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({ 
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const Technologies = () => {
  return (
    <div className=' min-h-screen'>
      <motion.h1 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-4xl sm:text-5xl md:text-6xl font-black text-custom_pink'>STACKS</motion.h1>
      <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-5xl sm:text-6xl md:text-7xl text-yellow-500' />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-5xl sm:text-6xl md:text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-5xl sm:text-6xl md:text-7xl text-yellow-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-5xl sm:text-6xl md:text-7xl text-orange-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-5xl sm:text-6xl md:text-7xl text-blue-500'/>
        </motion.div>
        <div className='flex flex-wrap items-center justify-center gap-4 pt-12'>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-5xl sm:text-6xl md:text-7xl text-sky-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoPostgresql className='text-5xl sm:text-6xl md:text-7xl text-sky-700' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaDigitalOcean className='text-5xl sm:text-6xl md:text-7xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaWordpress className='text-5xl sm:text-6xl md:text-7xl text-cwhite' />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaFigma className='text-5xl sm:text-6xl md:text-7xl text-purple-500' />
        </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Technologies
