import React from 'react';
import Post from './Post';
import filterPostsByWord from '../helpers';

export default class PostList extends React.Component {
  state = {
    filterKeyWord: '',
    filteredData: [],
  };

  getFilterKeyWord = ({ target: { value: filterKeyWord } }) => this.setState({ filterKeyWord });

  render() {
    const {
      postsData, getPostData, isDataLoading,
    } = this.props;

    const { filterKeyWord, filteredData } = this.state;
    const postsToShow = filteredData.length ? filteredData : postsData;

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
                      onClick={getPostData}
                    >
                      {!isDataLoading ? 'Load' : 'Loading...'}
                    </button>
                  </div>
                )
                : (
                  <>
                    <div className="filter">
                      <form>
                        <label htmlFor="filter-input">
                          <input
                            type="text"
                            id="filter-input"
                            placeholder="Filter posts..."
                            onInput={this.getFilterKeyWord}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            this.setState({
                              filteredData: filterPostsByWord(postsData, filterKeyWord),
                            });
                          }}
                        >
  Go
                        </button>
                      </form>
                    </div>
                    <ul>
                      {postsToShow.map(post => (
                        <Post key={post.id} postData={post} />
                      ))}
                    </ul>
                  </>
                )
            }
      </div>
    );
  }
}
