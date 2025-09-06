import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMapPin, FiGraduationCap, FiHeart } from 'react-icons/fi'

const About = ({ profileData }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: FiGraduationCap, label: 'Education', value: 'BTech CSE' },
    { icon: FiMapPin, label: 'Location', value: 'Nagpur, MH' },
    { icon: FiHeart, label: 'Passion', value: 'Web Dev' },
    { icon: FiUser, label: 'Role', value: 'Developer' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student at G.H. Raisoni College of Engineering, Nagpur, 
                with a deep love for web development and innovative problem-solving. My journey in tech 
                has been marked by exciting hackathon experiences and continuous learning.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As someone who enjoys working with new technologies, I thrive in collaborative environments 
                and team management roles. My hackathon achievements reflect my ability to work under pressure 
                and deliver creative solutions within tight deadlines.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond coding, I'm also skilled in video editing and have experience in direct-to-consumer 
                marketing and blog management. I believe in continuous learning and always strive to do my best 
                in every project I undertake.
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 dark:text-primary-400">📧</span>
                  <span className="text-gray-600 dark:text-gray-300">nayakdaksh93@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 dark:text-primary-400">📱</span>
                  <span className="text-gray-600 dark:text-gray-300">+91 8432391009</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary-600 dark:text-primary-400">📍</span>
                  <span className="text-gray-600 dark:text-gray-300">Nagpur, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="text-3xl text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <FiGraduationCap className="text-primary-600 dark:text-primary-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Bachelor of Technology - Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    G.H. Raisoni College of Engineering (GHRCE), Nagpur
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    June 2023 - June 2027
                  </p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    High School Diploma
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    San Francis School
                  </p>
                </div>
              </div>
            </div>

            {/* Top Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Direct to Consumer Marketing', 'Blog Management', 'Chatbot Responses', 'Web Development', 'Team Management'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
