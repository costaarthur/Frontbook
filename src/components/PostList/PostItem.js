import React from 'react';
//import PropTypes from 'prop-types';

function PostItem({ post, onDelete }) {
  return (
    <div>
      {post}
      <button onClick={onDelete} type="button">Remover</button>
    </div>
  );
}

// PostItem.defaultProps = {
//   post: 'Oculto'
// }

// PostItem.propTypes = {
//   post: PropTypes.string,
//   onDelete: PropTypes.func.isRequired,
// }

export default PostItem