import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

function Auth(props) {
    const [usertype, setUsertype] = useState("Login");
    const [reset, setReset] = useState("false");

    let schema = yup.object().shape({
        email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
        password: yup.string().required("Please Enter Password."),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit } = formik;

    return (
        <div class="text-center">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === "true" ?
                                <h2>Forgot Password</h2>
                                :
                                usertype === "Login" ?
                                    <h2>Login</h2>
                                    :
                                    <h2>Sign Up</h2>
                        }
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                {
                                    reset === "true" ?
                                        null
                                        :
                                        usertype === "Login" ?
                                            null
                                            :
                                            <div className="col-md-4 form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            </div>
                                }
                            </div>
                            <div className='row'>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} />
                                    <p>{errors.email}</p>
                                </div>
                            </div>
                            {
                                reset === "true" ?
                                    null
                                    :
                                    <div className='row'>
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a password" onChange={handleChange} />
                                            <p>{errors.password}</p>
                                        </div>
                                    </div>
                            }
                            {
                                reset === "true" ?
                                    <div class="text-center"><button type="submit">Submit</button></div>
                                    :
                                    usertype === "Login" ?
                                        <div class="text-center"><button type="submit">Login</button></div>
                                        :
                                        <div class="text-center"><button type="submit">Signup</button></div>
                            }
                            {
                                usertype === "Login" ?
                                    <p>create an account ?<button onClick={() => { setReset("false"); setUsertype("Signup") }}>Signup</button></p>
                                    :
                                    <p>allready account ?<button onClick={() => { setReset("false"); setUsertype("Login") }}>Login</button></p>
                            }
                            <button onClick={() => setReset("true")}>Forgot Your Password ?</button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>
    );
}

export default Auth;