import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiUsers, FiCode, FiAward, FiTrendingUp, FiZap } from 'react-icons/fi'

const HackathonExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const hackathons = [
    {
      id: 1,
      name: 'IITB Techfest\'23 Hackathon',
      position: 'Semi-finalist',
      date: '2023',
      duration: '48 hours',
      participants: '2000+',
      description: 'Competed in one of India\'s most prestigious technical festivals. Developed an innovative EdTech solution that reached the semi-finals among thousands of participants.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      achievements: [
        'Reached semi-finals out of 2000+ participants',
        'Developed real-time collaborative learning platform',
        'Implemented advanced user authentication and progress tracking'
      ],
      color: 'from-blue-500 to-purple-600',
      icon: '🏆'
    },
    {
      id: 2,
      name: 'NIV\'23 Hackathon',
      position: 'Finalist',
      date: '2023',
      duration: '36 hours',
      participants: '1500+',
      description: 'Secured finalist position by creating a sustainable technology solution. Focused on environmental impact and social good through innovative web development.',
      technologies: ['React', 'Python', 'Flask', 'PostgreSQL'],
      achievements: [
        'Reached finals among 1500+ participants',
        'Built eco-friendly solution tracking platform',
        'Integrated machine learning for impact prediction'
      ],
      color: 'from-green-500 to-teal-600',
      icon: '🌟'
    },
    {
      id: 3,
      name: 'INTERSTALLA\'23 Hackathon',
      position: '3rd Rank',
      date: '2023',
      duration: '24 hours',
      participants: '800+',
      description: 'Achieved 3rd position by developing a space-tech inspired application. Demonstrated exceptional problem-solving skills and innovative thinking under pressure.',
      technologies: ['JavaScript', 'Three.js', 'WebGL', 'Firebase'],
      achievements: [
        'Secured 3rd rank out of 800+ participants',
        'Created immersive 3D space exploration app',
        'Implemented real-time data visualization'
      ],
      color: 'from-purple-500 to-pink-600',
      icon: '🥉'
    }
  ]

  const skills = [
    { name: 'Rapid Prototyping', icon: FiZap },
    { name: 'Team Leadership', icon: FiUsers },
    { name: 'Problem Solving', icon: FiCode },
    { name: 'Time Management', icon: FiCalendar },
    { name: 'Innovation', icon: FiTrendingUp },
    { name: 'Presentation', icon: FiAward }
  ]

  return (
    <section id="hackathons" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Hackathon Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through competitive programming events and innovation challenges
          </p>
        </motion.div>

        {/* Hackathon Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-400 to-purple-500 rounded-full hidden lg:block" />

          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-8'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full hidden lg:block" />

              {/* Hackathon Card */}
              <motion.div
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{hackathon.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        {hackathon.name}
                      </h3>
                    </div>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${hackathon.color} text-white rounded-full font-semibold text-lg`}>
                      {hackathon.position}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{hackathon.date}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{hackathon.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                    <FiUsers className="text-2xl text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Participants</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{hackathon.participants}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center">
                    <FiCalendar className="text-2xl text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="font-bold text-gray-800 dark:text-gray-200">{hackathon.duration}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {hackathon.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiAward className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills Gained */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Skills Developed Through Hackathons
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These intense competitions have helped me develop crucial skills that extend far beyond coding
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="text-3xl text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Ready for the Next Challenge
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to participate in new hackathons and collaborative projects. 
              Let's build something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiZap size={20} />
              Let's Collaborate
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HackathonExperience
