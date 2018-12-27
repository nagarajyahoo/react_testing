import React from 'react';
import {connect} from 'react-redux';

class CommentList extends React.Component {
    render() {
        const commentsList = this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>
        });

        return (
            <ol>
                {commentsList}
            </ol>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
};

export default connect(mapStateToProps, null)(CommentList);