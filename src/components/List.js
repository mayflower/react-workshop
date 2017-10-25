import React, { Component } from 'react';

class List extends Component {
  render() {
    const numberOfResults = this.props.results.length;
    return numberOfResults === 0 ? '' : (
      <section>
        <h2 className="title is-4">{numberOfResults} results found:</h2>
        <div>
          <table className="table">
            {this.props.results.map(result =>
              <tr key={result.id}>
                <td>{result.name}</td>
              </tr>
            )}
          </table>
        </div>
      </section>
    )
  }
}

export default List;

