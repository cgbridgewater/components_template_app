import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

    const navigate = useNavigate();

    //                                 //
    // REGISTRATION STATE AND HANDLING //
    //                                 //
    const [registrationForm, setRegistrationForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleRegistrationForm =(e) => {
        // props.setAuthorized(""); //use this to set auth via props
        setRegistrationForm({ ...registrationForm, [e.target.name]: e.target.value });
    }
    //                                     //
    // END REGISTRATION STATE AND HANDLING //
    //                                     //


    //                          //
    // LOGIN STATE AND HANDLING //
    //                          //
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    
    const handleLogin = (e) => {
        // props.setAuthorized(""); //use this to set auth via props
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }
    //                              //
    // END LOGIN STATE AND HANDLING //
    //                              //


    //                     //
    // FORM TOGGLE CONTROL //
    //                     //
    // FORM TOGGLE STATE
    const [action, setAction] = useState("");

    // AGREE TO T&C  STATE AND CHANGE HANDLER
    const [agree, setAgree] = useState(false);
    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    }

    //  REMEMBER ME STATE AND CHANGE HANDLER
    const [remember, setRemember] = useState(false);
    const handleRememberChange = (e) => {
        setRemember(e.target.checked);
    }

    // HANDLE REGISTER LINK CLICK
    const register_link = (e) => {
        e.preventDefault();
        setAction(" active");
        setLoginForm({
            email: "",
            password: ""
        });
        setAgree(false);
        setRemember(false);
    }

    // HANDLE LOGIN LINK CLICK
    const login_link = (e) => {
        e.preventDefault();
        setAction("");
        setRegistrationForm({
            email: "",
            password: "",
            confirmPassword: ""
        });
        setAgree(false);
        setRemember(false);
    }
    //                         //
    // END FORM TOGGLE CONTROL //
    //                         //


    return (
        <main>
            <div className='wrapper background'>
                {/* LOGIN REG WRAPPER*/}
                <div className={`form_wrapper${action}`}>
                    {/* LOGIN FORM */}
                    <div className="form_box login">
                        <form action="">
                            {/* HEADER */}
                            <h1>Login</h1>
                            {/* EMAIL INPUT */}
                            <div className="input_box"> 
                                <input 
                                    onChange={handleLogin}
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    value={loginForm.email}
                                    required 
                                />
                                <FaEnvelope className="icon" />
                            </div>
                            {/* PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input
                                    onChange={handleLogin}
                                    type="password" 
                                    name="password"
                                    placeholder="Password"
                                    value={loginForm.password}
                                    required 
                                />
                                <FaLock className="icon" />
                            </div>
                            {/* REMEMBER ME CHECK */}
                            <div className="remember_forgot">
                                <label htmlFor="remember_me">
                                    <input id="remember_me" type="checkbox" onChange={handleRememberChange} checked={remember} />Remember Me
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
                    {/* END LOGIN FORM */}
                    {/* REGISTER FORM */}
                    <div className="form_box register">
                        <form action="">
                            {/* HEADER */}
                            <h1>Sign Up</h1>
                            {/* EMAIL INPUT */}
                            <div className="input_box"> 
                                <input 
                                    onChange={handleRegistrationForm}
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    value={registrationForm.email}
                                    required 
                                />
                                <FaEnvelope className="icon" />
                            </div>
                            {/* PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input
                                    onChange={handleRegistrationForm}
                                    type="password" 
                                    name="password"
                                    placeholder="Password"
                                    value={registrationForm.password}
                                    required 
                                />
                                <FaLock className="icon" />
                            </div>
                            {/* CONFIRM PASSWORD INPUT */}
                            <div className="input_box"> 
                                <input 
                                    onChange={handleRegistrationForm}
                                    type="password" 
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={registrationForm.confirmPassword}
                                    required 
                                />
                                <FaLock className="icon" />
                            </div>
                            {/* AGREE TO TERMS CHECKBOX */}
                            <div className="remember_forgot">
                                <label htmlFor="i_agree">
                                    <input id="i_agree" type="checkbox" onChange={handleAgreeChange} checked={agree}/>I agree to the&nbsp;
                                    <a href="#"><span className="form_link">Terms & Conditions</span></a>
                                </label>
                            </div>
                            {/* SUBMIT BBUTTON */}
                            <button type="submit" disabled={!agree}><span>Sign Up</span></button>
                            {/* SIGNUP LINK */}
                            <div className="register_link">
                                <p>
                                    Already have an account?&nbsp;<a href="#" onClick={login_link}><span className="form_link">Login</span></a>
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* END REGISTER FORM */}
                </div>
            </div>
        </main>
    )
}

export default LoginRegister