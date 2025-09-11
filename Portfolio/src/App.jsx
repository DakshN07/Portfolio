import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DSASection from './components/DSASection'
import Achievements from './components/Achievements'
import HackathonExperience from './components/HackathonExperience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import DataService from './services/DataService'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState({
    linkedin: null,
    github: null,
    leetcode: null
  })

  useEffect(() => {
    // Initialize data collection
    const initializeData = async () => {
      try {
        const dataService = new DataService()
        
        // Start data collection in parallel
        const [linkedinData, githubData, leetcodeData] = await Promise.allSettled([
          dataService.getLinkedInData(),
          dataService.getGitHubData(),
          dataService.getLeetCodeData()
        ])

        setProfileData({
          linkedin: linkedinData.status === 'fulfilled' ? linkedinData.value : null,
          github: githubData.status === 'fulfilled' ? githubData.value : null,
          leetcode: leetcodeData.status === 'fulfilled' ? leetcodeData.value : null
        })
      } catch (error) {
        console.error('Error initializing data:', error)
      } finally {
        // Minimum loading time for smooth experience
        setTimeout(() => setLoading(false), 2000)
      }
    }

    initializeData()
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ParticleBackground />
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About profileData={profileData} />
        <Skills profileData={profileData} />
        <Projects profileData={profileData} />
        <DSASection profileData={profileData} />
        <Achievements profileData={profileData} />
        <HackathonExperience />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
