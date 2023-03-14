"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_URL = '/api/goals/';
const API_URL_goals = '/api/goals/Goals/';
// Create new goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios_1.default.post(API_URL, goalData, config);
    return response.data;
};
// Get user goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios_1.default.get(API_URL, config);
    return response.data;
};
//get all goals
const SinglePage = async (goalId) => {
    const response = await axios_1.default.get(API_URL_goals + goalId);
    return response.data;
};
//get programare
const programarea = async (goalId, goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios_1.default.post(API_URL_goals + goalId, goalData, config);
    return response.data;
};
//get all goals
const getAllGoals = async () => {
    const response = await axios_1.default.get(API_URL_goals);
    return response.data;
};
// Delete user goal
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios_1.default.delete(API_URL + goalId, config);
    return response.data;
};
const goalService = {
    createGoal,
    getGoals,
    getAllGoals,
    deleteGoal,
    SinglePage,
    programarea
};
exports.default = goalService;
//# sourceMappingURL=goalService.js.map