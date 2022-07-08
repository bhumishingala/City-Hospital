import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';

function Appointment(props) {
    const [update, setUpdate] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("book-apt"));

        if(props.location.state && localData !== null){
            let fData = localData.filter((l) => l.id === props.location.state.id);

        console.log(fData[0]);
        formik.setValues(fData[0]);
        setUpdate(true); 
        }
    }, []);

    const  handleUpdateData = (values) => {
        let localData = JSON.parse(localStorage.getItem("book-apt"));

        let uData = localData.map((d) => {
            if(d.id === values.id){
                return values;
            }else{
                return d;
            }
        })
        // localStorage.setItem("book-apt",JSON.stringify(uData));
        // console.log(values,localData,uData);

        // history.push("/list_apt");
        // formik.resetForm();
        // history.replace();
        // setUpdate(false);
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        email: yup.string().email("Please Enter Vaild Email Id.").required("Please Enter Email Id."),
        phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter a valid phone number').min(10, "too short").required('Phone number is required'),
        date: yup.string().required("Please Enter Any Date."),
        department: yup.string().required("Please Select Any Department."),
        message: yup.string().required("Please enter Message."),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdateData(values);
            }else{
                handleInsert(values);
                history.push("/list_apt");
            }
        },
    });

    const { handleChange, errors, handleSubmit, touched, handleBlur, values } = formik;

    const handleInsert = (values) => {
        let localData = JSON.parse(localStorage.getItem("book-apt"));

        let id = Math.floor(Math.random() * 10000);
        let data = {
            id: id,
            ...values
        }

        if (localData === null) {
            localStorage.setItem("book-apt", JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem("book-apt", JSON.stringify(localData));
        }

        console.log([data]);
    }

    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Book an Appointment</h2>
                        </div>
                        <div className='row text-center mb-4'>
                            <div className='col-6'>
                                <NavLink exact to={"/Book_apt"}>Book an Appointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink exact to={"/list_apt"}>List an Appointment</NavLink>
                            </div>
                        </div>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text"
                                            value={values.name}
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email"
                                            value={values.email}
                                            className="form-control"
                                            // name="text"
                                            id="email"
                                            placeholder="Your Email"
                                            data-rule="email"
                                            data-msg="Please enter a valid email"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            value={values.phone}
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            value={values.date}
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="DD-MM-YY"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <p className='text-danger'>{errors.date && touched.date ? errors.date : ''}</p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department"
                                            id="department"
                                            value={values.department}
                                            className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <p className='text-danger'>{errors.department && touched.department ? errors.department : ''}</p>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control"
                                        name="message"
                                        value={values.message}
                                        rows={5} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Message (Optional)"
                                        defaultValue={""} />
                                    {errors.message && touched.message ? <p className='text-danger'>{errors.message}</p> : ''}
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    {
                                        update ?
                                            <button type="submit">update an Appointment</button>
                                            :
                                            <button type="submit">Make an Appointment</button>
                                    }
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Appointment;