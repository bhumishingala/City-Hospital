import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

function Auth(props) {
    const [usertype, setUsertype] = useState("Login");
    const [reset, setReset] = useState("false");

    let schemaObj , initval;

    if(usertype === "Login") {
        schemaObj = {
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password."),
        }
        initval = {
            email: '',
            password: ''
        }
    }else if(usertype === "Signup") {
        schemaObj = {
            name : yup.string().required("Please enter Name."),
            email: yup.string().required("Please Enter Email Id.").email("Please Enter Vaild email Id."),
            password: yup.string().required("Please Enter Password."),
        }
        initval = {
            name :'',
            email: '',
            password: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const formik = useFormik({
        initialValues: initval,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit , handleBlur , touched} = formik;

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
                                            onChange={handleChange} onBlur={handleBlur}/>
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                        </div>  
                        <div className='row'>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur}/>
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                        </div>
                        {
                            reset === "true" ?
                                null
                                :
                                <div className='row'>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password"  onChange={handleChange} onBlur={handleBlur}/>
                                        <p>{errors.password && touched.password ? errors.password : ''}</p>
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
    );
}

export default Auth;