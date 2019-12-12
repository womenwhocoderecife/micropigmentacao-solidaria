import React from "react";
import "./style.css";
import woman1 from "../../assets/video1.png";

const ImpactedWomen = () => <section className="impactedwomen">
    
    <h1 className = "title">Mulheres Impactadas</h1>
     <div class= "Depoimento1">
       <div class = "container">
         <div>
           <img className= "image1" src = {woman1}/>
         </div>
         <div class = "content">
           <h2 className = "name">Nome</h2>
           <p className = "History">texto</p>
         </div>
       </div>
     </div>
    
    
    </section>;

export default ImpactedWomen;