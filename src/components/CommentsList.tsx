import React from 'react';
import { block } from 'bem-cn';

const b = block('comments-list');

interface CommentsListProps {
  fullName: string;
  comment: string;
}
const CommentsList: React.FC<CommentsListProps> = ({ fullName, comment }) => {
  return (
    <div className={b()}>
      <h5>{fullName}</h5>
      <div>{comment}</div>
    </div>
  );
};

export default CommentsList;
