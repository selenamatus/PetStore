// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', { email, password, username, firstName, lastName });
            setMessage('Registration successful');
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setMessage('Registration failed: ' + err.response.data.message);
            } else {
                setMessage('Registration failed');
            }
        }
    };

    return (
        <div className="auth-form">
            <h2>הרשמה</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>דואר אלקטרוני</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>סיסמא</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>שם משתמש</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>שם פרטי</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>שם משפחה</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <button type="submit">הרשמה</button>
            </form>
            {message && <p>{message}</p>}
            <p onClick={() => navigate('/login')}>כבר רשומים? התחברות</p>
        </div>
    );
};

export default Register;
