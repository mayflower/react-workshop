import React, { Component } from 'react';
import debounce from 'lodash/debounce'
import exampleResult from './ExampleData';

class Search extends Component {
  constructor(props) {
    super(props);
    this.triggerSearch = debounce(this.triggerSearch, 500);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = e => {
    const searchTerm = e.target.value.trim();
    this.setState({ searchTerm }, this.triggerSearch);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Searching for', this.state.searchTerm);
  }

  triggerSearch (term) {
    this.props.onFind([]);
    if (this.state.searchTerm.length > 0 ) {
      this.search(this.state.searchTerm);
    }
  }

  search (term) {
    console.log('Faking ajax call to API endpoint');
    this.props.onFind(exampleResult.filter(item => item.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="field has-addons">
        <div className="is-large control">
          <input
              onChange={this.handleChange}
              className="input"
              type="search"
              value={this.state.searchTerm}
              autoFocus
              placeholder="Find your favorite song..." />
        </div>
        <div className="is-large control">
          <button className="button is-primary">Suche</button>
        </div>
      </form>
    )
  }
}

export default Search;

