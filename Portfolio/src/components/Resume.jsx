import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiEye, FiFileText, FiExternalLink } from 'react-icons/fi'

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [showPreview, setShowPreview] = useState(false)

  // Resume sections for preview
  const resumeSections = {
    contact: {
      name: 'Daksh Nayak',
      title: 'Web Developer || Semi finalist in IITB Techfest\'23 Hackathon || NIV\'23 Hackathon Finalist ||3rd Rank in INTERSTALLA\'23 Hackathon || Video Editor',
      location: 'Nagpur, Maharashtra, India',
      phone: '8432391009',
      email: 'dakshnayak635@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dakshnayak02/',
      github: 'https://github.com/DakshN07',
      leetcode: 'https://leetcode.com/u/Daksh_vn/'
    },
    summary: 'I\'m a beginner, learner, like to work with new things, enjoy every work with team management, and do my best every time!!',
    education: [
      {
        degree: 'Bachelor of Technology - BTech, Computer Science',
        institution: 'G.H. Raisoni College of Engineering(GHRCE), Nagpur',
        duration: 'June 2023 - June 2027'
      },
      {
        degree: 'High School Diploma',
        institution: 'San Francis',
        duration: 'Completed'
      }
    ],
    skills: [
      'Direct to Consumer Marketing',
      'Blog Management',
      'Chatbot Responses',
      'Web Development',
      'Team Management',
      'Video Editing'
    ]
  }

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a')
    link.href = '/resume-daksh-nayak.pdf' // This would be the actual PDF path
    link.download = 'Daksh_Nayak_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my resume or view it online to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Actions */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Action Buttons */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <FiFileText className="text-primary-600 dark:text-primary-400" />
                Resume Actions
              </h3>
              
              <div className="space-y-4">
                <motion.button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload size={20} />
                  Download PDF Resume
                </motion.button>

                <motion.button
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiEye size={20} />
                  {showPreview ? 'Hide Preview' : 'View Preview'}
                </motion.button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Quick Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Experience Level</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Entry Level</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Education</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">BTech CSE (Ongoing)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Location</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Nagpur, MH</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Availability</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Professional Links
              </h3>
              
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/dakshnayak02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">in</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">LinkedIn Profile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional Network</p>
                  </div>
                  <FiExternalLink className="text-gray-400 ml-auto" size={16} />
                </a>

                <a
                  href="https://github.com/DakshN07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-gray-800 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GH</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">GitHub Profile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Code Repository</p>
                  </div>
                  <FiExternalLink className="text-gray-400 ml-auto" size={16} />
                </a>

                <a
                  href="https://leetcode.com/u/Daksh_vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LC</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">LeetCode Profile</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Coding Practice</p>
                  </div>
                  <FiExternalLink className="text-gray-400 ml-auto" size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            className={`${showPreview ? 'block' : 'hidden lg:block'}`}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Resume Preview
              </h3>
              
              {/* Resume Content */}
              <div className="space-y-6 text-sm">
                {/* Header */}
                <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {resumeSections.contact.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {resumeSections.contact.title}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
                    <span>📍 {resumeSections.contact.location}</span>
                    <span>📧 {resumeSections.contact.email}</span>
                    <span>📱 {resumeSections.contact.phone}</span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Summary</h2>
                  <p className="text-gray-600 dark:text-gray-300">{resumeSections.summary}</p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Education</h2>
                  <div className="space-y-3">
                    {resumeSections.education.map((edu, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{edu.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Skills */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Top Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeSections.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Let's Connect Professionally
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, and exciting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFileText size={20} />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
