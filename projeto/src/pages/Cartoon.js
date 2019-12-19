import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import imgDesenho from '../assets/images/banner.jpg';
import Grid from '../components/grid/index';

class Cartoon extends Component {

  render() {
    return (
      <div className="cartoon">
        <Header />
        <div className="container">
          <div className="conteudo_desenho">
            <h2>{this.props.title}</h2>
            <img src={this.props.cardFoto} />
            <p>{this.props.descricao}</p>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cartoon;