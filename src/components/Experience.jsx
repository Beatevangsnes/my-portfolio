import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'


const Experience = () => {
  return (
    <div className=''>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: .5 }}
      className='my-20 text-4xl sm:text-5xl md:text-6xl font-black text-custom_pink'>EDUCATION</motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='flex flex-wrap mb-8 lg:justify-right'>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/6'>
              <p className='mb-2 text-sm font-bold text-custom_black'>{experience.year}</p>
            </motion.div>
            <motion.div   
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-5/6'>
              <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-custom_black'>{experience.company}</span></h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
