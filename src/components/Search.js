import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onChange={this.props.onChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search;
