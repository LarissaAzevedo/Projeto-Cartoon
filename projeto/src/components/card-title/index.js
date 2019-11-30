import React from 'react';

class title extends React.Component {
    constructor() {
        super();
        this.state = {
          color: "vermelho",
          amount: "3",
          title: "Titulo Foto"
        };
    }
}

    changeTitle = () =>{
      this.setState({title: "Outro título para esta foto"});
    };
    
export default title;