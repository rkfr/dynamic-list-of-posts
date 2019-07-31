import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { getPosts, getUsers } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsData: [],
    };
  }

  async componentDidMount() {
    const posts = await getPosts();
    const users = await getUsers();

    this.setState({ postsData: this.getPostsWithUsers(posts, users) });
  }

  getPostsWithUsers(posts, users) {
    return posts.map(post => ({
      ...post,
      user: users.find(user => user.id === post.userId),
    }));
  }

  render() {
    const { postsData } = this.state;

    return (
      <div className="app">
        <h1>Dynamic lists of Posts</h1>
        {
          postsData.length
            ? <PostList postsData={postsData} />
            : (
              <div>
            data is loading...
              </div>
            )
        }
      </div>
    );
  }
}
