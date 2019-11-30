import React from "react";
import Card from '../card';
import Logo1 from '../../assets/images/os-flinstones.jpg';
import Logo2 from '../../assets/images/steven-universe.jpg';
import Logo3 from '../../assets/images/tres-espias.jpg';


function Grid() {

  var cardData = [
    { title: "Os Flinstones", cardFoto: Logo1 }, 
    { title: "Steven Universe", cardFoto: Logo2 }, 
    { title: "Três Espiãs Demais", cardFoto: Logo3 },
  ]

  return (
    <div className="Grid">
      {cardData.map((val, i) => (
        <Card key={i} title={val.title} cardFoto={val.cardFoto} />
      ))}

    </div>
  );
}
export default Grid;
