const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Register a new user
const registerUser = async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;

    // Validate input
    if (!username || !password || !email || !firstName || !lastName) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
        username,
        password: hashedPassword,
        email,
        firstName,
        lastName,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
};

// Login a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return success message
    res.json({ message: 'Login successful' });
};

module.exports = {
    registerUser,
    loginUser,
};
