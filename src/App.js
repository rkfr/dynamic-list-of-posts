import React from 'react';
import { Typography } from '@material-ui/core';
import PostList from './components/PostList';
import { getPosts, getUsers, getComments } from './api';
import './App.css';

export default class App extends React.Component {
  state = {
    postsData: [],
    isDataLoading: false,
  };

  getPostData = async () => {
    this.setState(prevState => ({ isDataLoading: !prevState.isDataLoading }));

    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();

    setTimeout(() => {
      this.setState({ postsData: this.mergeData({ posts, users, comments }) });
    }, 500);
  }

  mergeData = ({ posts, users, comments }) => posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }))

  render() {
    const { postsData, isDataLoading } = this.state;

    return (
      <div className="app">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          component="h1"
        >
            Dynamic lists of Posts
        </Typography>
        <div className="container">
          <PostList
            postsData={postsData}
            getPostData={this.getPostData}
            isDataLoading={isDataLoading}
          />
        </div>
      </div>
    );
  }
}
