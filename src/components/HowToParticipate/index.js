import React from 'react'
import './style.css'
import search from '../../assets/imgs/search.svg'
import time from '../../assets/imgs/time.svg'
import heart from '../../assets/imgs/heart.svg'


const HowToParticipate = () => (

    <section className="main_resources">

       <header className="main_resources_header">
           <h1>Como Participar</h1>
       </header>

      <article>
          <div><img className="icon" src={search} title="icon_search" alt="icon_search"></img></div>
          <p className="category">Triagem</p>
          <p className="description">
            A triagem é feita no Hospital do Câncer, lá é feita uma avaliação médica, psicológica, assistente social e valida a condição financeira, caso a paciente não seja encaminhada pelo Hospital do Câncer é necessário um laudo médico e comprovar que o tratamento foi realizado pelo SUS.
          </p>
      </article>


      <article>
          <div><img className="icon" src={time} title="icon_search" alt="icon_search"></img></div>
          <p className="category">Agendamento</p>
          <p className="description">
            Após a triagem são agendados data e horário, os agendamentos são feitos no primeiro dia útil de cada mês e os procedimentos são realizados  sábado pela manhã em data específica, são realizados três procedimentos por mês.
          </p>
      </article>

      <article>
          <div><img className="icon" src={heart} title="icon_search" alt="icon_search"></img></div>
          <p className="category">Realizar Procedimento</p>
          <p className="description">
          Os procedimentos realizados são sobrancelha e aréolas, feito  por profissionais de estética e estudantes da prof. de estética Yone Mendes.
          </p>
      </article>


    </section>

   

)

export default HowToParticipate