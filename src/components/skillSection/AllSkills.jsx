import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const skills=[{
    skill:"HTML",
    icon:FaHtml5,
},
{
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill:"MongoDB",
    icon: SiMongodb
  },
  {
    skill:"Git ",
    icon:FaGithub
  },
  {
    skill:"netlify",
    icon:SiNetlify
  }
]
const AllSkills = () => {

  return (
    <div><div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    {skills.map((item, index) => {
      return (
        
         <motion.div
         variants={fadeIn("up", `0.${index}`)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
         key={index}
         >
           <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
         </motion.div>
       
      );
    })}
  </div></div>
  )
}

export default AllSkills