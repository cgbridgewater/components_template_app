import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {

    // const navigate = useNavigate();  // Saving for later use with Axios call

    //                               //
    // MODAL OPEN AND CLOSE CONTROLS //
    //                               //
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    // functions to change between open/close
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleModal2 = () => {
        setIsOpen2(!isOpen2);
    };
    // function to close modals
    const closeOnOutsideClick = (e) => {
        if (e.target.classList.contains('modal_overlay')) {
        setIsOpen(false);
        setIsOpen2(false);
        }
    };
    //                                   //
    // END MODAL OPEN AND CLOSE CONTROLS //
    //                                   //

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

    // FRONT END EMAIL VALIDATION //
    const isValidRegisterEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(registrationForm.email);
    const isValidSigninEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginForm.email);
    // END FRONT END EMAIL VALIDATION //

    

    return (
        <main>
            {/* FORM CONTENT */}
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
                                {/* <a  href="#"><span className="form_link">Forgot Password</span></a> */}
                                <span className="form_link" onClick={toggleModal2}>Forgot Password?</span>
                            </div>
                            {/* SUBMIT BUTTON */}
                            <button type="submit" disabled={!isValidSigninEmail || loginForm.password.length < 8}><span>Login</span></button>
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
                                    {/* <span className="form_link">Terms & Conditions</span> */}
                                </label>
                                <span className="form_link" onClick={toggleModal}>Terms & Conditions</span>
                            </div>
                            {/* SUBMIT BBUTTON */}
                            <button type="submit" disabled={!agree || !isValidRegisterEmail || registrationForm.password.length < 8 || registrationForm.confirmPassword !== registrationForm.password}><span>Sign Up</span></button>
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
            {/* END FORM CONTENT */}
            {/* T&C's MODAL CONTENT */}
            <div className="modal_container">
                {isOpen2 && (
                <div className="modal_overlay" onClick={closeOnOutsideClick}>
                    <div className="modal_content">
                        {/* MODAL HEADER */}
                        <h3>Password Reset</h3>
                        {/* END MODAL HEADER */}
                        {/* MODAL TEXT */}
                        <p>
                            So you forgot your password, huh...?
                        </p>
                        <p>
                            You should've written it down somewhere safe.
                        </p>
                        
                        {/* END MODAL TEXT */}
                        {/* CLOSE MODAL BUTTON */}
                        <button className="close_button" onClick={toggleModal2}><span>Close</span></button>
                        {/* END CLOSE MODAL BUTTON */}
                    </div>
                </div>
                )}
            </div>
            {/* T&C's END MODAL CONTENT */}



            {/* T&C's MODAL CONTENT */}
            <div className="modal_container">
                {isOpen && (
                <div className="modal_overlay" onClick={closeOnOutsideClick}>
                    <div className="modal_content">
                        {/* MODAL HEADER */}
                        <h3>Terms & Conditions</h3>
                        {/* END MODAL HEADER */}
                        {/* MODAL TEXT */}
                        <p>
                            Please read these terms and conditions carefully before using our service. By accessing or using our service, you agree to be bound by these terms.         
                        </p>
                        <p>
                            <b>1. Acceptance of Terms</b>
                            <br />
                            By using our service, you agree to comply with and be legally bound by these terms and conditions. 
                        </p>
                        <p>
                            <b>2. Modification of Terms</b>
                            <br />
                            We reserve the right to modify these terms at any time. Your continued use of the service after any changes constitutes acceptance of the new terms.                                              
                        </p>
                        <p>
                            <b>3. User Responsibilities</b> 
                            <br />
                            You agree to use the service only for lawful purposes and in a manner that does not infringe on the rights of others.                             
                        </p>
                        <p>
                            <b>4. Limitation of Liability</b>
                            <br />
                            Our liability is limited to the fullest extent permitted by law. We are not liable for any direct, indirect, incidental, or consequential our service.                                        
                        </p>
                        <p>
                                                                                
                            <b>5. Governing Law</b>
                            <br />
                            These terms shall be governed by the laws of [Your State/Country].
                        </p>
                        <p>
                            By clicking <b>"Accept"</b>, you agree to these terms. 
                        </p>
                        {/* END MODAL TEXT */}
                        {/* CLOSE MODAL BUTTON */}
                        <button className="close_button" onClick={toggleModal}><span>Close</span></button>
                        {/* END CLOSE MODAL BUTTON */}
                    </div>
                </div>
                )}
            </div>
            {/* T&C's END MODAL CONTENT */}
        </main>
    )
}

export default LoginRegister