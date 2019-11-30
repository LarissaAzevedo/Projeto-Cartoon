import React from 'react';
import Logo from '../../assets/images/logo_teste.png';

function Header() {
    return (
        <div className="header">
            <div className="items_header">
                <img src={Logo} />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Favoritos</a>
                </nav>
            </div>
        </div>
    )
}
export default Header;