import React from 'react';
import Post from './Post';

const PostList = ({ postsData, loadPostData, isDataLoading }) => {
  const showPosts = () => (
    <ul>
      {postsData.map(post => (
        <Post key={post.id} postData={post} />
      ))}
    </ul>
  );

  return (
    <div className="post-list">
      {
        !postsData.length
          ? (
            <div>
              <button
                type="button"
                className="load-button"
                disabled={isDataLoading}
                onClick={loadPostData}
              >
                {!isDataLoading ? 'Load' : 'Loading...'}
              </button>
            </div>
          )
          : showPosts()
      }
    </div>
  );
};

export default PostList;
