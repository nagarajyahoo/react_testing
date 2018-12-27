import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = {
        comments: ''
    };

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //add comment
        this.props.saveComment(this.state.comments);

        //clear comments
        this.setState({
            comments: ''
        })
    };

    getComments = () => {
        this.props.fetchComments();
    };

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <h4>Add Comments</h4>
                    <textarea
                        value={this.state.comments}
                        onChange={(event) => this.handleChange(event)}
                        placeholder={'Comments here...'}
                    />
                    <div>
                        <button className={'submit-btn'}>Submit</button>
                    </div>
                </form>
                <button className={'fetch-comments-btn'} onClick={this.getComments}>Fetch Comments</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
};

export default connect(mapStateToProps, actions)(CommentBox);