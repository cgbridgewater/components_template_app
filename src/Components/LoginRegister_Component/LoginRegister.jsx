import React from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  return (
    <main>
        <div className="form_wrapper">
            <div className="form_box login">
                <form action="">
                    <h1>Login</h1>

                    <div className="input_box"> 
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>

                    <div className="input_box"> 
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember_forgot">
                        <label htmlFor="">
                            <input type="checkbox" />Remember Me
                        </label>
                        <a  href="#"><span className="form_link">Forgot Password</span></a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register_link">
                        <p>
                            Don't have an account? <a href="#"><span className="form_link">Register Here</span></a>
                        </p>
                    </div>
                </form>
            </div>


            <div className="form_box register">
                <form action="">
                    <h1>Register</h1>

                    <div className="input_box"> 
                        <input type="text" placeholder="Username" required />
                        <FaUser className="icon" />
                    </div>

                    <div className="input_box"> 
                        <input type="email" placeholder="Email" required />
                        <FaEnvelope className="icon" />
                    </div>

                    <div className="input_box"> 
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="input_box"> 
                        <input type="password" placeholder="Confirm Password" required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember_forgot">
                        <label htmlFor="">
                            <input type="checkbox" />I agree to the&nbsp;<br className="label_break" />
                            <a href="#"><span className="form_link">Terms & Conditions</span></a>
                        </label>
                    </div>

                    <button type="submit">Register</button>

                    <div className="register_link">
                        <p>
                            Already have an account? <a href="#"><span className="form_link">Login</span></a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default LoginRegister