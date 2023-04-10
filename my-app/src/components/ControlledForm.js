import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: '' 
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = () => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Fill out form:</h2>
                    <div>
                        <label htmlFor='id-name'>Your name:</label>
                        <input value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name='name'
                            type='text' />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select value={this.state.category}
                        onChange={this.handleCategoryChange}
                        id='id-category' 
                        name='category'>
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea value={this.state.comments}
                        onChange={this.handleCommentsChange}
                        id='id-comments'
                        name='comments' />
                    </div>
                    <input type='submit' value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm