import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects=[{
    name:"Chatty-Messenger",
    year:"Dec2024",
    align:"right",
    description:"Chatty is a real-time chat application with instant messaging via WebSocket (Socket.IO), secure authentication (JWT, bcryptjs), and media uploads (Cloudinary). Features include theme switching (Context API/Redux), chat storage (MongoDB), and error handling. Built with React, Tailwind CSS, Node.js, and Express.js.",
    image:"../images/chatty.png",
    link:"https://realtime-chatapp-j5mq.onrender.com/"
},
{
        name:"AtoZ -EcomSite",
        year:"Jan2025",
        align:"left",
        description:"AtoZ is a full-featured eCommerce website with secure authentication (JWT, bcryptjs) and an intuitive admin panel for product management. It offers a seamless shopping experience with a user-friendly interface, dynamic product listings, add-to-cart functionality, and order tracking. Integrated with Stripe for secure payments, ensuring smooth transactions. Built with React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
        image:"../images/atoz.png",
        link:"https://ecom-fullstack-58v3.vercel.app/"
    
},
{
    
    name:"JobPotel",
    year:"Feb2025",
    align:"right",
    description:"A dynamic job portal where users can register as students or recruiters. Recruiters can create company profiles, post job listings, and manage applications, while students can explore job opportunities, apply using filters, and track their applications. Recruiters can review, shortlist, or reject applicants seamlessly. Built with React, Tailwind CSS, Node.js, Express.js, and MongoDB for a smooth and efficient hiring process.",
    image:"../images/jobportal.png",
    link:"https://jobportal-lfkd.onrender.com"
},
{
    name:"Travel",
    year:"Feb2025",
    align:"left",
    description:"A responsive travel booking website built using JavaScript and Tailwind CSS. It features an intuitive user interface with dynamic tour listings, destination highlights, and a smooth, interactive design. As a frontend-only site, it focuses on user experience and visual appeal, providing an engaging platform for exploring and selecting tours.",
    image:"../images/TravelSite.png",
    link:"https://travel-homepage-seven.vercel.app/"
}
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        >
         <ProjectText/>
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain