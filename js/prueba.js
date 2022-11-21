"use strict"

// GODS SHOW UP

      // let dios1 = document.getElementById("tarjeta1");
      // let dios2 = document.getElementById("tarjeta2");
      // let dios3 = document.getElementById("tarjeta3");
      // let dios4 = document.getElementById("tarjeta4");
      // let dios5 = document.getElementById("tarjeta5");

      // dios1.setAttribute("class","zero");
      

      // dios1.addEventListener("click", () => {
      //    dios1.removeAttribute("class","notVisible");

           
      //       if(dios1.getAttribute("class")){
      //          dios1.setAttribute("class","notVisible");
      //          aux++;
      //       }else{
      //          dios1.setAttribute("class","visible");
      //          aux--;
      //       }
      // }) 
   
      





//  MOSTRAR ATAQUES RÚNICOS 
   




window.addEventListener("keydown", (e) => {

   const btnL2 = document.getElementById("L2")
   const btnl2 = document.getElementById("l2")
   const btnR2 = document.getElementById("R2")
   const btnR1 = document.getElementById("R1")

      btnL2.setAttribute("class","displayNone");
      btnl2.setAttribute("class","displayNone");
      btnR2.setAttribute("class","displayNone");
      btnR1.setAttribute("class","displayNone");

      const keyCode1 =  [49,97];
      const keyCode2 =  [50,98];
      const keyCode0 =  [48,96];

      console.log(e.keyCode);
      if(e.keyCode === keyCode1[0] || e.keyCode === keyCode1[1]){
         btnR2.setAttribute("class","displayFlex");
         btnL2.setAttribute("class","displayFlex");
      }else if(e.keyCode === keyCode2[0] || e.keyCode === keyCode2[1]){
         btnR1.setAttribute("class","displayFlex");
         btnl2.setAttribute("class","displayFlex");
      }else if(e.keyCode === keyCode0[0] || e.keyCode === keyCode0[1]){
         btnR2.setAttribute("class","displayFlex");
         btnL2.setAttribute("class","displayFlex");
         btnR1.setAttribute("class","displayFlex");
         btnl2.setAttribute("class","displayFlex");
      }else{
         btnR2.setAttribute("class","displayFlex");
         btnL2.setAttribute("class","displayFlex");
         btnR1.setAttribute("class","displayFlex");
         btnl2.setAttribute("class","displayFlex");
      }


});
