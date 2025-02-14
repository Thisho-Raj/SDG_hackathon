'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function SignupForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="text-white text-lg font-semibold">Website Name</div>
                    <nav>
                        <a className="text-gray-400 hover:text-white" href="#">Home</a>
                    </nav>
                </div>
                <h1 className="text-white text-3xl font-bold mb-4">Create New Account</h1>
                <p className="text-gray-400 mb-6">Already a member? <a className="text-blue-500" href="#">Log In</a></p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            <FaUser className="absolute right-3 top-3 text-gray-400" />
                        </div>
                        <div className="relative">
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            <FaUser className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <div className="relative mb-6">
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        <FaLock className="absolute right-3 top-3 text-gray-400" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Create Account</button>
                </form>
            </div>
        </div>
    );
}
