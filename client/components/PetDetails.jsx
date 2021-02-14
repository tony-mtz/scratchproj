import React from 'react';
import { Card, Col, ListGroup, Row, Accordion, Button } from "react-bootstrap";
import { render } from 'react-dom';


function PetDetails(props){
  return(
    <Row>
      <Col xl={4} md={5} >
        <Card style={{width: '14rem'}} >
          
            <Card.Img variant="top" src={props.images} />
                  
        </Card>      
      </Col>

      <Col xl={6} md={6}>
        <Accordion >
          <Card>
            <Card.Body>
              <Card.Title as="h3" className="mb-1">{props.name}</Card.Title>         
              <Card.Text>
                <strong>Age: </strong> {props.age} <br />
                <strong>Gender: </strong>{props.gender} <br />
                <strong>Location: </strong> {props.location}  <br />
              </Card.Text>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                See more ...
              </Accordion.Toggle>           
            
            <Accordion.Collapse eventKey="0">
            <Card.Text>    
              <strong>About: </strong>{props.about} 
              </Card.Text>
            </Accordion.Collapse>
            </Card.Body>
          </Card>      
        </Accordion>
      </Col>
    </Row>
   
  )
}

export default PetDetails;