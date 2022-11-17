"use strict"

// let aux = 0;

//     let idTimeInterval = setInterval(() => {
//         let ceniza = document.createElement("div"); 

//         let ash = Math.random() - 0.5;

//         if(ash > 0){
//             ceniza.setAttribute("id","ash")
//         }else{
//             ceniza.setAttribute("id","ash1")
//         }
        
//         ceniza.style.background = "lightblue";
//         ceniza.style.position = "absolute";
//         ceniza.style.top = (Math.random() * 100 )+ "%";
//         ceniza.style.right = (Math.random() * 100 )+ "%";
//         ceniza.style.boxShadow = "1px 1px 7px 5px lightblue";
//         ceniza.style.zIndex = -1;
//         ceniza.style.opacity = Math.random();
        
//         document.body.append(ceniza);
//            aux++;
//     console.log(aux)
//     if(aux === 100)
//         clearInterval(idTimeInterval);
    
//     },500)

      let dios = document.getElementById("tarjeta");
      dios.style.visibility = "visible";

      let dios1 = document.getElementById("tarjeta2");
      dios1.style.visibility = "visible";
      let dios2 = document.getElementById("tarjeta3");
      dios2.style.visibility = "visible";
      let dios3 = document.getElementById("tarjeta4");
      dios3.style.visibility = "visible";
      let dios4 = document.getElementById("tarjeta5");
      dios4.style.visibility = "visible";
      
    function showCard(){
        let dios = document.getElementById("tarjeta");
        

        
        
     if(dios.style.visibility === "hidden"){
        dios.style.visibility = "visible"
     }else if(dios.style.visibility === "visible"){
        dios.style.visibility = "hidden"
     }
      
    }

    function showCard1(){
      let dios = document.getElementById("tarjeta2");
      

      
      
   if(dios.style.visibility === "hidden"){
      dios.style.visibility = "visible"
   }else if(dios.style.visibility === "visible"){
      dios.style.visibility = "hidden"
   }
    
  }

  function showCard2(){
   let dios = document.getElementById("tarjeta3");
   

   
   
if(dios.style.visibility === "hidden"){
   dios.style.visibility = "visible"
}else if(dios.style.visibility === "visible"){
   dios.style.visibility = "hidden"
}
 
}

function showCard3(){
   let dios = document.getElementById("tarjeta4");
   

   
   
if(dios.style.visibility === "hidden"){
   dios.style.visibility = "visible"
}else if(dios.style.visibility === "visible"){
   dios.style.visibility = "hidden"
}
 
}


function showCard4(){
   let dios = document.getElementById("tarjeta5");
   

   
   
if(dios.style.visibility === "hidden"){
   dios.style.visibility = "visible"
}else if(dios.style.visibility === "visible"){
   dios.style.visibility = "hidden"
}
 
}


   



