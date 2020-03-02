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


  render() {
    const { posts } = this.state;
    return (
      < div id="postlist" >
        {posts.map((post, i) => <PostItem key={post.id} post={post} />)}
      </div >
    )
  }
}

export default PostList