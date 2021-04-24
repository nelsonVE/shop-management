import React, { useState } from 'react';
import {
  Alert,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import { useHistory } from 'react-router-dom'
import { loginUser, useAuthState, useAuthDispatch } from '../contexts'


const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch()
  const { errorMessage } = useAuthState()


  const handleChange = (e) => {
    if(e.target.name === 'username')
      setUsername(e.target.value)
    else if(e.target.name === 'password')
      setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {username, password}

    try{
      let response = await loginUser(dispatch, payload)

      if(response !== undefined && response.username)
        return history.push('/')

    } catch(error) {
      console.error(error)
    }
  }
  return (
    <Container className="mt-5 styled-box p-5 bg-white">
      <h2>Login</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          {errorMessage &&
          <Alert color="danger">
            {errorMessage}
          </Alert>}
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Col>
        
      </Form>
    </Container>
  );
}

export default Login;