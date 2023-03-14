"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const API_URL = '/api/users/';
const API_URL_ME = '/api/users/';
//see proxy in package
// Register user
const register = async (userData) => {
    const response = await axios_1.default.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
// Get Info
const login = async (userData) => {
    const response = await axios_1.default.post(API_URL + 'login', userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
const modifica = async (userData) => {
    const response = await axios_1.default.put(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
// Logout user
const logout = () => {
    localStorage.removeItem('user');
};
const authService = {
    register,
    logout,
    login,
    modifica,
};
exports.default = authService;
//# sourceMappingURL=authService.js.map