import React from 'react';
import { Button, List, Box } from '@material-ui/core';
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
      <Box className="comments-list">
        <Box>
          <Button
            variant="outlined"
            color="default"
            onClick={this.showCommentsHandler}
            size="small"
          >
            {showComments ? 'Hide comments' : 'Show comments'}
          </Button>
        </Box>
        {
          showComments
          && (
          <List>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          </List>
          )
        }

      </Box>
    );
  }
}
