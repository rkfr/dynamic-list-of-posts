import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
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
          <Button
            variant="outlined"
            color="default"
            onClick={this.showCommentsHandler}
            size="small"
          >
            {showComments ? 'Hide comments' : 'Show comments'}
          </Button>
        </div>
        {
          showComments
          && (
          <List>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          </List>
          )
        }

      </div>
    );
  }
}
