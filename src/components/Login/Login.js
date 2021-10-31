import React, { useState } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const Login = () => {
    const { googleSignIn, emailAndPasswordLogIn, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
    const location = useLocation();
    const history = useHistory()

    // get users input fild value
        const handleEmail = (e) => {
            setEmail(e.target.value);
        };
    
        const handlePassword = (e) => {
            setPassword(e.target.value);
        };
    //------------------------

    const handleLogIn = (e) => {
        e.preventDefault();
        if(password.length < 6){
            setUserError('Password should be at least 6 characters')
            return;
        }
        emailAndPasswordLogIn(email, password)
        setUserError("")
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
                        <h2>LogIn</h2>
                        <form onSubmit={handleLogIn}>
                            <div className="form-floating mb-3 mt-4">
                                <input onBlur={handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onBlur={handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="register_footer d-flex">
                                <p>Create a New Account</p>
                                <Link to="/register">Go to Register</Link>
                            </div>
                            <p className="text-danger">{error || userError}</p>
                            {/* <button className="btn btn-primary">LogIn</button> */}
                            <input className="btn btn-primary" type="submit" value="LogIn" />
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

export default Login;
