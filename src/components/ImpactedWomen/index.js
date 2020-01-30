import React from "react";
import "./style.css";
<<<<<<< HEAD



=======
import woman1 from "../../assets/video1.png";
import woman2 from "../../assets/video2.png";
>>>>>>> 84b4f70c29311aa9fbf1e0baadab4b2852969496

const ImpactedWomen = () => <section className="impactedwomen">
    
    <h1 className = "title">Mulheres Impactadas</h1>
     
       <div class = "container">
         <div>
<<<<<<< HEAD
         <video width="400" type="video/MP4" className= "image" src = "../../assets/video1.MP4" alt = "img rose"></video>
         </div>
         <div class = "content">
           <h2 className = "name">Rose</h2>
           <p className = "content_Description">Conheceu o projeto de Micropigmentação Soliária no Hospital do Câncer, recuperou sua autoestima após passar pelos procedimentos de micropgmentação da sobrancelha e disse que superou o tratamento contra o Câncer com mais facilidade, se sentindo linda!</p>
=======
           <img className= "image" src = {woman1} alt = "img rose"/>
         </div>
         <div class = "content">
           <h2 className = "name">Rose</h2>
           <p className = "History">Conheceu o projeto de Micropigmentação Soliária no Hospital do Câncer, recuperou sua autoestima após passar pelos procedimentos de micropgmentação da sobrancelha e disse que superou o tratamento contra o Câncer com mais facilidade, se sentindo linda!</p>
>>>>>>> 84b4f70c29311aa9fbf1e0baadab4b2852969496
         </div>
       </div>
     
    
    

     
       <div class = "container">
         <div>
<<<<<<< HEAD
         <video width="400" type="video/MP4" className= "image" src = "../../assets/video2.MP4" alt = "img rose"></video>
         </div>
         <div class = "content">
           <h2 className = "name">Jane</h2>
           <p className = "content_Description">Não sabia que era possível fazer a reconstrução de auréola e ficou encantada com o projeto, disse que com essa iniciativa voltou a ter autoestima, a ser mulher, a viver!</p>
=======
           <img className="image" src = {woman2} alt = "img jane"/>
         </div>
         <div class = "content">
           <h2 className = "name">Jane</h2>
           <p className = "History">Não sabia que era possível fazer a reconstrução de auréola e ficou encantada com o projeto, disse que com essa iniciativa voltou a ter autoestima, a ser mulher, a viver!</p>
>>>>>>> 84b4f70c29311aa9fbf1e0baadab4b2852969496
         </div>
       </div>
     


    </section>;

export default ImpactedWomen;