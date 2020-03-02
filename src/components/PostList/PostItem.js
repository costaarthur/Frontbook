import React from 'react';
//import PropTypes from 'prop-types';

function PostItem({ post }) {
  return (
    < div className="whitesquare"  >
      {/* <p>{post.id}</p> */}
      {/* < p > <img className="avatar1" img align="left" width="40" src={avatar1} /></p> */}
      {post.author.avatar}
      <p className="nome">{post.author.name}</p>
      <p className="data" >{post.date}</p>
      <p className="postagem">{post.content}</p>

      <div className="comentarios">
        {post.comments[0].author.avatar}
        {/* <p>id do primeiro comentário: {post.comments[0].id}</p> */}
        {/* <p><img className="avatar2" img align="left" width="40" src={avatar2} /></p> */}
        <div className="nomeecomentario" >
          <p className="nomecomentando" > <b>{post.comments[0].author.name}</b>
            {post.comments[0].content}</p>
        </div>
      </div >
    </div >
  );
}


export default PostItem