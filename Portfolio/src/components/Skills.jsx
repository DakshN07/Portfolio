import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiTool, 
  FiLayers,
  FiSmartphone,
  FiGitBranch,
  FiCloud
} from 'react-icons/fi'

const Skills = ({ profileData }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      icon: FiGlobe,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 80, color: 'bg-teal-500' },
        { name: 'Bootstrap', level: 85, color: 'bg-purple-500' }
      ]
    },
    backend: {
      icon: FiDatabase,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75, color: 'bg-green-500' },
        { name: 'Express.js', level: 70, color: 'bg-gray-600' },
        { name: 'MongoDB', level: 65, color: 'bg-green-600' },
        { name: 'MySQL', level: 70, color: 'bg-blue-700' },
        { name: 'REST APIs', level: 75, color: 'bg-indigo-500' }
      ]
    },
    programming: {
      icon: FiCode,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Python', level: 75, color: 'bg-blue-500' },
        { name: 'Java', level: 70, color: 'bg-red-500' },
        { name: 'C++', level: 65, color: 'bg-blue-600' },
        { name: 'TypeScript', level: 60, color: 'bg-blue-700' }
      ]
    },
    tools: {
      icon: FiTool,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'bg-gray-800' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' },
        { name: 'Postman', level: 75, color: 'bg-orange-500' },
        { name: 'Video Editing', level: 80, color: 'bg-red-500' }
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={20} />
                {category.title}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200 flex items-center justify-center gap-3">
              {React.createElement(skillCategories[activeCategory].icon, {
                className: "text-primary-600 dark:text-primary-400",
                size: 28
              })}
              {skillCategories[activeCategory].title}
            </h3>

            <div className="grid gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I'm passionate about staying up-to-date with the latest technologies and continuously 
              expanding my skill set. Currently exploring advanced React patterns, cloud technologies, 
              and competitive programming.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'Team Collaboration', 'Project Management', 'UI/UX Design', 'Agile Development'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md"
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
    </section>
  )
}

export default Skills
