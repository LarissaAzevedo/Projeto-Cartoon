import React from 'react';
import imgBanner from '../../assets/images/banner.jpg';

function Banner() {
    return (
        <div className="banner">
            {/* <p>{this.props.nomeDesenho}</p> */}
            <p>Nome do desenho</p>
            <img src={imgBanner} />
        </div>
    )
}
export default Banner;