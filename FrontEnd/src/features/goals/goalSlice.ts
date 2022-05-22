// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosRequestConfig } from 'axios'
import goalService from './goalService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const newLocal = thunkAPI.getState()
      const token = newLocal.auth.user.token
      return await goalService.createGoal(goalData, token) 
      
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Create programare
export const programarea = createAsyncThunk(
  'goals/programarea',
  async (id: string, goalData: AxiosRequestConfig<any> | undefined, thunkAPI: { getState: () => { (): any; new(): any; auth: { (): any; new(): any; user: { (): any; new(): any; token: string } } } }) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.programarea(id, goalData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  }
)



// Get user goals
export const getGoals = createAsyncThunk(
  'goals/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.getGoals(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


//Single goal page
export const SinglePage= createAsyncThunk(
  'goals/SinglePage',
  async (id) => {
    try {
      return await goalService.SinglePage(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  }
)






//get all goals
export const getAllGoals = createAsyncThunk(
  'goals/gelAllGoals',
  async () => {
    try {
      
      return await goalService.getAllGoals()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return message
    }
  }
)






// Delete user goal
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals.push(action.payload)
        state.message = action.payload
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(programarea.pending, (state) => {
        state.isLoading = true
      })
      .addCase(programarea.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        //Array.from(state.goals).replace(action.payload)
       // state.goals.concat(action.payload)
        state.message = action.payload
      })
      .addCase(programarea.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(getGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(SinglePage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(SinglePage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
         state.goals= action.payload 
      })
      .addCase(SinglePage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    


      .addCase(getAllGoals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllGoals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
         state.goals= action.payload 
      })
      .addCase(getAllGoals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
