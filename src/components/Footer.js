import { Component } from 'react';
import imagem from '../images/imagem.jpg'

export default class Footer extends Component {
    render() {
      return (
        <footer>
            <abbr className='centro' title="Pica Pau"><img src={ imagem }/></abbr><br/>
            <span className='centro'>Pica Pau</span>
            <p className='centro' ><abbr title="Centro de Ciência e Tecnologia">CCT</abbr></p>
        </footer>
      );
    }
}
