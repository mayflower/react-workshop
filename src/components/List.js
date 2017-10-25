import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <section>
        <table className="table">
          <tbody>
            {this.props.results.map(result =>
              <tr key={result.id}>
                <td>{result.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    )
  }
}

export default List;
