import React from 'react'

const Search = props => {
  const onChange = (event) => {
    props.handleSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChange} value ={props.search}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search