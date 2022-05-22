"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
//Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '120m',
});
//@desc register new users
//@route POST /api/users
//@acces Public
const registerUser = asyncHandler(async (req, res) => {
    const { rol, name, email, password } = req.body;
    if (!rol || !name || !email || !password) {
        res.status(400);
        throw new Error('Toate campurile trebuie completate gu');
    }
    //check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('Userul exista deja!');
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create user
    const user = await User.create({
        rol,
        name,
        email,
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({
            message: 'User Registered',
            rol: user.rol,
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }
});
//@desc auth users
//@route POST /api/users/login
//@acces Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check for user email
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            rol: user.rol,
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid data');
    }
});
//@desc get  users data
//@route GET /api/users/me
//@acces Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});
//@desc modificare date
//@route PUT /api/users
//@acces Private
const PutUser = asyncHandler(async (req, res) => {
    const user = await User;
    const { password } = req.body;
    if (!password) {
        res.status(400);
        throw new Error('Lipsa parola');
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await user.update({
        password: hashedPassword
    });
    if (user) {
        res.status(201).json({
            message: 'User Updated'
        });
    }
});
module.exports = {
    registerUser,
    loginUser,
    getMe,
    PutUser,
};
