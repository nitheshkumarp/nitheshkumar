import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profile from '../assets/profilepic.png';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiJavascript } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaGraduationCap, FaCertificate, FaProjectDiagram, FaLanguage, FaTrophy } from 'react-icons/fa';

const skillIcons = [
  { icon: <FaHtml5 className='text-orange-500 text-4xl' />, name: 'HTML5' },
  { icon: <FaCss3Alt className='text-blue-600 text-4xl' />, name: 'CSS3' },
  { icon: <SiJavascript className='text-yellow-400 text-4xl' />, name: 'JavaScript' },
  { icon: <FaReact className='text-cyan-400 text-4xl' />, name: 'React.js' },
  { icon: <FaJava className='text-red-500 text-4xl' />, name: 'Core Java' },
  { icon: <SiSpringboot className='text-green-600 text-4xl' />, name: 'Spring Boot' },
  { icon: <SiMysql className='text-blue-700 text-4xl' />, name: 'MySQL' },
  { icon: <FaDatabase className='text-purple-500 text-4xl' />, name: 'SQL' },
  { icon: <FaGitAlt className='text-orange-600 text-4xl' />, name: 'Git' },
];

const Home: React.FC = () => (
  <div className="bg-white">
    <Header />
    <main>
      <section className="text-center py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-neutral-900">
            Welcome to <span className='text-blue-700'>NITHESH KUMAR REDDY P</span>'s Portfolio
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Java Full Stack Developer | ECE Graduate | IoT Enthusiast
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4">
        <div className="flex flex-col sm:flex-row items-center gap-14 container mx-auto">
          <motion.div 
            className="sm:w-1/2" 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
          >
            <h2 className='text-2xl sm:text-3xl font-bold text-neutral-800 mb-4'>About Me</h2>
            <p className="text-gray-600 mb-2">
              Detail-oriented ECE graduate with expertise in Java Full Stack Development and IoT.
            </p>
            <p className="text-gray-600 mb-2">
              Skilled in Java, Spring Boot, React.js, and hands-on experience with live community-driven projects.
            </p>
            <p className="text-gray-600">
              Passionate about building scalable solutions and enhancing exam security with IoT innovations.
            </p>
          </motion.div>
          <motion.div 
            className="sm:w-1/2" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
          >
            <img src={profile} alt='profile' className='rounded-2xl w-full h-auto shadow-xl' />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-10">Skills</h2>
          <Marquee gradient={false} speed={50} pauseOnHover>
            <div className="flex gap-10">
              {skillIcons.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-gray-700">
                  {skill.icon}
                  <span className='mt-2'>{skill.name}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
          <motion.div 
            className="container mx-auto bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 text-center mb-10">Professional Overview</h2>

            <div className="text-gray-800">
              
              <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.1 }}
              >
                <FaGraduationCap className="text-blue-600 text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Education</h3>
              </motion.div>
              <ul className="list-disc list-inside pl-6 space-y-2 text-lg sm:text-xl">
                <li>B.Tech in ECE - DBS Institute of Technology (2023)</li>
                <li>Intermediate (MPC) - Sri Chaitanya Jr College</li>
                <li>SSC - R.K.J.C High School</li>
              </ul>

              
              <motion.div 
                className="flex items-center gap-4 mb-8 mt-8"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.3 }}
              >
                <FaCertificate className="text-yellow-500 text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Certifications</h3>
              </motion.div>
              <ul className="list-disc list-inside pl-6 space-y-2 text-lg sm:text-xl">
                <li>Java Full Stack - TAP Academy</li>
                <li>Web Development - 1STOP</li>
              </ul>

              
              <motion.div 
                className="flex items-center gap-4 mb-8 mt-8"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.5 }}
              >
                <FaProjectDiagram className="text-green-600 text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Projects</h3>
              </motion.div>
              <ul className="list-disc list-inside pl-6 space-y-2 text-lg sm:text-xl">
                <li>IoT Exam Hall Fingerprint Authentication System</li>
                <li>E-commerce website - Increased user engagement by 20%</li>
              </ul>

              
              <motion.div 
                className="flex items-center gap-4 mb-8 mt-8"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.7 }}
              >
                <FaLanguage className="text-purple-600 text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Languages</h3>
              </motion.div>
              <p className="text-lg sm:text-xl">English, Telugu, Hindi, Kannada</p>

              
              <motion.div 
                className="flex items-center gap-4 mb-8 mt-8"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.9 }}
              >
                <FaTrophy className="text-orange-600 text-3xl sm:text-4xl transform transition-transform duration-300 hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Achievements</h3>
              </motion.div>
              <ul className="list-disc list-inside pl-6 space-y-2 text-lg sm:text-xl">
                <li>Improved exam security by 40%</li>
                <li>Active contributor in real-time community projects</li>
              </ul>
            </div>
          </motion.div>
        </section>
      <section className="bg-white py-12 text-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">Let's Connect</h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a href="mailto:nitheshreddy0007@gmail.com" className="text-blue-500">nitheshreddy0007@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500 text-xl" />
                <p>+91 8008867816</p>
              </div>
              
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <p>Allur (Md), Nellore, Andhra Pradesh – 524315</p>
              </div>
            </div>
          </motion.div>
        </section>
    </main>
    <Footer />
  </div>
);

export default Home;
