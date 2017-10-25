import React, { Component } from 'react';
import Search from './Search';
import List from './List';

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

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"><span className="has-text-danger">ERGO</span> Fanboy</h1>
              <h2 className="subtitle">Finde Deinen Lieblings-Star</h2>
            </div>
          </div>
        </section>

        <section className="container">
          <Search onFind={this.updateResults}/>
          <List results={this.state.results} />
        </section>

      </div>
    );
  }
}

export default App;
