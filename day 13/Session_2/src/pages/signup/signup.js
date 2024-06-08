
import { useState } from "react";
import "./signup.css";
import Navbar from "../common/Navbar/navbar";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleClick = async() => {
        if (!email && !password) {
            return;
        }
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log(data);
    }

    return (
        <div>
            <Navbar page="signup"/>
            <div className="signup-container">
                <h2>Signup</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={handleClick}>Signup</button>
            </div>
        </div>
    )
}

export default Signup;
