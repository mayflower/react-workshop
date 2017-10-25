import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"><span className="has-text-danger">ERGO</span> Fanboy</h1>
            <h2 className="subtitle">Finde Deinen Lieblings-Star</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Header;
