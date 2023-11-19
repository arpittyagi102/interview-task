import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const users = useSelector(state => state.authReducer);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const userexists = users.some(item => item.email === email && item.password === password);
    if(userexists){
        alert("Successfully logged in");
    }
    else{
        alert("Wrong email or password")
    }
  };

  return (
    <div className=' w-80'>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
