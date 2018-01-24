

import React from 'react';
import SearchResults from './search_results';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { input: '' };
        this.handleChange = this.handleChange.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    handleChange(e) {
        console.log(this.state);
    e.preventDefault();
    if (e.target.value === '') {
        this.setState({ input: '' });
        setTimeout(() => this.props.clearSearchResults(), 100);
    }

    const newVal = e.target.value;
    this.setState({ input: newVal }, () => {
        this.props.searchDatabase(this.state.input);
    });
}

    clearState() {
        this.setState({ input: '' });
        setTimeout(() => this.props.clearSearchResults(), 200);
        // this.props.clearSearchResults();
      }

      render() {
          return (
            <div className="headerSearch">
                <div className="search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="search artists"  onChange={this.handleChange} onBlur={this.clearState} />
        </div>
                <SearchResults value={this.state.input} results={this.props.searchResults}/>
            </div>
          );
      }
}