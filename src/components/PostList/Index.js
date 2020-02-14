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
import avatar1 from '../../assets/mulher3.png'
import avatar2 from '../../assets/homem2.png'
import avatar3 from '../../assets/mulher2.png'
import avatar4 from '../../assets/homem4.png'
import avatar5 from '../../assets/homem5.png'
import avatar6 from '../../assets/homem6.png'

class PostList extends Component {
  state = {
    newPost: '',
    posts: [
      // 'post 1',
      // 'post 2',
      // 'post 3'

      {
        id: 1,
        author: {
          name: "Gleice Swan",
          avatar: < p > <img className="avatarpost" align="left" src={avatar1} /></p>
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Izuku",
              avatar: <p><img className="avatarcoment" align="left" src={avatar2} /></p>
            },
            content: "Conteúdo do comentário 1 grande para poder testar se o css está funcionando corretamente. Testando testando testando testando testando testando testando testando testando."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julia Might",
          avatar: < p > <img className="avatarpost" align="left" src={avatar3} /></p>
        },
        date: "04 Jun 2019",
        content: "Deve que tá",
        comments: [
          {
            id: 1,
            author: {
              name: "Fred Aizawa",
              avatar: <p><img className="avatarcoment" align="left" src={avatar4} /></p>
            },
            content: "Conteúdo do comentário 2"
          }
        ]
      }, {
        id: 3,
        author: {
          name: "Jack Scott",
          avatar: < p > <img className="avatarpost" align="left" src={avatar5} /></p>
        },
        date: "04 Jun 2019",
        content: "For sure!",
        comments: [
          {
            id: 1,
            author: {
              name: "John Katsuki",
              avatar: <p><img className="avatarcoment" align="left" src={avatar6} /></p>
            },
            content: "Conteúdo do comentário 3"
          }
        ]
      },
    ]
  }

  // // acrescenta o valor do input no 'new posts'
  // handleInputChange = e => {
  //   this.setState({ newPost: e.target.value })
  // }

  // // joga o texto do new post para os posts
  // handleSubmit = e => {
  //   e.preventDefault();

  //   this.setState({
  //     posts: [...this.state.posts, this.state.newPost],
  //     newPost: ''
  //   })
  // }

  // handleDelete = (post) => {
  //   this.setState({ posts: this.state.posts.filter(t => t !== post) })
  // }

  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <h1>Nome da pessoa: {this.state.newPost}</h1>
  //         <div className="postlist">
  //           {this.state.posts.map((post, index) => (
  //             <PostItem
  //               key={post.id}
  //               post={post.id}
  //               //{...post}
  //               onDelete={() => this.handleDelete(post)}
  //             />
  //           ))}
  //         </div>
  //         <input
  //           type="text"
  //           onChange={this.handleInputChange}
  //           value={this.state.newPost}


  //         />
  //         <button type="submit">Enviar</button>
  //       </form>
  //     )
  //   }
  // }

  // console.log(post.comments.length)
  render() {
    const { posts } = this.state;
    return (
      < div id="postlist" >
        {
          posts.map((post, i) => (
            < div className="whitesquare" key={post.id} >
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
          ))
        }
      </div >
    )
  }
}

export default PostList