import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import { render } from 'react-dom';


function PetDetails(props){
  return(
    <Card style={{width:'18rem'}} className="mb-2">    
      <Card.Body>
        <Card.Title as="h3" className="mb-1">{props.name}</Card.Title>
        <Card.Text><strong>Age: </strong> {props.age} </Card.Text>
        <Card.Text><strong>Gender: </strong>{props.gender} </Card.Text>
        <Card.Text><strong>Location: </strong> {props.location} </Card.Text>
        <Card.Text><strong>About: </strong>{props.about} </Card.Text>   
      </Card.Body>
    </Card>
  )
}

export default PetDetails;