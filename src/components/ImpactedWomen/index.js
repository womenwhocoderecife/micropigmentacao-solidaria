import React from "react";
import "./style.css";
import woman1 from "../../assets/video1.png";
import woman2 from "../../assets/video2.png";

const ImpactedWomen = () => <section className="impactedwomen">
    
    <h1 className = "title">Mulheres Impactadas</h1>
     <div class= "Depoimento1">
       <div class = "container">
         <div>
           <img className= "image" src = {woman1}/>
         </div>
         <div class = "content">
           <h2 className = "name">Rose</h2>
           <p className = "History">Conheceu o projeto de Micropigmentação Soliária no Hospital do Câncer, recuperou sua autoestima após passar pelos procedimentos de micropgmentação da sobrancelha e disse que superou o tratamento contra o Câncer com mais facilidade, se sentindo linda!</p>
         </div>
       </div>
     </div>
    
    

     <div class= "Depoimento1">
       <div class = "container">
         <div>
           <img src = {woman2}/>
         </div>
         <div class = "content">
           <h2 className = "name">Nome</h2>
           <p className = "History">texto</p>
         </div>
       </div>
     </div>


    </section>;

export default ImpactedWomen;