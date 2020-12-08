import React from "react";
import "./style.css";

const Faq = () => {

  const faqs = [
    {
      question: "o que é e como funciona?",
      answer: " A micropigmentação de aréola, também chamada de maquiagem paramédica permite fazer uma pigmentação na região, valorizando o seio. O pigmento é implantado na derme papilar, camada superficial da derme, e em função do peso molecular adequado, não atinge as camadas mais profundas, como acontece com as tatuagens. \n\n Geralmente, o pigmento utilizado é de ótima qualidade e apropriado para o trabalho específico, que não deriva para outro tom como acontecia antes. Durante o procedimento, é usado um dermógrafo, equipamento utilizado especialmente para a micropigmentação, com peso e design mais apropriados à delicadeza que o trabalho exige."
    },
    {
      question: "benefícios da técnica",
      answer: "O trabalho realizado na micropigmentação de aréola valoriza o traço natural desta região, principalmente quando ocorrem os casos de mastectomia ou acidentes, permitindo assim um novo desenho de aréola. \n\nO método é bastante recomendado por cirurgiões, não apenas nos casos de mastectomia ou correção da cicatriz, mas também para aumentar aréolas que são naturalmente menores, e intensificar a cor, caso sejam muito claras.\n\nO procedimento é bastante acessível, simples e rápido, levando cerca de 1 hora para ser finalizado (em cada seio). Os resultados variam de pessoa para pessoa. A técnica possui o principal objetivo de elevar a autoestima feminina."
    },
    {
      question: "é seguro realizar o procedimento?",
      answer: "Se as orientações de desinfecção e esterilização forem cumpridas de forma adequada, a micropigmentação é totalmente segura.Os principais passos para manter o bem estar do cliente e do profissional são: \n\nUtilizar agulhas novas e esterilizadas para cada cliente e procedimento, devendo abri-las na frente dele; \n\nTodos os itens descartáveis devem ser eliminados de forma adequada e imediata em recipientes específicos para esse tipo de material após o procedimento; \n\nUso dos equipamentos de proteção individual (EPIs). Luvas, máscaras, aventais, toucas devem ser descartáveis e trocados em cada atendimento. \n\nO local em que o atendimento será realizado deve ser limpo com freqüência para evitar qualquer possibilidade de contaminação."
    },
    {
      question: "quem pode fazer? tem contra-indicações?",
      answer: "Pacientes que tenham concluído todo o tratamento e com autorização médica. Todos que procuram uma melhoria suave e natural para sua aparência encontram na micropigmentação uma solução rápida eficiente, podendo a maioria das pessoas se submeter à técnica. \n\nPorém o procedimento é contra-indicado para quem tem diabetes, hemofilia, câncer de pele, herpes labial, alergias tópicas, urticária física, portadores de marca-passo, grávidas e para quem tem propensão a desenvolver quelóides."
    },
    {
      question: "quanto tempo dura a micropigmentação?",
      answer: "Em média a micropigmentação dura de 1 a 2 anos, mas esse tempo pode aumentar ou diminuir  dependendo do tipo de pele e dos cuidados do cliente."
    },
    {
      question: "estes procedimentos causam dor?",
      answer: "O procedimento é quase indolor, a maioria das pessoas relatam sentir um leve desconforto, mas isso dependerá da sensibilidade de cada um. E hoje em dia existem anestésicos à base de lidocaína utilizados pelos micropigmentadores para diminuir o desconforto que possa ser causado durante o procedimento."
    },
    {
      question: "e a cor?",
      answer: "Será escolhida de acordo com a cor natural da outra aréola ou com a cor da pele da cliente."
    },
    {
      question: "os pigmentos causam alergia?",
      answer: "As pessoas podem desenvolver uma alergia a qualquer coisa, a qualquer hora. No entanto, alergias de pigmento são consideradas raras. Ainda assim, recomenda-se que seja feito um teste antes de realizar o procedimento, aplicando uma pequena quantidade do pigmento atrás da orelha e verifique se o seu micropigmentador  utiliza material registrado pela ANVISA."
    },
    {
      question: "é preciso fazer retoque?",
      answer: "Sim. Muitas vezes a cor não fica perfeita após o processo de cicatrização. Por esse motivo é indicado pelo menos um retoque depois de 30 dias. E posteriormente é necessário fazer o retoque para realce da cor."
    },
    {
      question: "quais os cuidados?",
      answer: "Evitar molhar por 24hs, proteger a área com uma gaze, só lavar com sabonete neutro e seguir todas as orientações do profissional."
    },
    {
      question: "tem algum custo?",
      answer: "Não, o procedimento é realizado sem nenhum custo para a pessoa que não disponha de recursos para pagar por esse procedimento."
    }
  ];

  return (<section className="faq" id="faq">

    <header className="faq_header">
      <h2>faq</h2>
    </header>

    <ul className="faq_list">
      {
        faqs.map(faq => (
          <li className="faq_item"
            key={Math.random()} >
            <details className="faq_details">
              <summary className="faq_question">{faq.question}</summary>
              <p className="faq_answer">{faq.answer}</p>
            </details>
          </li>
        )
        )
      }

    </ul>

  </section>);
}
export default Faq;