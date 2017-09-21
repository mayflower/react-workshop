import React, { Component } from 'react';
import './App.css';
import Panel from './Panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel title="Wichtige Informationen">This is the <strong>message</strong></Panel>
        <Panel title="Unwichtige Informationen" message="Aha, Du Schuft">This is the &quot;Bla&quot;</Panel>
      </div>
    );
  }
}


export default App;
