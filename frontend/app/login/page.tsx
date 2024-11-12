'use client';

import { useState } from "react"
import { TextField } from "@mui/material"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {

    }

    return (
        <div className="flex justify-center items-center pt-10">
            <form onSubmit={handleLogin} className="flex flex-col w-80 gap-4 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-black">Login</h2>
            
            <TextField
                type="text"
                variant="outlined"
                color="primary"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                required
            />

            <TextField
                type="password"
                variant="outlined"
                color="primary"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
            />

            <button type="submit" className="p-2 mt-4 bg-gray-500 text-white rounded hover:bg-gray-600">
                Login
            </button>
            </form>
        </div>
    )
}

export default Login