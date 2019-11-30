import React from 'react';
import Logo from '../../assets/images/logo_teste.png';

function Header(){
    return(
        <div className="header">
            <img src={Logo} />
            Header funcionando
            <nav>
                <a href="#">Home</a>
                <a href="#">Favoritos</a>
                <a href="#">Home</a>
            </nav>
        </div>
    )
}
export default Header;