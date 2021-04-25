import React, { useEffect, useState } from 'react';
import { Table, Container } from 'reactstrap';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import axiosInstance from '../axiosAPI'

import { API_BASE_URL, EMPLOYEE_LIST_API_URL } from '../constants'


const EmployeeList = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get(API_BASE_URL + EMPLOYEE_LIST_API_URL)
    .then((response) => {
      console.log(response.data)
      setData(response.data)
    })
    .catch((error) => {

    })
  })

  return (
    <Container className="mt-3 styled-box pt-3 px-0 bg-white">
        <h4 className="ml-3">Employee list</h4>
        <Table striped className="mt-3">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Birthdate</th>
                <th>Started at</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
            data.map(item => {
              return (
                <tr>
                  <td>
                    {item.first_name}
                  </td>
                  <td>
                    {item.last_name}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.phone_number}
                  </td>
                  <td>
                    {item.birth_at}
                  </td>
                  <td>
                    {item.started_at}
                  </td>
                  <td>
                    
                  </td>
                </tr>
              )
            })
            }
            </tbody>
        </Table>
    </Container>
  );
}

export default EmployeeList;