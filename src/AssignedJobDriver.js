import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import './index.css';

export function AssignedJob(){
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/Driver">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar><br></br>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title>Job Title</Card.Title>
                            <Card.Text>
                                Job Description
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='submitbutton'>
                        <Form.Select aria-label="Select your Status">
                            <option>Select your Status</option>
                            <option value="1">On Duty</option>
                            <option value="2">On Process</option>
                            <option value="3">On leave</option>
                        </Form.Select>
                        <br></br>
                        <Button as="input" type="submit" value="Submit" className='submitbutton'/>{' '}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}