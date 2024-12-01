import profilePic from '../assets/pritishProfile.jpg'
import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const container = (delay)=>({
  hidden : {x: -100, opacity : 0},
  visible : {
    x : 0,
    opacity : 1,
    transition : {duration : 0.5, delay : delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-col items-center lg:items-start py-8">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate= "visible"
            className="text-5xl lg:text-7xl font-thin tracking-tight mb-8">
              Pritish Jadon
            </motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate= "visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate= "visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-base lg:text-lg">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex justify-center">
            <motion.img 
              initial= {{x : 100, opacity: 0}}
              animate= {{x:0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              src={profilePic} 
              alt="Pritish Jadon" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;