import React from 'react';

import './styles.css';
import token from '../../assets/tokenfb.png'

const Header = () => <header id="main-header">
  <p className="fb">facebook</p>
  <p className="mp">Meu perfil</p>
  <img className="token" width="53" src={token} />
</header>


export default Header;