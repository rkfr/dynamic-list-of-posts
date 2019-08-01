import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { getPosts, getUsers, getComments } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsData: [],
      isDataLoading: false 
    };
  }

  mergeData({ posts, users, comments }) {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
      comments: comments.filter(comment => comment.postId === post.id)
    }));
  }

  loadPostData = async () => {
    this.setState(prevState => ({ isDataLoading: !prevState.isDataLoading }));

    const posts = await getPosts();
    const users = await getUsers();
    const comments = await getComments();

    this.setState({ postsData: this.mergeData({ posts, users, comments }) });
  }

  render() {
    const { postsData, isDataLoading } = this.state;

    return (
      <div className="app">
        <h1>Dynamic lists of Posts</h1>
        <PostList 
          postsData={postsData}
          loadPostData={this.loadPostData}
          isDataLoading={isDataLoading}
        />
      </div>
    );
  }
}
