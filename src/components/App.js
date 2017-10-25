import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Search from './Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      results: []
    }
  }

  updateResults = results => {
    this.setState({results})
  }

  render() {
    return (
      <div>
        <Header/>
        <section className="container">
          <Search onFind={this.updateResults}/>
          <List results={this.state.results} />
        </section>

      </div>
    );
  }
}

export default App;
