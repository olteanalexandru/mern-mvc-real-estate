import axios, { AxiosRequestConfig } from 'axios'

const API_URL = '/api/goals/'
const API_URL_goals = '/api/goals/Goals/'

// Create new goal
const createGoal = async (goalData: any, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}



//get all goals
const SinglePage = async (goalId: string) => {
  
  

  const response = await axios.get(API_URL_goals + goalId )

  return response.data
}

//get programare
const programarea = async (goalId: string, goalData: AxiosRequestConfig<any> | undefined, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL_goals + goalId,  goalData , config )
  return response.data
}




//get all goals
const getAllGoals = async () => {
  
  

  const response = await axios.get(API_URL_goals)

  return response.data
}




// Delete user goal
const deleteGoal = async (goalId: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  getAllGoals,
  deleteGoal,
  SinglePage,
  programarea
  
}

export default goalService
