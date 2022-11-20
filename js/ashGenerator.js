"use strict"


// ASH GENERATOR
let aux = 0;

    let idTimeInterval = setInterval(() => {
        let ceniza = document.createElement("div"); 

        let ash = Math.random() - 0.5;

        if(ash > 0){
            ceniza.setAttribute("id","ash")
        }else{
            ceniza.setAttribute("id","ash1")
        }
        
        ceniza.style.background = "lightblue";
        ceniza.style.position = "absolute";
        ceniza.style.top = (Math.random() * 100 )+ "%";
        ceniza.style.right = (Math.random() * 100 )+ "%";
        ceniza.style.boxShadow = "1px 1px 7px 5px lightblue";
        ceniza.style.zIndex = -1;
        ceniza.style.opacity = Math.random();
        
        document.body.append(ceniza);
           aux++;
    // console.log(aux)
    if(aux === 100)
        clearInterval(idTimeInterval);
    
    },500)

    