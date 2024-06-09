// src/components/Projects.jsx
import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: .5 }}
      className='my-20 text-center text-4xl'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/4'>
              <img src={project.image} 
              width={150} 
              height={150} 
              alt={project.title} 
              className='mb-6 rounded' />
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 text-sm font-medium px-2 py-1'>{tech}</span>
              ))}
              <div className='flex mt-4'>
                <a href={project.netlify} target="_blank" rel="noopener noreferrer" className='mr-4'>
                  <SiNetlify className='text-3xl text-cyan-400' />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-3xl text-neutral-100' />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
