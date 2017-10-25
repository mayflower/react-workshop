import React, { Component } from 'react';

class List extends Component {

  render() {

    const numberOfResults = this.props.results.length;

    if (numberOfResults === 0) {
      return '';
    }

    return (
      <section>
        <h2 className="title is-4">
          {numberOfResults} results found:
        </h2>
        <table className="table">
          {this.props.results.map(result =>
            <tr key={result.id}>
              <td>{result.name}</td>
            </tr>
          )}
        </table>
      </section>
    )
  }
}

export default List;
