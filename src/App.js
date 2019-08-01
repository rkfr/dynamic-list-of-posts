import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { getPosts, getUsers } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsData: [],
      isDataLoading: false 
    };
  }

  getPostsWithUsers(posts, users) {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
    }));
  }

  loadPostData = async () => {
    this.setState(prevState => ({ isDataLoading: !prevState.isDataLoading }));

    const posts = await getPosts();
    const users = await getUsers();

    this.setState({ postsData: this.getPostsWithUsers(posts, users) });
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
