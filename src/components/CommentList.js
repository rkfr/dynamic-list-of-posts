import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  state = {
    showComments: false,
  };

  showCommentsHandler = () => {
    this.setState(prevState => ({ showComments: !prevState.showComments }));
  };

  render() {
    const { comments } = this.props;
    const { showComments } = this.state;

    return (
      <div className="comments-list">
        <div>
          <button
            type="button"
            onClick={this.showCommentsHandler}
          >
            {showComments ? 'Hide comments' : 'Show comments'}
          </button>
        </div>
        {
          showComments
          && (
          <ul>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          </ul>
          )
        }

      </div>
    );
  }
}
