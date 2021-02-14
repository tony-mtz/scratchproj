import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import PetDetails from '../components/PetDetails'
// import PetImages from '..components/PetImages';
// import SavePet from '..components/SavePet';
import data from '../FakeModel/fakeData';


class PetContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      petData: []
    };
  }

  componentDidMount() {  
    this.setState({petData:data});
  //replace when we have real data source
  //   fetch(this.props.feedUrl)
  //   .then(response=> response.json())
  //   .then(data=>{
  //     this.setState({data:petData})//()=>{
    
  //   })
  //   .catch((e)=>{
  //     console.log('error:',e)
  //   })
  }
  render(){
    console.log(this.state)
    const dataObjects = this.state.petData.map((obj, i)=>{
      return(<PetDetails
      key = {i}
      name = {obj.name}
      age = {obj.age}
      gender = {obj.gender}
      location = {obj.location}
      about = {obj.about}
      />)
    })
   
    return(
      <Container>
        <Row className="justify-content-md-center">
        <Col>(a)</Col>
          <Col>(b)
            <h3>Pets Near You</h3>
            {dataObjects}
            </Col>
          <Col>(c)</Col>
       
        </Row>
      </Container>
    );
  }
  
}

// Render an <App> component to the #app div in the body
export default PetContainer;