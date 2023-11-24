import React from 'react';
import CommentList from './CommentList';

const CommentsData = () => {
  //an array of comments containing Comments  and their replies
  const comments = [
    {
      text: 'This is reply 1.',
      replies: [
        {
          text: 'This is reply to reply 1.',
          replies: [
            {
              text: 'This is another reply to reply 1.',
              replies: [
                {
                  text: 'This is reply to second reply of reply 1.',
                  replies: [], // No further replies
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'This is reply 2.',
      replies: [],
    },
  ];

  // Render each comment using CommentList component
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentList
          id={index}
          key={index}
          comment={comment.text}
          replies={comment.replies}
        />
      ))}
    </div>
  );
};

export default CommentsData;
