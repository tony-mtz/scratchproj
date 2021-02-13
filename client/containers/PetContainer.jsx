import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';
// import PetDetails from '..components/PetDetails';
// import PetImages from '..components/PetImages';
// import SavePet from '..components/SavePet';


class PetContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      urls: []
    };
  }

  render(){
    return(
      <Container>
        <Row className="justify-content-md-center">
          <Col>(a)</Col>
          <Col>(b)
            <h3>main pet stuff container</h3>
          {/* <PetImages />
          <PetDetails feedUrl= {url}/>
          <SavePet /> */}
          </Col>
          <Col>(c)</Col>
       
        </Row>
      </Container>
    );
  }
}



// Render an <App> component to the #app div in the body
ReactDOM.render(<PetContainer />, document.getElementById('app'));