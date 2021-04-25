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
import axiosInstance from '../axiosAPI'
import { API_BASE_URL, EMPLOYEE_CREATE_API_URL, EMPLOYEE_LIST_URL } from '../constants'

const moment = require('moment');
const DatePicker = require("reactstrap-date-picker");


const EmployeeCreate = () => {
  const history = useHistory()
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [dni, setDNI] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [birth_at, setBirthAt] = useState('')
  const [started_at, setStartedAt] = useState('')
  const [error_message, setErrorMessage] = useState('')


  const handleChange = (e) => {
    switch(e.target.name){
        case 'first_name':
            setFirstName(e.target.value)
            break;
        case 'last_name':
            setLastName(e.target.value)
            break;
        case 'dni':
            setDNI(e.target.value)
            break;
        case 'email':
            setEmail(e.target.value)
            break;
        case 'phone_number':
            setPhoneNumber(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    axiosInstance.post(
        API_BASE_URL + EMPLOYEE_CREATE_API_URL,
        {
            first_name,
            last_name,
            dni,
            email,
            phone_number,
            birth_at: moment(birth_at).format('YYYY-MM-DD'),
            started_at: moment(started_at).format('YYYY-MM-DD'),
        }
    )
    .then((response) => {
        if(response.data)
            return history.push(EMPLOYEE_LIST_URL)

    })
    .catch((error) => {
        console.log(error.response)
    })
  }

  const resetForm = () => {
      setFirstName('')
      setLastName('')
      setEmail('')
      setDNI('')
      setPhoneNumber('')
      setStartedAt('')
      setBirthAt('')
  }

  return (
    <Container className="mt-5 styled-box p-5 bg-white">
      <h4>Create new employee</h4>
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          {error_message &&
          <Alert color="danger">
            {error_message}
          </Alert>}
          <FormGroup>
            <Label for="first_name">First name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First name"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="last_name">Last name</Label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="dni">DNI</Label>
            <Input
              type="text"
              name="dni"
              id="dni"
              placeholder="DNI"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="phone_number">Phone number</Label>
            <Input
              type="password"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="birth_at">Birthdate</Label>
            <DatePicker 
                id="birth_at"
                name="birth_at"
                value={birth_at}
                onChange={setBirthAt}
                dateFormat="YYYY-MM-DD"
                required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="started_at">Started at</Label>
            <DatePicker 
                id="started_at"
                name="started_at"
                value={started_at}
                onChange={setStartedAt}
                dateFormat="YYYY-MM-DD"
                required
            />
          </FormGroup>
        </Col>
        <Col className='text-right pt-3'>
            <Button>Submit</Button>
        </Col>
      </Form>
    </Container>
  );
}

export default EmployeeCreate;