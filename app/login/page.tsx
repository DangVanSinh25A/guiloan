"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Container, Row, Col, Card, CardBody, CardImg, Input, FormGroup, Label, Form } from 'reactstrap';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        subscribe: true
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post('/api/sign-in', formData)
            .then(response => {
                // Handle success response  
                console.log(response.data);
            })
            .catch(error => {
                // Handle error response
                console.error(error);
            });
    };

    return (
        <Container fluid>
            <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
                <CardBody>
                    <Row>
                        <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                            <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope me-3" style={{ fontSize: '1.5rem' }}></i>
                                    <Input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock me-3" style={{ fontSize: '1.5rem' }}></i>
                                    <Input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                                </div>

                                <FormGroup check className='mb-4'>
                                    <Label check>
                                        <Input type='checkbox' name='subscribe' id='flexCheckDefault' checked={formData.subscribe} onChange={handleChange} />
                                        Subscribe to our newsletter
                                    </Label>
                                </FormGroup>

                                <Button type="submit" className='mb-4' size='lg'>Login</Button>
                            </Form>
                        </Col>

                        <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <CardImg src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </Col>

                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default App;
