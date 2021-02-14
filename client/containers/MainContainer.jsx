import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

import PetContainer from './PetContainer';
import Navigation from '../components/Navigation';
// import styles from '../styles.css';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.fetchedPetData = [];
    this.state.indexPage = true;
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  //handle search requests
  handleSearch(e){
    e.preventDefault();
    console.log('inside handleSearch')
    //send fetch request here
    //parse through retrieved data
    //update state to render 

    
    this.setState({
      ...this.state,
      indexPage: false,
    })
  }

  handleSave(e){
    e.preventDefault();
    console.log('inside handleSave')
    //send fetch (Post) request here
    //parse through retrieved data
    //update state to render 
    this.setState({
      ...this.state,
    })
  }

  render() {
    console.log(this.state)
    //render index page version of MainContainer at initial render
    if (this.state.indexPage){
      return (
        <Container>
          <Row>
            <Col> 
              <Navigation 
                indexPage = {this.state.indexPage}
                handleSearch = {this.handleSearch} /> 
            </Col>
          </Row>
        </Container>
      )
    }

    //render MainContainer with Navigation at all other times
    if (!this.state.indexPage){
      return (
        <div>
          <Navigation 
          handleSearch = {this.handleSearch}
          />
          <PetContainer
          handleSave = {this.handleSave}/>
        </div>
      )
    }
  }   
}

export default MainContainer;