import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiStar, FiTarget, FiUsers, FiBookOpen } from 'react-icons/fi'

const Achievements = ({ profileData }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: FiAward,
      title: 'Semi-finalist - IITB Techfest\'23 Hackathon',
      description: 'Reached semi-finals in one of India\'s most prestigious technical festivals, competing against thousands of participants.',
      category: 'Hackathon',
      date: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiAward,
      title: 'Finalist - NIV\'23 Hackathon',
      description: 'Secured finalist position by developing innovative solutions under time constraints with excellent teamwork.',
      category: 'Hackathon',
      date: '2023',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: FiStar,
      title: '3rd Rank - INTERSTALLA\'23 Hackathon',
      description: 'Achieved 3rd position in competitive hackathon, demonstrating strong problem-solving and development skills.',
      category: 'Hackathon',
      date: '2023',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: FiUsers,
      title: 'Team Management Excellence',
      description: 'Successfully led multiple project teams, coordinating efforts and ensuring timely delivery of high-quality solutions.',
      category: 'Leadership',
      date: 'Ongoing',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiBookOpen,
      title: 'Blog Management & Content Creation',
      description: 'Managed technical blogs and created engaging content, helping to educate and inspire the developer community.',
      category: 'Content',
      date: 'Ongoing',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: FiTarget,
      title: 'Direct to Consumer Marketing',
      description: 'Developed and executed successful marketing strategies, demonstrating versatility beyond technical skills.',
      category: 'Marketing',
      date: 'Ongoing',
      color: 'from-red-400 to-pink-500'
    }
  ]

  const categories = ['All', 'Hackathon', 'Leadership', 'Content', 'Marketing']
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredAchievements = activeCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory)

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Milestones and accomplishments that mark my journey in technology and beyond
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Achievement Header */}
              <div className={`h-32 bg-gradient-to-br ${achievement.color} flex items-center justify-center relative`}>
                <achievement.icon className="text-6xl text-white opacity-90" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                    {achievement.date}
                  </span>
                </div>
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 bg-gradient-to-r ${achievement.color} text-white rounded-md text-xs font-medium`}>
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Achievement Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A quick overview of my accomplishments across different domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">3</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hackathon Awards</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">5+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projects Led</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Collaborations</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">2+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            These achievements represent my commitment to excellence and continuous learning. 
            I'm always looking for new challenges and opportunities to grow.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiTarget size={20} />
            Let's Collaborate
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
