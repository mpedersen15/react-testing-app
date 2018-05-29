import React, { Component } from 'react';

class CommentBox extends Component {

    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        // TODO: call an action creator
        
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>
                <div>
                    <button type="submit">Add Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;