import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {

    const [action, setAction] = useState("");
    const [regname, setRegname] = useState("");
    const [regemail, setRegemail] = useState("");
    const [regpass, setRegpass] = useState("");
    const [signinname, setSigninname] = useState("");
    const [signinpass, setSigninpass] = useState("");

    const register_link = (e) => {
        e.preventDefault();
        setAction(" active")
    }

    const login_link = (e) => {
        e.preventDefault();
        setAction("")
    }


    return (
        <main>
            <div className='wrapper'>
                {/* LOGIN REG WRAPPER*/}
                <div className={`form_wrapper${action}`}>
                    {/* LOGIN FORM */}
                    <div className="form_box login">
                        <form action="">
                            {/* HEADER */}
                            <h1>Login</h1>
                            {/* USERNAME INPUT */}
                            <div className="input_box"> 
                                <input type="text" placeholder="Username" required />
                                <FaUser className="icon" />
                            </div>
                            {/* PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input type="password" placeholder="Password" required />
                                <FaLock className="icon" />
                            </div>
                            {/* REMEMBER ME CHECK */}
                            <div className="remember_forgot">
                                <label htmlFor="remember_me">
                                    <input id="remember_me" type="checkbox" />Remember Me
                                </label>
                                <a  href="#"><span className="form_link">Forgot Password</span></a>
                            </div>
                            {/* SUBMIT BUTTON */}
                            <button type="submit"><span>Login</span></button>
                            {/* REGISTER LINK */}
                            <div className="register_link">
                                <p>
                                    Don't have an account?&nbsp;<a href="#" onClick={register_link}><span className="form_link">Sign Up Here</span></a>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* REGISTER FORM */}
                    <div className="form_box register">
                        <form action="">
                            {/* HEADER */}
                            <h1>Sign Up</h1>
                            {/* USERNAME INPUT */}
                            <div className="input_box"> 
                                <input type="text" placeholder="Username" required />
                                <FaUser className="icon" />
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="input_box"> 
                                <input type="email" placeholder="Email" required />
                                <FaEnvelope className="icon" />
                            </div>
                            {/* PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input type="password" placeholder="Password" required />
                                <FaLock className="icon" />
                            </div>
                            {/* CONFIRM PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input type="password" placeholder="Confirm Password" required />
                                <FaLock className="icon" />
                            </div>
                            {/* AGREE TO TERMS CHECKBOX */}
                            <div className="remember_forgot">
                                <label htmlFor="i_agree">
                                    <input id="i_agree" type="checkbox" />I agree to the&nbsp;
                                    <a href="#"><span className="form_link">Terms & Conditions</span></a>
                                </label>
                            </div>
                            {/* SUBMIT BBUTTON */}
                            <button type="submit"><span>Sign Up</span></button>
                            {/* SIGNUP LINK */}
                            <div className="register_link">
                                <p>
                                    Already have an account?&nbsp;<a href="#" onClick={login_link}><span className="form_link">Login</span></a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginRegister