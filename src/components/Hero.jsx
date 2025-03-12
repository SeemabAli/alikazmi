
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "QA Engineer",
              1000,
              "Automation Testing",
              1000,
              "Manual Testing",
              1000,
              "Game testing",
              1000,
              "API Testing",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Ali Kazmi</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            Ensuring Quality, One Test at a Time – Passionate SQA Engineer Dedicated to Bug-Free Software!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <a
              href="/resume.pdf"
              download="Ali_Kazmi_Resume.pdf"
              className="relative z-10 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>



            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/KAZMIALI7" target="_blank">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ali-kazmi-237827323/" target="_blank">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/nisar.akbar.315" target="_blank">
                <AiOutlineFacebook />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>


        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>

    </div>
  )
}

export default Hero