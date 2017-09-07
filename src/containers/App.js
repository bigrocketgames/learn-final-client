import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      sports: []
    }
  }

  componentDidMount() {
    fetch('https://team-schedules.herokuapp.com/api/v1/sports')
      .then(response => response.json())
      .then(sports => this.setState({ sports }))
  }


  render() {

    console.log(this.state)
    return(
      <div className="App">
        {/* need to create sports container and import that for use here */}
        App container
      </div>
    );
  }
}

export default App;