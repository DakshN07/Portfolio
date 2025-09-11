import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode, FiStar, FiGitBranch } from 'react-icons/fi'

const Projects = ({ profileData }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [projects, setProjects] = useState([])

  // Mock projects data (will be replaced with real GitHub data)
  const mockProjects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com/DakshN07/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.netlify.app',
      stars: 15,
      forks: 8,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      category: 'web',
      githubUrl: 'https://github.com/DakshN07/task-manager',
      liveUrl: 'https://task-manager-demo.netlify.app',
      stars: 12,
      forks: 5,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      name: 'Weather Forecast App',
      description: 'A responsive weather application that provides detailed weather information and forecasts using OpenWeatherMap API.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeatherMap API'],
      category: 'web',
      githubUrl: 'https://github.com/DakshN07/weather-app',
      liveUrl: 'https://weather-forecast-demo.netlify.app',
      stars: 8,
      forks: 3,
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      name: 'Hackathon Project - EduTech',
      description: 'An educational technology platform developed during IITB Techfest\'23 hackathon. Features interactive learning modules and progress tracking.',
      technologies: ['React', 'Python', 'Flask', 'SQLite'],
      category: 'hackathon',
      githubUrl: 'https://github.com/DakshN07/edutech-hackathon',
      stars: 20,
      forks: 12,
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      name: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion, featuring particle effects and smooth animations.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      category: 'web',
      githubUrl: 'https://github.com/DakshN07/portfolio',
      liveUrl: 'https://dakshnayak.netlify.app',
      stars: 25,
      forks: 10,
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      name: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and emoji support built during a weekend hackathon.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'hackathon',
      githubUrl: 'https://github.com/DakshN07/chat-app',
      stars: 18,
      forks: 7,
      image: '/api/placeholder/400/250'
    }
  ]

  useEffect(() => {
    // In a real implementation, this would fetch from GitHub API using profileData
    setProjects(mockProjects)
  }, [profileData])

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'hackathon', label: 'Hackathon Projects' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my development work and hackathon projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
                <FiCode className="text-6xl text-white opacity-50" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                    <FiStar size={12} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
                    <FiGitBranch size={12} />
                    {project.forks}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={16} />
                    Code
                  </motion.a>
                  
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Want to see more?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples. 
              I'm always working on something new!
            </p>
            <motion.a
              href="https://github.com/DakshN07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub size={20} />
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
