import React from 'react';

// creates the podcast header and link to be displayed on the podcast page
function Blog() {
  return (
    <>
      <div className="row">
        <div className="text-center">
          <h1>My Podcasts</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://baconsale.com/">Bacon Sale</a>
        </div>
      </div>
    </>
  );
}

export default Blog;
