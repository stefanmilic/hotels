import React from 'react';
import { block } from 'bem-cn';

const b = block('comments-list');

const CommentsList = ({ fullName, comment }: any) => {
  return (
    <div className={b()}>
      <h5>{fullName}</h5>
      <div>{comment}</div>
    </div>
  );
};

export default CommentsList;
