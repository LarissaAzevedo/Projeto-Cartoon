import React from "react";
import Card from '../card';

import Logo from '../../assets/images/logo_teste.png'


function Grid() {

  var cardData = [{title: "Titulo 1", cardFoto: Logo}, {title: "Titulo 2", cardFoto: Logo}, {title: "Titulo 3", cardFoto: Logo}]

  return (
    <div className="Grid">
        { cardData.map((val, i) =>(
            <Card key={i} title={val.title} cardFoto={val.cardFoto} />
        ))}
        
    </div>
  );
}
export default Grid;
