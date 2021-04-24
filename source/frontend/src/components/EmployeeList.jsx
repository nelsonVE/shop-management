import React from 'react';
import { Table, Container } from 'reactstrap';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Example = (props) => {
  return (
    <Container className="mt-3 styled-box pt-3 px-0 bg-white">
        <h4 className="ml-3">Employee list</h4>
        <Table striped className="mt-3">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><FontAwesomeIcon icon={faCreditCard} /></td>
                </tr>
            </tbody>
        </Table>
    </Container>
  );
}

export default Example;