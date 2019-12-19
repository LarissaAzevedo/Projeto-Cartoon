import React from "react";
import Card from '../card';
import Logo1 from '../../assets/images/os-flinstones.jpg';
import Logo2 from '../../assets/images/steven-universe.jpg';
import Logo3 from '../../assets/images/tres-espias.jpg';


function Grid() {

  var cardData = [
    {
      title: "Os Flinstones",
      cardFoto: Logo1,
      descricao: "Toda a trama e os cenários belíssimos de Steven Universe se juntam no propósito bastante poético de enaltecer as pequenas e grandes belezas de todas as formas de vida. Em Steven Universe, ninguém é inferior. O princípio básico é que todas as criaturas são seres complexos formados pelas mais diversas características que se combinam de formas únicas em cada um. A mensagem é que todos têm o potencial para a beleza e para o bem, e toda violência só é justificada na medida em que vise interromper uma violência anterior."
    },
    {
      title: "Steven Universe",
      cardFoto: Logo2,
      descricao: "Toda a trama e os cenários belíssimos de Steven Universe se juntam no propósito bastante poético de enaltecer as pequenas e grandes belezas de todas as formas de vida. Em Steven Universe, ninguém é inferior. O princípio básico é que todas as criaturas são seres complexos formados pelas mais diversas características que se combinam de formas únicas em cada um. A mensagem é que todos têm o potencial para a beleza e para o bem, e toda violência só é justificada na medida em que vise interromper uma violência anterior."
    },
    {
      title: "Três Espiãs Demais",
      cardFoto: Logo3,
      descricao: "Toda a trama e os cenários belíssimos de Steven Universe se juntam no propósito bastante poético de enaltecer as pequenas e grandes belezas de todas as formas de vida. Em Steven Universe, ninguém é inferior. O princípio básico é que todas as criaturas são seres complexos formados pelas mais diversas características que se combinam de formas únicas em cada um. A mensagem é que todos têm o potencial para a beleza e para o bem, e toda violência só é justificada na medida em que vise interromper uma violência anterior."
    },
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
