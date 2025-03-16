import React from 'react'
import { CONTACT, SOCIAL_LINKS } from '../constants'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='min-h-screen'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: .5 }}
      className='my-20 text-4xl sm:text-5xl md:text-6xl font-black text-custom_pink'>Get In Touch</motion.h1>
      <div className='text-left tracking-tighter'>
        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        href={`mailto:${CONTACT.email}`} className='my-4'>{CONTACT.email}</motion.a>
        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='my-4'>{CONTACT.phoneNo}</motion.p>
        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className='inline-block my-4'>
          <FaLinkedin className='text-2xl' />
        </motion.a>
      </div>
    </div>
  )
}

export default Contact
