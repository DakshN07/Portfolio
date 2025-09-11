import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { SiLeetcode } from 'react-icons/si'
import { FiTrendingUp, FiAward, FiCode, FiTarget } from 'react-icons/fi'

const DSASection = ({ profileData }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Mock LeetCode data (will be replaced with real data from API)
  const leetcodeStats = {
    totalSolved: 150,
    easy: 65,
    medium: 70,
    hard: 15,
    contestRating: 1450,
    globalRanking: 25000,
    badges: ['50 Days Badge', 'Contest Badge', 'Problem Solver'],
    languages: ['Python', 'Java', 'JavaScript', 'C++'],
    recentActivity: [
      { problem: 'Two Sum', difficulty: 'Easy', date: '2024-01-15' },
      { problem: 'Longest Substring', difficulty: 'Medium', date: '2024-01-14' },
      { problem: 'Merge K Sorted Lists', difficulty: 'Hard', date: '2024-01-13' }
    ]
  }

  const difficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-red-500'
  }

  const stats = [
    {
      icon: FiCode,
      label: 'Problems Solved',
      value: leetcodeStats.totalSolved,
      color: 'text-primary-600 dark:text-primary-400'
    },
    {
      icon: FiTrendingUp,
      label: 'Contest Rating',
      value: leetcodeStats.contestRating,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: FiTarget,
      label: 'Global Ranking',
      value: leetcodeStats.globalRanking,
      suffix: 'th',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: FiAward,
      label: 'Badges Earned',
      value: leetcodeStats.badges.length,
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]

  return (
    <section id="dsa" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            DSA & Competitive Programming
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in Data Structures, Algorithms, and competitive programming
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`text-4xl ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={0.5 + index * 0.1}
                    suffix={stat.suffix || ''}
                  />
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem Solving Breakdown */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
              <SiLeetcode className="text-orange-500" />
              Problem Solving Breakdown
            </h3>

            <div className="space-y-6">
              {/* Easy Problems */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-600 dark:text-green-400 font-medium">Easy</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcodeStats.easy}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-green-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(leetcodeStats.easy / leetcodeStats.totalSolved) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>

              {/* Medium Problems */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">Medium</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcodeStats.medium}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-yellow-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(leetcodeStats.medium / leetcodeStats.totalSolved) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>

              {/* Hard Problems */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-600 dark:text-red-400 font-medium">Hard</span>
                  <span className="text-gray-600 dark:text-gray-400">{leetcodeStats.hard}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-red-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(leetcodeStats.hard / leetcodeStats.totalSolved) * 100}%` } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Programming Languages Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {leetcodeStats.languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Badges & Recent Activity */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Badges */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <FiAward className="text-orange-500" />
                Badges & Achievements
              </h3>
              <div className="grid gap-4">
                {leetcodeStats.badges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <FiAward className="text-white" size={20} />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {leetcodeStats.recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {activity.problem}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.date}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      difficultyColors[activity.difficulty.toLowerCase()]
                    }`}>
                      {activity.difficulty}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* LeetCode Profile CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Check out my LeetCode Profile
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow my competitive programming journey and see my latest problem-solving activities.
            </p>
            <motion.a
              href="https://leetcode.com/u/Daksh_vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLeetcode size={20} />
              Visit LeetCode Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DSASection
