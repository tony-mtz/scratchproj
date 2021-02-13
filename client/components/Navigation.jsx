import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Row} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    // return (
    //   <div>
    //     <Navbar bg="light" expand="lg">
    //     <Navbar.Brand href="#">Personal Pet Finder</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className ="justify-content-center"> 
    //       <Form inline className = "justify-content-center" >
    //         <FormControl type="text" placeholder="Enter Zip Code" className="mr-sm-2" />
    //         <Form.Control className="mr-sm-2" as="select">
    //           <option>Dog</option>
    //           <option>Cat</option>
    //         </Form.Control>
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
          
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    //   </div>
    // )
    return (
      <div>
        <Container >
        <Row className = " justify-content-md-center"> 
          <Form inline >
              <FormControl type="text" placeholder="Enter Zip Code" className="mr-sm-2" />
              <Form.Control className="mr-sm-2" as="select">
                <option>Dog</option>
                <option>Cat</option>
              </Form.Control>
              <Button variant="outline-success">Search</Button>
            </Form>
        {/* <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className ="align-self-center">  */}
          
          
          {/* </Nav>
        </Navbar.Collapse>
      </Navbar> */}
        </Row>
        </Container>
      </div>
    )
  }
}

export default Navigation;