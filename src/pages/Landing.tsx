/*para cada tela vou ter um componente*/
import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom'; /*LINK=pode ser utilizado no lugar da tag <a>*/
import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';


/*estrutura padrao de um componente*/
function Landing() {
    return (
        <div id= "page-landing">
         <div className="content-wrapper">
          <img src={logoImg} alt="Happy" /> 

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p> Visite orfanatos e mude o dia de muitas crianças</p>
          </main>

          <div className="location">
              <strong> Guilherme</strong>
              <span> Borges</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
      </div>
    </div>
    );
}

export default Landing;