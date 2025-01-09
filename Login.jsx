import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input value={password}
            onChange={(e) => setPassword(e.target.value)}required aria-label="Password"
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-3 mt-5 placeholder:text-gray-400"type="password"
            placeholder="Enter Password"/>
          <button type="submit" className="text-white border-none outline-none border-2 bg-emerald-600 text-xl rounded-full py-3 px-3 mt-12 placeholder:text-white">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
