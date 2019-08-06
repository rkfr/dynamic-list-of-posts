import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { getPosts, getUsers, getComments } from './api';

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

    this.setState({ postsData: this.mergeData({ posts, users, comments }) });
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
        <div className="container">
          <h1>Dynamic lists of Posts</h1>
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
