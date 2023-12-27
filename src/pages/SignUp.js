import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Input, Label, FormGroup, Form, Button } from 'reactstrap';
import { CiUser } from 'react-icons/ci';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { signUp } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';




function SignUp() {
  
    const myState = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const [registerUserName, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

   // SignUp.js
// SignUp.js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    dispatch(signUp(registerUserName, registerPassword));
    alert(myState)
  } catch (error) {
    alert('User registration failed. Please try again.');
  }
};



    
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
        <div className='background-image min-vh-100 py-5 px-0'>
          <Container data-aos='fade-down' data-aos-offset='200' data-aos-delay='200' className='pt-5 col-sm-12 col-md-6 col-lg-6 col-xl-4'>
            <Row>
              <Col>
                <Container className='py-2'>
                  <Card className='bg-white rounded-4'>
                    <CardBody>
                      <Form onSubmit={handleSubmit}>
                        <Col>
                          <Row className='text-center pb-3 '>
                            <h1 className='fw-light '>Welcome</h1>
                          </Row>
                          <Row className='px-4 '>
                            <Row className='m-0 p-2 d-flex justify-content-center align-items-center'>
                              <FormGroup className='p-0 m-0'>
                                <Label className='text-black font'>Register Username</Label>
                                <Row>
                                  <Col className='d-flex justify-content-center align-items-center border-black  border-bottom mx-1 '>
                                    <CiUser size={25} />
                                    <Input
                                      id='custom-input'
                                      required
                                      className='border-0 rounded-0 py-2'
                                      type='email'
                                      placeholder='Enter the Username...'
                                      value={registerUserName}
                                      onChange={(e) => setRegisterUserName(e.target.value)}
                                    />
                                  </Col>
                                </Row>
                              </FormGroup>
                            </Row>
    
                            <Row className='my-2 mx-0 p-2 d-flex justify-content-center align-items-center'>
                              <FormGroup className='p-0 m-0'>
                                <Label className='text-black font'>Register Password</Label>
                                <Row>
                                  <Col className='d-flex justify-content-center align-items-center border-black  border-bottom mx-1  '>
                                    <RiLockPasswordFill size={25} />
                                    <Input
                                      id='custom-input'
                                      required
                                      className='border-0 rounded-0 py-2'
                                      type={showPassword ? 'text' : 'password'}
                                      placeholder='Enter the Password...'
                                      value={registerPassword}
                                      onChange={(e) => setRegisterPassword(e.target.value)}
                                    />
                                    <Button
                                      type='button'
                                      className='btn bg-white border-0  text-black  p-0 ml-2'
                                      onClick={togglePasswordVisibility}
                                    >
                                      {showPassword ? <IoIosEye size={20}/> : <IoIosEyeOff size={20}/>}
                                    </Button>
                                  </Col>
                                </Row>
                              </FormGroup>
                            </Row>
    
                            <Row className='my-2 mx-0 p-2 d-flex justify-content-center align-items-center'>
                              <FormGroup className='p-0 m-0'>
                                <Row>
                                  <Col className='d-flex justify-content-center align-items-center mx-1  '>
                                    <Button type='submit' className='fw-bold border-primary  w-100 bg-primary btn'>
                                      SignUp
                                    </Button>
                                    
                                  </Col>
                                </Row>
                                <Row className='px-2 m-0 my-2  w-100 '>
                                   <Col className='p-0 m-0 text-primary text-decoration-underline  w-100 '><Link to='/'>Already Registered? Login!</Link></Col>
                                </Row>
                              </FormGroup>
                            </Row>
                          </Row>
                        </Col>
                      </Form>
                    </CardBody>
                  </Card>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    
    export default SignUp;