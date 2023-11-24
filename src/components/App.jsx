import React from 'react';
import CommentsData from './CommentData';

function App() {
  return (
    <div>
      <h1>Comments Section</h1>
      {/* Renders the CommentsData component to display comments */}
      <CommentsData />
    </div>
  );
}

export default App;
