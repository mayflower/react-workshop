import React, { Component } from 'react';

class Header extends Component {
  render() {

    const resultsCount = this.props.results.length;

    const subtitle = () => {
      if (resultsCount === 0) {
        return <h2 className="subtitle">Finde Deinen Lieblings-Star</h2>;
      } else {
        return <h2 className="subtitle">{resultsCount} results found</h2>;
      }
    }

    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"><span className="has-text-danger">ERGO</span> Fanboy</h1>
            {subtitle()}
          </div>
        </div>
      </section>
    )
  }
}

export default Header;

