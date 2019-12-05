import React from "react"; 
import "./style.css";



const ImpactedWomen = () => (
 <impactedWomen className="impactedWomen">
   <div class ="Container">
     <h1>Mulheres Impactadas</h1>
     <div class= "Depoimento1">
       <div class = "container">
         <div>
           <img src = "/home/keila/Documentos/github/micropigmentacao-solidaria/assets/image.png"/>
         </div>
         <div class = "content">
           <h2>Nome</h2>
           <p>texto</p>
         </div>
       </div>
     </div>

     <div class= "Depoimento2">
       <div class = "container">
         <div>
           <img src = {"/home/keila/Documentos/github/micropigmentacao-solidaria/assets/jane.png"}/>
         </div>
         <div class = "content">
           <h2>Nome</h2>
           <p>texto</p>
         </div>
       </div>
     </div>

   </div>
  </impactedWomen>);

export default ImpactedWomen;
