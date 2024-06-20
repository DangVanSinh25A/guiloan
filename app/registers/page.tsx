"use client";
import React,{ useState, ChangeEvent, FormEvent  } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Container, Row, Col, Card, CardBody, CardImg, Input, FormGroup, Label } from 'reactstrap';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        subscribe: false
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
    
        axios.post('http://localhost:5267/api/sign-in', formData)
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
      <Card className='text-black m-5' style={{borderRadius: '25px'}}>
        <CardBody>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <i className="fas fa-user me-3" style={{fontSize: '1.5rem'}}></i>
                <Input type='text' placeholder='Your Name' className='w-100' value={formData.name} onChange={handleChange}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope me-3" style={{fontSize: '1.5rem'}}></i>
                <Input type='email' placeholder='Your Email' value={formData.name} onChange={handleChange}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock me-3" style={{fontSize: '1.5rem'}}></i>
                <Input type='password' placeholder='Password' value={formData.name} onChange={handleChange}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key me-3" style={{fontSize: '1.5rem'}}></i>
                <Input type='password' placeholder='Repeat your password' value={formData.name} onChange={handleChange}/>
              </div>

              <FormGroup check className='mb-4'>
                <Label check>
                  <Input type='checkbox' id='flexCheckDefault' />
                  Subscribe to our newsletter
                </Label>
              </FormGroup>

              <Button className='mb-4' size='lg'>Register</Button>

            </Col>

            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <CardImg src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </Col>

          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;