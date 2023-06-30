import React from 'react'
import pfp from './assets/pfpmacpng.png'
import { motion } from "framer-motion"

const App = () => {
  return (
    <div className='backdrop-blur-sm min-h-screen p-3 max-w-full justify-center overflow-y-hidden bg-black/50 flex items-center'>
      <div className='bg-white rounded-xl flex flex-col py-4 px-5'>
        <motion.div 
          className='grid grid-col mx-auto'
          initial={{ opacity: 0}} 
          animate={{ opacity: 1}}
          transition={{duration: 2, delay: 0.2}}
          >
             <img src={pfp} alt="pfp" className='w-[150px]' />
        </motion.div>
        <motion.div 
        className='text-center font-bold'
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{duration: 2, delay: 0.4}}>
          <h1 className='text-2xl pt-2'>While Developer</h1>
          <p>Jiranthanin Horpanich</p>
        </motion.div>
        <motion.div 
          className='text-center font-semibold pt-3'
          initial={{ opacity: 0}} 
          animate={{ opacity: 1}}
          transition={{duration: 2, delay: 0.6}}
          >
          <h1>Hi there, I'm Mungkorn 👋</h1>
          <p>I'm a 13-year-old full-stack developer,</p>
          <p>and I still keep learning new things every day! 📖</p>
        </motion.div>
        <motion.div
        className='pt-3'
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{duration: 2, delay: 1}}>
          <ul className='grid grid-cols-3 gap-3 border-t-2 pt-3'>
            <li className='bg-[#3b5998] p-1 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] text-white text-center font-semibold text-[12px]'>
              <a href="https://www.facebook.com/mungkornzaza.sologaming/">facebook</a>  
            </li>
            <li className='instagram'>
              <a href="https://www.instagram.com/_mungk0rn_/">instagram</a>
            </li>
            <li className='bg-black p-1 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] text-white text-center font-semibold text-[12px]'>
              <a href="https://github.com/CinnamonRolly">github</a>
            </li>
            <li className='bg-gradient-to-r from-red-600 to bg-orange-400 p-1 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] text-white text-center font-semibold text-[12px]'>
              <a href="https://www.youtube.com/channel/UCWy7pKl-5CBX3OT6vLBbIbA">youtube</a>
            </li>
            <li className='bg-gradient-to-r from-blue-600 to bg-sky-500 p-1 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] text-white text-center font-semibold text-[12px]'>
              <a href="https://twitter.com/whiledev7">twitter</a>
            </li>
            <li className='bg-gradient-to-r from-slate-900 to bg-purple-400 p-1 rounded-md drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] text-white text-center font-semibold text-[12px]'>
              <a href="https://whiledev.vercel.app/">portfolio</a>
              </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default App