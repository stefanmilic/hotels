import React from 'react';
import { block } from 'bem-cn';

const b = block('comments-list');

const CommentsList = () => {
  return (
    <div className={b()}>
      <h5>Stefan milic</h5>
      <div>
        ovo je moj comentarvo je moj comentarvo je moj comentarvo je moj
        comentarvo je moj comentar
      </div>
    </div>
  );
};

export default CommentsList;
