import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_teste.png';

function Header() {
    return (
        <div className="header">
            <div className="items_header">
                <img src={Logo} />
                <nav>
                    <Link to="/" replace>Home</Link>
                    <Link to="/favorites" replace>Favoritos</Link>
                </nav>
            </div>
        </div>
    )
}
export default Header;