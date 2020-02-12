// class PostList extends Component {
//   state = {
//     posts: [
//       {
//         id: 1,
//         author: {
//           name: "Julio Alcantara",
//           avatar: "http://url-da-imagem.com/imagem.jpg"
//         },
//         date: "04 Jun 2019",
//         content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
//         comments: [
//           {
//             id: 1,
//             author: {
//               name: "Diego Fernandes",
//               avatar: "http://url-da-imagem.com/imagem.jpg"
//             },
//             content: "Conteúdo do comentário"
//           }
//         ]
//       },
//       {
//         id: 2
//         // Restante dos dados de um novo post
//       }
//     ]
//   };
// }

import React, { Component } from 'react';

import './styles.css';

class PostList extends Component {
  state = {
    newPost: '',
    posts: [
      'Post 1',
      'Post 2',
      'Post 3',
      'Post 4'
    ]
  }

  // acrescenta o valor do input no 'new posts'
  handleInputChange = e => {
    this.setState({ newPost: e.target.value })
  }

  // joga o texto do new post para os posts
  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      posts: [...this.state.posts, this.state.newPost],
      newPost: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Nome da pessoa: {this.state.newPost}</h1>
        <ul>
          {this.state.posts.map(post => <li key={post}>{post}</li>)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newPost}


        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default PostList