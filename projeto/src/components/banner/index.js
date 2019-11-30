import React from 'react';
import imgBanner from '../../assets/images/banner.jpg';

function Banner() {
    return (
        <div className="banner">
            {/* <p>{this.props.nomeDesen}</p> */}
            <img src={imgBanner} />
        </div>
    )
}
export default Banner;