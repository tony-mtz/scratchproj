import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import PetContainer from './PetContainer';
import Navigation from '../components/Navigation';
import styles from '../styles.css';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      fetchedPetData : [], 
      indexPage: true,
      searchHandleClick: this.searchHandleClick.bind(this)
    }
  }

  searchHandleClick(e){
    e.preventDefault();

    //send fetch request here
    //parse through retrieved data
    //update state to render 

    console.log('inside searchHandleClick')
    this.setState({
      ...this.state,
      indexPage: false,
    })
  }

  render() {
    console.log(this.state)
    //render index page version of MainContainer at initial render
    if (this.state.indexPage){
      return (
        <Container>
          <Row>
            <Col> <Navigation/> </Col>
          </Row>
        </Container>
      )
    }

    //render MainContainer with Navigation at all other times
    if (!this.state.indexPage){
      return (
        <div>
          <Navigation/>
          <PetContainer/>
        </div>
      )
    }
  }   
}

export default MainContainer;