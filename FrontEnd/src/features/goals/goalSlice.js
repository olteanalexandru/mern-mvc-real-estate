"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.goalSlice = exports.deleteGoal = exports.getAllGoals = exports.SinglePage = exports.getGoals = exports.programarea = exports.createGoal = void 0;
// @ts-nocheck
const toolkit_1 = require("@reduxjs/toolkit");
const goalService_1 = __importDefault(require("./goalService"));
const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};
// Create new goal
exports.createGoal = (0, toolkit_1.createAsyncThunk)('goals/create', async (goalData, thunkAPI) => {
    try {
        const newLocal = thunkAPI.getState();
        const token = newLocal.auth.user.token;
        return await goalService_1.default.createGoal(goalData, token);
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
// Create programare
exports.programarea = (0, toolkit_1.createAsyncThunk)('goals/programarea', async (id, goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await goalService_1.default.programarea(id, goalData, token);
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return message;
    }
});
// Get user goals
exports.getGoals = (0, toolkit_1.createAsyncThunk)('goals/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await goalService_1.default.getGoals(token);
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
//Single goal page
exports.SinglePage = (0, toolkit_1.createAsyncThunk)('goals/SinglePage', async (id) => {
    try {
        return await goalService_1.default.SinglePage(id);
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return message;
    }
});
//get all goals
exports.getAllGoals = (0, toolkit_1.createAsyncThunk)('goals/gelAllGoals', async () => {
    try {
        return await goalService_1.default.getAllGoals();
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return message;
    }
});
// Delete user goal
exports.deleteGoal = (0, toolkit_1.createAsyncThunk)('goals/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await goalService_1.default.deleteGoal(id, token);
    }
    catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
exports.goalSlice = (0, toolkit_1.createSlice)({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.createGoal.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.createGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals.push(action.payload);
            state.message = action.payload;
        })
            .addCase(exports.createGoal.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.programarea.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.programarea.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            //Array.from(state.goals).replace(action.payload)
            // state.goals.concat(action.payload)
            state.message = action.payload;
        })
            .addCase(exports.programarea.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.getGoals.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.getGoals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
        })
            .addCase(exports.getGoals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.SinglePage.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.SinglePage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
        })
            .addCase(exports.SinglePage.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.getAllGoals.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.getAllGoals.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = action.payload;
        })
            .addCase(exports.getAllGoals.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.deleteGoal.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.deleteGoal.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.goals = state.goals.filter((goal) => goal._id !== action.payload.id);
        })
            .addCase(exports.deleteGoal.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    },
});
exports.reset = exports.goalSlice.actions.reset;
exports.default = exports.goalSlice.reducer;
//# sourceMappingURL=goalSlice.js.map