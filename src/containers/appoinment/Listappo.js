import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

function Listappo(props) {
    const history = useHistory();
    const [data, setData] = useState([]);

    const gData = () => {
        let localData = JSON.parse(localStorage.getItem("book-apt"));

        if (localData !== null) {
            setData(localData);
        }
    }

    useEffect(() => {
        gData();
    }, []);

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("book-apt"));

        let fData = localData.filter((f) => f.id !== id);

        localStorage.setItem("book-apt", JSON.stringify(fData));

        console.log(fData, localData);
        gData();
    }

    const redirectB_app = (id) => {
        history.push("/Book_apt",{id : id});
    }

    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>List an Appointment</h2>
                            <div className='row'>
                                <div className='col-6'>
                                    <NavLink exact to={"/Book_apt"} >Book An Appointment</NavLink>
                                </div>
                                <div className='col-6'>
                                    <NavLink exact to={"/list_apt"} >List An Appointment</NavLink>
                                </div>
                            </div>
                        </div>
                        {
                            data.map((d, i) => {
                                return (
                                    <div>
                                        <Card key={i}>
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {d.name}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {d.email}
                                                </CardSubtitle>
                                                <CardText>
                                                    {d.phone}
                                                </CardText>
                                                <Button onClick={() => redirectB_app(d.id)}>Edit</Button>
                                                <Button onClick={() => handleDelete(d.id)}>Delete</Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </div >
    );
}

export default Listappo;