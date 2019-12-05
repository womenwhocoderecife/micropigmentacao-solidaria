import React from "react"; 
import "./style.css";



const ImpactedWomen = () => (
 <impactedWomen className="impactedWomen">
  
     <h1 className = "title">Mulheres Impactadas</h1>
     <div class= "Depoimento1">
       <div class = "container1">
         <div>
           <img className= "image" src = "/home/keila/Documentos/github/micropigmentacao-solidaria/assets/image.png"/>
         </div>
         <div class = "content">
           <h2 className = "name">Nome</h2>
           <p className = "about">texto</p>
         </div>
       </div>
     </div>  

     <div class= "Depoimento2">
       <div class = "container2">
         <div>
           <img className= "image" src = {"/home/keila/Documentos/github/micropigmentacao-solidaria/assets/jane.png"}/>
         </div>
         <div class = "content">
           <h2 className= "name">Nome</h2>
           <p className="about">texto</p>
         </div>
       </div>
     </div>

   
  </impactedWomen>);

export default ImpactedWomen;
