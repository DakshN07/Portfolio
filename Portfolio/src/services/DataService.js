class DataService {
  constructor() {
    this.baseURL = 'https://builder.empromptu.ai/api_tools'
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 8e3708bc27fb7f9c077e82a630cd6927',
      'X-Generated-App-ID': '38d98f85-91f4-462e-98af-dfcb014b36c4',
      'X-Usage-Key': '930ad7556aeec65fa0e30264847d93f5'
    }
  }

  async rapidResearch(objectName, goal) {
    try {
      const response = await fetch(`${this.baseURL}/rapid_research`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          created_object_name: objectName,
          goal: goal
        })
      })
      
      if (!response.ok) {
        if (response.status === 402) {
          console.warn(`Payment required for ${objectName}. API key may need renewal or account may need credits.`)
          return null
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      return data.value || data
    } catch (error) {
      if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
        console.warn(`Network error for ${objectName}: Unable to connect to API. This could be due to CORS, network connectivity, or API availability issues.`)
      } else if (error.message.includes('402')) {
        console.warn(`Skipping ${objectName} due to payment required`)
      } else {
        console.error(`Error in rapid research for ${objectName}:`, error)
      }
      return null
    }
  }

  async getLinkedInData() {
    const goal = `Research Daksh Nayak's LinkedIn profile at https://www.linkedin.com/in/dakshnayak02/ and extract comprehensive information including: work experience, additional skills and endorsements, detailed education information, certifications, recommendations, projects, volunteer experience, and any other professional achievements or activities listed on the profile.`
    
    return await this.rapidResearch('daksh_linkedin_data', goal)
  }

  async getGitHubData() {
    const goal = `Research Daksh Nayak's GitHub profile at https://github.com/DakshN07 and extract detailed information including: all repository details with descriptions, technologies used in each project, contribution statistics, pinned repositories, recent activity, programming languages used, project categories (web apps, hackathon projects, full-stack projects), and any README information that shows project features or live demo links.`
    
    return await this.rapidResearch('daksh_github_data', goal)
  }

  async getLeetCodeData() {
    const goal = `Research Daksh Nayak's LeetCode profile at https://leetcode.com/u/Daksh_vn/ and extract comprehensive DSA information including: problem solving statistics (total problems solved, by difficulty), contest ratings and rankings, badges and achievements earned, programming languages used for solutions, submission statistics, and any other competitive programming accomplishments or metrics available on the profile.`
    
    return await this.rapidResearch('daksh_leetcode_data', goal)
  }

  async setupPrompts() {
    // Setup prompts for data processing
    const prompts = [
      {
        name: 'extract_projects',
        variables: ['github_data'],
        text: 'Extract and format project information from the following GitHub data into a structured list. For each project include: name, description, technologies used, GitHub URL, and if available, live demo URL. Format as JSON array: {github_data}'
      },
      {
        name: 'extract_skills',
        variables: ['linkedin_data', 'github_data'],
        text: 'Extract and categorize technical skills from LinkedIn and GitHub data. Organize into categories like: Programming Languages, Frameworks, Tools, Databases, etc. Combine data from: LinkedIn: {linkedin_data}, GitHub: {github_data}'
      },
      {
        name: 'extract_achievements',
        variables: ['linkedin_data'],
        text: 'Extract professional achievements, certifications, recommendations, and notable accomplishments from LinkedIn data: {linkedin_data}'
      }
    ]

    for (const prompt of prompts) {
      try {
        await fetch(`${this.baseURL}/setup_ai_prompt`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            prompt_name: prompt.name,
            input_variables: prompt.variables,
            prompt_text: prompt.text
          })
        })
      } catch (error) {
        console.error(`Error setting up prompt ${prompt.name}:`, error)
      }
    }
  }
}

export default DataService
