import React from 'react'
import { motion } from 'framer-motion'

const Hobby = () => {
  return (
    <div className='min-h-screen'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: .5 }}
      className='my-20 text-4xl sm:text-5xl md:text-6xl font-black text-custom_pink'>Hobby</motion.h1>
      <div className='text-left tracking-tighter'>
              <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='my-4'>
                <p>Skiing</p>
                <p>Running</p>
                <p>Gaming</p>
                <p>Programming</p>
                <p>Cooking</p>
                <p>Travel</p>
                <p>Be social</p>
              </motion.div >
        </div>

    </div>
  )
}

export default Hobby
