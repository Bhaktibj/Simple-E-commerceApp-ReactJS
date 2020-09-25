import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import GoogleLogin from 'react-google-login';

import { Container, Row, Form, 
    Col,Button, Card, CardBody,
     FormGroup, Label, Input, FormFeedback, InputGroup } from 'reactstrap';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));

    }
    return (
    <Container>
            <Row className="align-items-center">
                <Col sm={{ size: 5, offset: 4}} className="mt-5">
                    <Card>
                        <CardBody>
                            <Form onSubmit={submitHandler}>
                                {loading && <div>Loading...</div>}
                                {error && <div>{error}</div>}
                                <FormGroup>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        required
                                        maxLength={"20"}
                                        placeholder="Enter user Name"
                                        onChange={(e) => setName(e.target.value)}>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Enter Email"
                                        onChange={(e) => setEmail(e.target.value)}>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" id="password"
                                     name="password"
                                     required 
                                     aria-required
                                     placeholder="Enter password"
                                     onChange={(e) => setPassword(e.target.value)}>
                                    </Input>
                                    </FormGroup>
                                    <FormGroup>
                                    <Input type="password" 
                                    id="rePassword" 
                                    name="rePassword"
                                    placeholder="Confirm Passowrd"
                                    onChange={(e) => setRePassword(e.target.value)}>
                                    </Input>
                                    </FormGroup>
                                    <Button type="submit" className="button primary">Register</Button>
                                     <p> </p> Already have an account? <Link to="/signin">Sign-in</Link>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default RegisterScreen;