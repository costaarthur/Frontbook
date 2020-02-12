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

import PostItem from './PostItem'

import './styles.css';

class PostList extends Component {
  state = {
    newPost: '',
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }, {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
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

  handleDelete = (post) => {
    this.setState({ posts: this.state.posts.filter(t => t !== post) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Nome da pessoa: {this.state.newPost}</h1>
        <div className="postlist">
          {this.state.posts.map(post => (
            <PostItem
              key={post}
              post={post.id} //{...post}
              onDelete={() => this.handleDelete(post)}
            />
          ))}
        </div>
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