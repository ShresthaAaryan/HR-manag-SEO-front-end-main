import Card from 'react-bootstrap/Card';

import './App.css';
import './index.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';

export function Driver (){
  const employeeData = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
    location: 'City, Country',
    email: 'john.doe@example.com',
    phone: '+123 456 7890',
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Driver/AssignedJob">Assigned Job</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><br></br>
      <div className='driverinfo'>
          <Card>
            <Card.Img variant="top" src="//Employee Img" />
            <Card.Body>
              <Card.Title>Info</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><strong>Name:</strong> {employeeData.name}</ListGroup.Item>
              <ListGroup.Item><strong>Position:</strong> {employeeData.position}</ListGroup.Item>
              <ListGroup.Item><strong>Department:</strong> {employeeData.department}</ListGroup.Item>
              <ListGroup.Item><strong>Location:</strong> {employeeData.location}</ListGroup.Item>
              <ListGroup.Item><strong>Email:</strong> {employeeData.email}</ListGroup.Item>
              <ListGroup.Item><strong>Phone:</strong> {employeeData.phone}</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
    </div>
  );
}
