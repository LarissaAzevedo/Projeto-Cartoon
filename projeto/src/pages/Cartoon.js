import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import imgDesenho from '../assets/images/banner.jpg';

function Cartoon() {
  return (
    <div className="cartoon">
      <Header />
      <div className="container">
        <div className="conteudo_desenho">
          <h2>Nome do desenho</h2>
          <img src={imgDesenho} />
          <p>Toda a trama e os cenários belíssimos de Steven Universe se juntam no propósito bastante poético de enaltecer as pequenas e grandes belezas de todas as formas de vida. Em Steven Universe, ninguém é inferior. O princípio básico é que todas as criaturas são seres complexos formados pelas mais diversas características que se combinam de formas únicas em cada um. A mensagem é que todos têm o potencial para a beleza e para o bem, e toda violência só é justificada na medida em que vise interromper uma violência anterior.</p>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cartoon;