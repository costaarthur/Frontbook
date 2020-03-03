import React from 'react';
//import PropTypes from 'prop-types';

function PostItem({ post }) {
  return (
    < div className="whitesquare"  >
      {post.author.avatar}
      <p className="nome">{post.author.name}</p>
      <p className="data" >{post.date}</p>
      <p className="postagem">{post.content}</p>


      {post.comments.map(comment => (
        <div className="comentarios" key={comment.id}>
          {comment.author.avatar}
          <div className="nomeecomentario" >
            <p className="nomecomentando" > <b>{comment.author.name}</b>{` `}
              {comment.content}</p>
          </div>
        </div>
      ))}
    </div >
  );
}


export default PostItem