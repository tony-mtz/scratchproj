import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PetDetails from '..components/PetDetails';
import PetImages from '..components/PetImages';
import SavePet from '..components/SavePet';


class PetContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      urls: []
    };
  }

  render(){
    return(
      <div style={styles.container}>
        <PetImages />
        <PetDetails feedUrl= {url}/>
        <SavePet />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<PetContainer />, document.getElementById('app'));