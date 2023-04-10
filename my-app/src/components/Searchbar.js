import React, { Component } from 'react'
import names from '../names'

export class Searchbar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        names: names
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase();
        console.log(inputText)
        const filteredNames = names.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })
    }

  render() {
    return (
      <div>
        <h1>Name search</h1>
        <p>Matching name found: {this.state.names.length}</p>
        <form>
            <input 
            onChange={(event) => this.handleChange(event)}
            type='text' 
            placeholder='Search names...'></input>
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names.map(name => {
                return <p key={name}>{name}</p>
            })}
        </div>
      </div>
    )
  }
}

export default Searchbar