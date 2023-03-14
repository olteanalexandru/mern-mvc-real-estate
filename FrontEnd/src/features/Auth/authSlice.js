"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.authSlice = exports.logout = exports.login = exports.modifica = exports.register = void 0;
// @ts-nocheck
const toolkit_1 = require("@reduxjs/toolkit");
const authService_1 = __importDefault(require("./authService"));
const newLocal = localStorage.getItem('user');
// Get user from localStorage
const user = JSON.parse(newLocal);
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};
// Register user
exports.register = (0, toolkit_1.createAsyncThunk)('auth/register', async (user, thunkAPI) => {
    try {
        return await authService_1.default.register(user);
    }
    catch (error) {
        const message = (error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
// Modifica parola
exports.modifica = (0, toolkit_1.createAsyncThunk)('auth/modifica', async (user, thunkAPI) => {
    try {
        return await authService_1.default.modifica(user);
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
// Login user
exports.login = (0, toolkit_1.createAsyncThunk)('auth/login', async (user, thunkAPI) => {
    try {
        return await authService_1.default.login(user);
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});
exports.logout = (0, toolkit_1.createAsyncThunk)('auth/logout', async () => {
    await authService_1.default.logout();
});
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(exports.register.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
            .addCase(exports.register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
            .addCase(exports.modifica.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.modifica.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
            .addCase(exports.modifica.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
            .addCase(exports.login.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(exports.login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
            .addCase(exports.login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
            .addCase(exports.logout.fulfilled, (state) => {
            state.user = null;
        });
    },
});
exports.reset = exports.authSlice.actions.reset;
exports.default = exports.authSlice.reducer;
//# sourceMappingURL=authSlice.js.map