import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

function Login(props) {
    const [usertype, setUsertype] = useState("Login");
    const [reset, setReset] = useState("false");

    let schemaObj, initval;

    if (usertype === "Login") {
        schemaObj = {
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password.")
        }
        initval = {
            email: '',
            password: ''
        }
    } else if (usertype === "Signup") {
        schemaObj = {
            name: yup.string().required("Please enter Name."),
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password.")
        }
        initval = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset == "true") {
        schemaObj = {
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id.")
        }
        initval = {
            email: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const insertData = (values) => {
        let LocalData = JSON.parse(localStorage.getItem("user"));

        if (LocalData === null) {
            localStorage.setItem("user", JSON.stringify([values]));
        } else {
            LocalData.push(values);
            localStorage.setItem("user", JSON.stringify(LocalData));
        }

        console.log(values);
    }

    const handleLogin = () => {
        localStorage.setItem("User", "123");
    }

    const formik = useFormik({
        initialValues: initval,
        validationSchema: schema,
        onSubmit: values => {
            if(usertype === "Login"){
                handleLogin();
            }else{
                insertData(values); 
            }
        },

        enableReinitialize: true
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formik;

    return (
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
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                                onChange={handleChange} onBlur={handleBlur} />
                                            <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                        </div>
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                        </div>
                        {
                            reset === "true" ?
                                null
                                :
                                <div className='row'>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                                </div>
                        }
                        {
                            reset === "true" ?
                                <div className="text-center"><button type="submit">Submit</button></div>
                                :
                                usertype === "Login" ?
                                    <div className="text-center"><button type="submit">Login</button></div>
                                    :
                                    <div className="text-center"><button type="submit">Sign UP</button></div>
                        }
                        {
                            usertype === "Login" ?
                                <p className='mt-4'>create an account ?<a class="sign-up" onClick={() => { setReset("false"); setUsertype("Signup") }}>Signup</a></p>
                                :
                                <p className='mt-4'>allready account ?<a class="sign-up" onClick={() => { setReset("false"); setUsertype("Login") }}>Login</a></p>
                        }
                        <a class='text-orange' onClick={() => setReset("true")}>Forgot Your Password ?</a>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}

export default Login;