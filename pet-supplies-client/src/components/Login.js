import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            setMessage('Login successful');
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data && err.response.data.message) {
                setMessage('Login failed: ' + err.response.data.message);
            } else {
                setMessage('Login failed');
            }
        }
    };

    return (
        <div className="auth-form">
            <h2>התחברות</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>דואר אלקטרוני</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>סיסמא</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">התחברות</button>
            </form>
            {message && <p>{message}</p>}
            <p onClick={() => navigate('/register')}>חדשים באתר? להרשמה</p>
        </div>
    );
};

export default Login;
