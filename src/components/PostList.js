import React from 'react';
import Post from './Post';

const PostList = ({ postsData }) => (
  <div className="post-list">
    <ul>
      {postsData.map(post => (
        <Post key={post.id} postData={post} />
      ))}
    </ul>
  </div>
);

export default PostList;
