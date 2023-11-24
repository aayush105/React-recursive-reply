import React, { useState } from 'react';

function CommentList(props) {
  const [showReplies, setShowReplies] = useState(false);

  // Function to toggle the display of replies
  function toggleReplies() {
    setShowReplies(!showReplies);
  }

  const commentClass = props.indent ? 'reply' : 'comment';

  // Renders a comment and its replies if they exist
  return (
    <div className={commentClass}>
      <div>
        <h1>{props.comment}</h1>
        {props.replies && props.replies.length > 0 && (
          <button onClick={toggleReplies}>Reply</button>
        )}
      </div>

      {showReplies && (
        <div>
          {props.replies.map((reply, index) => (
            <CommentList
              key={index}
              comment={reply.text}
              replies={reply.replies}
              indent={props.indent ? props.indent + 1 : 1} // Increase indentation for nested replies
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList;
