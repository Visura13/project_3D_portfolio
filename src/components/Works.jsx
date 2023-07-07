import React from "react";
import { Tilt } from "react-tilt";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ project, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={project.date}
      iconStyle={{ background: project.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={project.icon}
            alt={project.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >

      <Tilt className='xs:w-[250px] w-full'>

      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full bg-tertiary sm:w-[410px] green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='relative w-full min-h-[280px] bg-tertiary rounded-[20px] py-5 px-5'
      >
        <div className='relative w-full h-[230px]'>
        <img
            src={project.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          </div>
      
        <h3 className='text-white text-[24px] font-bold'>{project.name}</h3>
        
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {project.company_name}
        </p>

        {project.description}

        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
        
        </motion.div>
        </Tilt>
         
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ExperienceCard
              key={`project-${index}`} index={index}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");