import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
//auth user and get token
//fetching all products
//route: /api/users/login
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});
//get user profile
//api/users/profile
//private access
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('User not found');
	}
});

//register new user
//fetching all products
//route: /api/users/login
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}
	const user = await User.create({ name, email, password });
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			password: user.password,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

export { authUser, getUserProfile, registerUser };
