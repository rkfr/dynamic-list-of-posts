import React from 'react';
import { List, Button, TextField } from '@material-ui/core';
import Post from './Post';
import filterPostsByString from '../helpers';

export default class PostList extends React.Component {
  state = {
    filterKeyWord: '',
  };

  getFilterKeyword = ({ target: { value: filterKeyWord } }) => this.setState({ filterKeyWord });

  render() {
    const {
      postsData, getPostData, isDataLoading,
    } = this.props;

    const { filterKeyWord } = this.state;
    const filteredData = filterPostsByString(postsData, filterKeyWord);
    const postsToShow = filteredData.length ? filteredData : postsData;

    return (
      <div>
        {
              !postsData.length
                ? (
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isDataLoading}
                      onClick={getPostData}
                    >
                      {!isDataLoading ? 'Load' : 'Loading...'}
                    </Button>
                  </div>
                )
                : (
                  <>
                    <div>
                      <form>
                        <TextField
                          margin="normal"
                          label="Filter posts..."
                          value={filterKeyWord}
                          onChange={this.getFilterKeyword}
                        />
                      </form>
                    </div>
                    <List>
                      {postsToShow.map(post => (
                        <Post key={post.id} postData={post} />
                      ))}
                    </List>
                  </>
                )
            }
      </div>
    );
  }
}
