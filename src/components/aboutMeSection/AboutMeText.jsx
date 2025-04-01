import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
    return (
        <div className=' flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
            <h2 className=' text-6xl text-cyan mb-10'>About Me</h2>
            <p className=' text-white'>I'm Alvin Mathew, an enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in MongoDB, Express.js, React.js, and Node.js. I have a strong understanding of REST APIs, Git version control, and Socket.io for real-time applications. I successfully completed a MERN Stack Development course from UO Tech, Thevara, and a Full Stack Internship Program by Edureka, gaining practical exposure to real-world projects. Passionate about building scalable web applications and always eager to learn new technologies. Currently, I am looking for a great opportunity to apply my skills and contribute to innovative projects</p>
           <Link to='projects'  spy={true}
              smooth={true}
              duration={500}
              offset={-130}> <button className=' border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My projects</button>      </Link>
        </div>
    )
}

export default AboutMeText