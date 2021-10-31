import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { googleSignIn, emailAndPasswordSignUp, error, updateUserName} = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
    const location = useLocation();
    const history = useHistory()

    // get users input fild value
        const handleName = e => {
            setName(e.target.value);
        }
    
        const handleEmail = e => {
            setEmail(e.target.value);
        };
    
        const handlePassword = (e) => {
            setPassword(e.target.value);
        };
    //------------------------

    const handleRagistration = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setUserError('Password should be at least 6 characters')
            return;
        }
        emailAndPasswordSignUp(email, password);
        updateUserName(name);
        setUserError("");
    }

        // rediract location manage
        const handleGoogleSignIn = () => {
            googleSignIn()
            .then(() => {
                history.push(location.state?.from || '/home')

            }).catch((error) => {
                console.log(error.message)

            });
        }

    return (
        <div className="container form_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto form_wrapper">
                    <div className=" text-center">
                        <h2>Register</h2>
                        <form onSubmit={handleRagistration}>
                            <div className="form-floating mb-3 mt-4">
                                <input onBlur={handleName} type="text" className="form-control" id="floatingInput" required placeholder=" "/>
                                <label htmlFor="floatingInput">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handleEmail} type="email" className="form-control" id="floatingPassword" required placeholder=" "/>
                                <label htmlFor="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" required placeholder=" "/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder=" "/>
                                <label htmlFor="floatingPassword">Re-Password</label>
                            </div>
                            <div className="register_footer d-flex">
                                <p>If already have an account?</p>
                                <Link to="/logIn">Go to Login</Link>
                            </div>
                            <p className="text-danger">{error || userError}</p>
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </form>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary text-start">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;