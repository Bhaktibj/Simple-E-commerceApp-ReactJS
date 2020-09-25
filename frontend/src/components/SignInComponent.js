import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { Form, Input, Row, Col, Card,Button,CardBody, Container, FormGroup } from 'reactstrap';

const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
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
        dispatch(signin(email, password));

    }
    return (
        <Container>
            <Row className="align-items-center">
            <Col sm={{ size: 5, offset: 4}} className="mt-5">
                    <Card>
                        <CardBody>
                            <Form onSubmit={submitHandler} >
                                <Row>
                                    <h4>Sign-In</h4>
                                </Row>
                                {loading && <div>Loading...</div>}
                                {error && <div>{error}</div>}
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
                                <Button type="submit" className="button primary">Login</Button>
                                     <p> </p> Create New Account <Link to="/register">Register</Link>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default SigninScreen; 