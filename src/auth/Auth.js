import React, { useState } from 'react';

function Auth(props) {
    const [usertype, setUsertype] = useState("Login");
    const [reset, setReset] = useState('false');

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset === 'true' ?
                            <h2>Forgot Password</h2>
                            :
                            usertype === "Login" ?
                                <h2>Login</h2>
                                :
                                <h2>Sign Up</h2>
                    }
                </div>
                <div className="php-email-form">
                    <div className="row">
                        {
                            reset === 'true' ?
                                <div className='row'>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate" />
                                    </div>
                                </div>
                                :
                                usertype === "Login" ?
                                    null
                                    :
                                    <div className="col-md-4 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                        }
                    </div>
                    <div className='row'>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a password" />
                            <div className="validate" />
                        </div>
                    </div>
                    {
                        reset === 'true' ?
                            <div class="text-center"><button type="submit">Submit</button></div>
                            :
                            usertype === "Login" ?
                                <div class="text-center"><button type="submit">Login</button></div>
                                :
                                <div class="text-center"><button type="submit">Signup</button></div>
                    }
                    {
                        reset === 'true' ?
                            <a onClick={() => reset('false')}>Forgot Your Password ?</a>
                            :
                            usertype === "Login" ?
                                // <>
                                <p>create an account ?<button onClick={() => setUsertype("Signup")}>Signup</button></p>
                                // </>
                                :
                                // <>
                                <p>allready account ?<button onClick={() => setUsertype("Login")}>Login</button></p>
                        // </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Auth;