import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Eu sou Mário Júnior.</span> Web designer
          </h1>

          <p className="home__description">
              Meu nome é Mário Lúcio Santos Júnior, nascido no dia 07/03/2003, natural de Patrocínio, 
              e sempre fui fascinado por saber o que acontece por trás dos dispositivos eletrônicos e, com essa curiosidade, cheguei até o curso de 
              Sistemas de Informação na Universidade Federal de Uberlândia(UFU). Tenho muito apreço pelo respeito, trabalho em equipe, 
              aprendizagem contínua e, principalmente, dedicação. Acredito que o essencial no ser humano é a sua personalidade, pois habilidades podem ser 
              adquiridas ao longo do processo, já o caráter do indivíduo é peculiar à ele. Dessa forma, ao ingressar em uma empresa, pretendo fazer um trabalho 
              eficiente de maneira harmoniosa, ao respeitar a diversidade de pessoas e pensamentos, de modo que o conteúdo final possa gerar um serviço bem feito 
              e, consequentemente, novos conhecimentos sobre as tecnologias utilizadas.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"/>
    </section>
  );
}

export default Home