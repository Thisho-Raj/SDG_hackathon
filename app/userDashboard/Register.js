'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '@fontsource/inter';

export default function SignupForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        if (name === 'password') {
            setPasswordStrength(getPasswordStrength(value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const getPasswordStrength = (password) => {
        if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            return 'Strong';
        } else if (password.length > 5) {
            return 'Medium';
        } else {
            return 'Weak';
        }
    };

    return (
        <div className="bg-gray-950 min-h-screen flex items-center justify-center p-4 font-inter" style={{ backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/989/591/804/dark-forest-wallpaper-cbf6bcedc361bf191514ab59bd5c0c20.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <motion.div 
                className="bg-transparent p-12 rounded-2xl shadow-xl max-w-lg w-full backdrop-blur-md border border-gray-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="text-white text-lg font-semibold">Anywhere App</div>
                    <nav>
                        <a className="text-gray-400 hover:text-white" href="#">Home</a>
                    </nav>
                </div>
                <h1 className="text-white text-4xl font-extrabold mb-4">Create New Account</h1>
                <p className="text-gray-400 mb-6 text-sm">Already a member? <a className="text-blue-400 hover:text-blue-300" href="#">Log In</a></p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                            <label className="absolute left-3 top-1 text-gray-400 text-xs">First Name</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 pt-6 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            <FaUser className="absolute right-3 top-3 text-gray-500" />
                        </div>
                        <div className="relative">
                            <label className="absolute left-3 top-1 text-gray-400 text-xs">Last Name</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 pt-6 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            <FaUser className="absolute right-3 top-3 text-gray-500" />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <label className="absolute left-3 top-1 text-gray-400 text-xs">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 pt-6 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <FaEnvelope className="absolute right-3 top-3 text-gray-500" />
                    </div>
                    <div className="relative mb-4">
                        <label className="absolute left-3 top-1 text-gray-400 text-xs">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-3 pt-6 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <FaLock className="absolute right-3 top-3 text-gray-500" />
                    </div>
                    <p className={`text-sm font-semibold mb-4 ${passwordStrength === 'Strong' ? 'text-green-400' : passwordStrength === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                        {passwordStrength && `Password Strength: ${passwordStrength}`}
                    </p>
                    <motion.button 
                        type="submit" 
                        className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 font-bold text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Create Account
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
