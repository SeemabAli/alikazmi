import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { AiOutlineBug, AiOutlineCloud } from 'react-icons/ai';
import { FaDatabase, FaServer, FaLaptopCode } from 'react-icons/fa';
import { SiSelenium, SiJest, SiPostman, SiJira, SiCypress, SiDocker } from 'react-icons/si';

const experiences = [
  {
    company: 'EZ Parking – Flutter Mobile App & Hardware Integration with QA Excellence',
    period: 'Final Year Project',
    description:
      'Developed a Flutter-based smart parking solution with ultrasonic sensors for real-time slot detection. QA strategies included unit, widget, and end-to-end testing, ensuring seamless hardware-software integration.',
  },
  {
    company: 'E-Learning Platform – MERN Stack with Automated Testing',
    period: '2023',
    description:
      'Designed and tested a scalable e-learning platform using MERN stack. Implemented Jest and Cypress for automated testing, ensuring robust API and UI validation. Integrated CI/CD for continuous deployment.',
  },
  {
    company: 'Banking App – API Testing & Security Assurance',
    period: '2023 - Present',
    description:
      'Led API testing for a banking application using Postman and Newman for automated validation. Conducted security testing to identify vulnerabilities and improve data encryption strategies.',
  },
  {
    company: 'E-Commerce QA – Performance & Load Testing',
    period: '2022 - Present',
    description:
      'Performed load and stress testing on an e-commerce platform using JMeter, ensuring stable performance under high traffic. Identified and resolved bottlenecks to optimize system scalability.',
  },
];


const techStack = [
  { name: 'Manual Testing', icon: <AiOutlineBug className="text-yellow-500 text-5xl mx-auto" /> },
  { name: 'JIRA', icon: <SiJira className="text-blue-500 text-5xl mx-auto" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500 text-5xl mx-auto" /> },
  { name: 'Selenium', icon: <SiSelenium className="text-green-500 text-5xl mx-auto" /> },
  { name: 'Cypress', icon: <SiCypress className="text-gray-300 text-5xl mx-auto" /> },
  { name: 'Jest', icon: <SiJest className="text-red-500 text-5xl mx-auto" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400 text-5xl mx-auto" /> },
  { name: 'CI/CD', icon: <AiOutlineCloud className="text-teal-400 text-5xl mx-auto" /> },
  { name: 'API Testing', icon: <FaServer className="text-gray-400 text-5xl mx-auto" /> },
  { name: 'Performance Testing', icon: <FaLaptopCode className="text-green-400 text-5xl mx-auto" /> },
  { name: 'Database Testing', icon: <FaDatabase className="text-orange-400 text-5xl mx-auto" /> },
];

const Services = () => {
  return (
    <div id="services">
    <div className='p-8 max-w-[1000px] mx-auto' id="services">
      {/* Tech Stack Section */}
      <h1 className='text-4xl text-gray-200 font-bold text-center mt-16 mb-12'>Tech Stack</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-gray-300'
      >
        {techStack.map((tech, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} className='p-4 border border-gray-600 rounded-lg shadow-md bg-gray-800/20 hover:bg-gray-800/40 transition duration-300'>
            {tech.icon}
            <p className='mt-2 text-sm'>{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience Section */}
      <h1 className='text-4xl text-gray-200 font-bold text-center mt-12 mb-12'>Experience</h1>
      <motion.div className='space-y-8' initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Services;
