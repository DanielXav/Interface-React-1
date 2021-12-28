import { Component } from 'react';

export default class Footer extends Component {
    render() {
      return (
        <footer>
            <abbr class="centro" title="Pica Pau"><img src="./image/imagem.jpg" alt="Imagem do pica pau"/></abbr><br/>
            <span class="centro">Pica Pau</span>
            <p class="centro" ><abbr class="sigla" title="Centro de Ciência e Tecnologia">CCT</abbr></p>
        </footer>
      );
    }
}
