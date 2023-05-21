import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 *
      index, 0.75)}
      className='w-full green-pink-gradient
      p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px]
          font-bold text-center'
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >Introduction</p>
      <h2 className={styles.sectionHeadText}
      >Overview.</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'
    >
      I am a software developer specializing in front-end development,
      with a passion for creating user-friendly and visually stunning websites. Proficient
      in HTML, CSS, JavaScript, and React, I have the expertise to transform design concepts
      into fully functional web applications.
      In addition to my front-end skills, I also have experience in back-end development languages
      such as Python and Node.js, allowing me to build dynamic and interactive web experiences.
      I stay abreast of the latest industry trends and best practices, continuously expanding my
      knowledge to deliver cutting-edge solutions.
      With a strong attention to detail and a focus on creating seamless user experiences,
      I strive to exceed client expectations and ensure their satisfaction.
      I am dedicated to continuous learning and improvement, always seeking new challenges
      and opportunities to enhance my skills as a software developer.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title}
        index={index} {...service}/>
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")