import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const LoginRegister = () => {
  return (
    <main>
        <div className="form_wrapper">
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>

                    <div className="input_box"> 
                        <input type="text" required />
                        <FaUser className="icon" />
                    </div>

                    <div className="input_box"> 
                        <input type="password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label htmlFor="">
                            <input type="checkbox" />Remember Me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>
                            Don't have an account? <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default LoginRegister