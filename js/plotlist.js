let navbar = document.querySelector('nav'); // nav
let logoImage = document.querySelector('#logo-img'); //image 
let listHeader = document.querySelector('#list-header') // li


window.onload = () => {
   
    setTimeout(()=> {
        navbar.style.transform = "translate(0,0)";
        navbar.style.transition = "all 0.5s ease-in-out";
    },100)
}

/* -----------

start scroll styling

-----------*/
window.onscroll = ()=> {

    navbar.style.backgroundColor = "#FFF"; /* navbar background changed on scroll*/ 
    navbar.style.transition = "all 0.5s ease-in-out";
    navbar.style.padding = "10px"; /* reduce the padding of the navnar*/ 
    navbar.style.border = "none"; /* reset the border of the navbare */
    navbar.style.boxShadow = "0px 0px 6px #00000063"; 
    logoImage.setAttribute('src','./images/black-logo.png'); /* change the logo of the navbar*/

   /*loop inside the anchors*/ for (let i = 1; i<4; i+=1){  /* chang the text color od anchors when onscroll*/
        listHeader.children[i].style.color = "#000";

        /* hocer section*/
        listHeader.children[i].onmouseover = () => { /* hover */

            listHeader.children[i].style.color= "var(--maincolor)"

        }
        listHeader.children[i].onmouseout = () => { /*out*/

            listHeader.children[i].style.color= "#000";

        }

    } 

    /* last children has specifc styling*/
    listHeader.lastElementChild.style.backgroundColor = "var(--maincolor)"; /*change back ground color */
    listHeader.lastElementChild.children[1].style.color = "#FFF"; /* text span */
    listHeader.lastElementChild.children[0].style.backgroundColor = "#FFF"; /* icons */
    listHeader.lastElementChild.children[0].style.color = "var(--maincolor)"; /*icon color */

    /*  end hover section */

    
    /*--------------------------ScrollTop0----------------------------*/

    if (window.pageYOffset ===0 ){

        /* nabar section when scrollTop === 0 */
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "all 0.5s ease-in-out";
        navbar.style.padding = "20px";
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.226)"
        logoImage.setAttribute('src','./images/white-logo.png');
        navbar.style.boxShadow = "none"; 

        /* loop iside the li childrens (anchors) */
        for (let i = 1; i<4; i+=1){
            listHeader.children[i].style.color = "#FFF"; /* anchors index [1,223]*/
            listHeader.children[i].onmouseover = () => { /* hover*/

                listHeader.children[i].style.color= "var(--maincolor)"

            }
            listHeader.children[i].onmouseout = () => { /* out */
    
                listHeader.children[i].style.color= "#FFF"
    
            }
        
        }

        listHeader.lastElementChild.addEventListener("mouseover",()=>{
            listHeader.lastElementChild.style.backgroundColor = "var(--maincolor)";
            listHeader.lastElementChild.children[1].style.color = "#FFF";
    
        })

        listHeader.lastElementChild.addEventListener("mouseout",()=>{
            listHeader.lastElementChild.style.backgroundColor = "#FFF";
            listHeader.lastElementChild.children[1].style.color = "#000";
    
        })
    
        
        listHeader.lastElementChild.style.backgroundColor = "#FFF"
        listHeader.lastElementChild.children[1].style.color = "var(--textColor)"
        listHeader.lastElementChild.children[0].style.backgroundColor = "var(--maincolor)"
        listHeader.lastElementChild.children[0].style.color = "#FFF";
       
    }
}

/* -----------

end scroll styling

-----------*/

/* slider number 1 */
let buttn = document.querySelector('.btni').children;
let descFlex = document.querySelectorAll('.desc-flex')

for (let b=0; b<buttn.length; b++){

    buttn[b].onclick = ()=> {

        buttn[b].style.backgroundColor ="#041025d3";
        
        if (b === 0) {
            for (let f=1;f<=buttn.length-1;f++){
            buttn[f].style.backgroundColor ="var(--maincolor)";

        }

    } else if (b===1){

        for (let f=0;f<=buttn.length-1;f++){

            if (f === 1) continue;
            buttn[f].style.backgroundColor ="var(--maincolor)";
            
        }

    }else if (b===2){

        for (let f=0;f<=buttn.length-1;f++){

            if (f === 2) continue;
            buttn[f].style.backgroundColor ="var(--maincolor)";
            
        }

    }else if (b===3){

        for (let f=0;f<=buttn.length-1;f++){

            if (f === 3) continue;
            buttn[f].style.backgroundColor ="var(--maincolor)";
            
        }

    }else if (b===4){

        for (let f=0;f<=buttn.length-1;f++){

            if (f === 4) continue;
            buttn[f].style.backgroundColor ="var(--maincolor)";
            
        }

    }
}
}    

for (let i = 0; i<buttn.length ; i++ ) {

    buttn[i].addEventListener("click" , () =>{

       if (i === 1){
            descFlex[2].style.animation= "animate1 0.5s 1 linear"
            descFlex[2].style.transition= "opacity 0.5s ease-in-out"
            descFlex[2].style.opacity= "0";

    /* first div styling */
            descFlex[4].style.animation= "animate 0.5s 1 linear"
            descFlex[4].style.opacity= "0"
            descFlex[4].style.transition= "opacity 0.5s ease-in-out"

    /*second div styling */
            descFlex[3].style.animation= "animate 0.5s 1 linear"
            descFlex[3].style.opacity= "1"
            descFlex[3].style.transition= "opacity 0.5s ease-in-out"
            descFlex[3].style.backgroundColor= "var(--myColor)"
            descFlex[3].style.top= "0";
            descFlex[3].children[0].children[1].style.color = "#dbdada";
            descFlex[3].children[0].children[2].children[0].style.backgroundColor = "var(--maincolor)";
            descFlex[3].children[0].children[2].children[1].style.color = "#000";
            descFlex[3].children[1].children[0].style.width = "455px";
            descFlex[3].children[1].children[0].style.height = "540px"  

       }else if (i===0){
        
    /* second div styling */       
            descFlex[3].style.top= " 650px";
            descFlex[3].style.animation= " animate3 0.5s 0.2s 1 linear ";
            descFlex[3].style.opacity= "0";
            descFlex[3].style.transition= "opacity 0.5s linear";
            descFlex[3].style.backgroundColor= "transparent";
            descFlex[3].children[0].children[1].style.color = "#FFF";
            descFlex[3].children[0].children[2].children[0].style.backgroundColor = "#FFF";
            descFlex[3].children[0].children[2].children[1].style.color = "#FFF";
            descFlex[3].children[1].children[0].style.width = "455px";
            descFlex[3].children[1].children[0].style.height = "380px"
    /* first div styling */
            descFlex[4].style.animation= "animate1 0.5s 1 linear"
            descFlex[4].style.opacity= "1"
            descFlex[4].style.transition= "opacity 0.2s ease-in-out"  

       }else if (i === 2) {
           
            descFlex[2].style.animation= "animate3 0.5s 1 linear"
            descFlex[2].style.opacity= "1"
            descFlex[2].style.transition= "opacity 0.5s ease-in-out"
            descFlex[2].style.top= " 0"
            descFlex[2].style.backgroundColor= "var(--myColor)";
            descFlex[2].children[0].children[1].style.color = "#dbdada";
            descFlex[2].children[0].children[2].children[0].style.backgroundColor = "var(--maincolor)";
            descFlex[2].children[0].children[2].children[1].style.color = "#000";
            descFlex[2].children[1].children[0].style.width = "455px";
            descFlex[2].children[1].children[0].style.height = "540px"  
            /* div normal styling */
            descFlex[3].style.animation= "animate3 0.5s 1 linear"
            descFlex[3].style.opacity= "0"
            descFlex[3].style.transition= "opacity 0.5s ease-in-out"
            descFlex[3].style.top= "0";

            descFlex[4].style.animation= "animate3 0.5s 1 linear"
            descFlex[4].style.opacity= "0"
            descFlex[4].style.transition= "opacity 0.5s ease-in-out"
            descFlex[4].style.top= "0"
              /* third div connected to third button */
         // buuton3
    
            if(descFlex[2].style.opacity === "1") {

                buttn[0].addEventListener('click', ()=> {
                    descFlex[2].style.top= " 650px" 
                    descFlex[2].style.animation= "animate1 0.5s 0.2s 1 linear ";
                    descFlex[2].style.opacity= "0";
                    descFlex[2].style.transition= "opacity 0.5s s linear";
                    descFlex[2].style.backgroundColor= "transparent";})

                buttn[1].addEventListener('click', ()=>{       
                    descFlex[2].style.top= " 650px" 
                    descFlex[2].style.animation= "animate4 0.5s 0.2s 1 linear ";
                    descFlex[2].style.opacity= "0";
                    descFlex[2].style.transition= "opacity 0.5s s linear";
                    descFlex[2].style.backgroundColor= "transparent";
                    descFlex[2].children[0].children[1].style.color = "#FFF";
                    descFlex[2].children[0].children[2].children[0].style.backgroundColor = "#FFF";
                    descFlex[2].children[0].children[2].children[1].style.color = "#FFF";
                    descFlex[2].children[1].children[0].style.width = "455px";
                    descFlex[2].children[1].children[0].style.height = "380px"
                })}   
        
       }else if (i === 3) {


            descFlex[1].style.animation= "animate3 0.5s 1 linear"
            descFlex[1].style.opacity= "1"
            descFlex[1].style.transition= "opacity 0.5s ease-in-out"
            descFlex[1].style.top= "0";
            descFlex[1].children[0].children[1].style.color = "#dbdada";
            descFlex[1].children[0].children[2].children[0].style.backgroundColor = "var(--maincolor)";
            descFlex[1].children[0].children[2].children[1].style.color = "#000";
            descFlex[1].children[1].children[0].style.width = "455px";
            descFlex[1].children[1].children[0].style.height = "540px"  

            descFlex[2].style.animation= "animate4 0.5s 1 linear"
            descFlex[2].style.opacity= "0"
            descFlex[2].style.transition= "opacity 0.5s ease-in-out"

            descFlex[3].style.animation= "animate3 0.5s 1 linear"
            descFlex[3].style.opacity= "0"
            descFlex[3].style.transition= "opacity 0.5s ease-in-out"
            descFlex[3].style.top= "0"

            descFlex[4].style.animation= "animate 0.5s 1 linear"
            descFlex[4].style.opacity= "0"
            descFlex[4].style.transition= "opacity 0.5s ease-in-out"
            descFlex[4].style.top= "0"

            if(descFlex[1].style.opacity === "1") {
                buttn[0].addEventListener('click', ()=>{       
                descFlex[1].style.top= " 650px" 
                descFlex[1].style.animation= "animate1 0.5s 0.2s 1 linear ";
                descFlex[1].style.opacity= "0";
                descFlex[1].style.transition= "opacity 0.5s s linear";
                descFlex[1].style.backgroundColor= "transparent";})
                //------------------------------
                buttn[1].addEventListener('click', ()=>{       
                descFlex[1].style.top= " 650px" 
                descFlex[1].style.animation= "animate2 0.5s 0.2s 1 linear ";
                descFlex[1].style.opacity= "0";
                descFlex[1].style.transition= "opacity 0.5s s linear";
                descFlex[1].style.backgroundColor= "transparent";})
                // -------------------------------------------
                buttn[2].addEventListener('click', ()=>{       
                descFlex[1].style.top= " 650px" 
                descFlex[1].style.animation= "animate4 0.5s 0.2s 1 linear ";
                descFlex[1].style.opacity= "0";
                descFlex[1].style.transition= "opacity 0.5s s linear";
                descFlex[1].style.backgroundColor= "transparent";
                descFlex[1].children[0].children[1].style.color = "#FFF";
                descFlex[1].children[0].children[2].children[0].style.backgroundColor = "#FFF";
                descFlex[1].children[0].children[2].children[1].style.color = "#FFF";
                descFlex[1].children[1].children[0].style.width = "455px";
                descFlex[1].children[1].children[0].style.height = "380px"    
            })

        }   } else {
            
                descFlex[0].style.opacity = "1"
                descFlex[0].style.transition = "opacity 0.5s ease-in-out";
                descFlex[0].style.animation= "animate 0.5s 1 linear ";
                descFlex[0].style.top= "0px";
                descFlex[0].style.backgroundColor= "var(--myColor)";
                descFlex[0].children[0].children[1].style.color = "#dbdada";
                descFlex[0].children[0].children[2].children[0].style.backgroundColor = "var(--maincolor)";
                descFlex[0].children[0].children[2].children[1].style.color = "#000";
                descFlex[0].children[1].children[0].style.width = "455px";
                descFlex[0].children[1].children[0].style.height = "540px"  
                descFlex[1].children[1].children[0].style.width = "455px";
                descFlex[1].children[1].children[0].style.height = "540px"  

                descFlex[1].style.opacity= "0"
                descFlex[1].style.transition= "opacity 0.5s ease-in-out"
                descFlex[1].style.animation= "animate5 0.5s 1 linear"

                descFlex[2].style.animation= "animate4 0.5s 1 linear"
                descFlex[2].style.opacity= "0"
                descFlex[2].style.transition= "opacity 0.5s ease-in-out"
    
                descFlex[3].style.animation= "animate3 0.5s 1 linear"
                descFlex[3].style.opacity= "0"
                descFlex[3].style.transition= "opacity 0.5s ease-in-out"
                descFlex[3].style.top= "0"
    
                descFlex[4].style.animation= "animate 0.5s 1 linear"
                descFlex[4].style.opacity= "0"
                descFlex[4].style.transition= "opacity 0.5s ease-in-out"
                descFlex[4].style.top= "0";

                if( descFlex[0].style.opacity === '1') {

                    buttn[0].addEventListener('click', ()=>{       
                        descFlex[0].style.top= " 650px" 
                        descFlex[0].style.animation= "animate1 0.5s 0.2s 1 linear ";
                        descFlex[0].style.opacity= "0";
                        descFlex[0].style.transition= "opacity 0.5s s linear";
                        descFlex[0].style.backgroundColor= "transparent";})
                        //------------------------------
                    buttn[1].addEventListener('click', ()=>{       
                        descFlex[0].style.top= " 650px" 
                        descFlex[0].style.animation= "animate2 0.5s 0.2s 1 linear ";
                        descFlex[0].style.opacity= "0";
                        descFlex[0].style.transition= "opacity 0.5s s linear";
                        descFlex[0].style.backgroundColor= "transparent";})
                        // -------------------------------------------
                    buttn[2].addEventListener('click', ()=>{       
                        descFlex[0].style.top= " 650px" 
                        descFlex[0].style.animation= "animate4 0.5s 0.2s 1 linear ";
                        descFlex[0].style.opacity= "0";
                        descFlex[0].style.transition= "opacity 0.5s s linear";
                        descFlex[0].style.backgroundColor= "transparent";})
                              // -------------------------------------------
                    buttn[3].addEventListener('click', ()=>{       
                        descFlex[0].style.top= " 650px" 
                        descFlex[0].style.animation= "animate4 0.5s 0.2s 1 linear ";
                        descFlex[0].style.opacity= "0";
                        descFlex[0].style.transition= "opacity 0.5s s linear";
                        descFlex[0].style.backgroundColor= "transparent";
                        descFlex[0].children[0].children[1].style.color = "#FFF";
                        descFlex[0].children[0].children[2].children[0].style.backgroundColor = "#FFF";
                        descFlex[0].children[0].children[2].children[1].style.color = "#FFF";
                        descFlex[0].children[1].children[0].style.width = "455px";
                        descFlex[0].children[1].children[0].style.height = "380px"  
                    })
                }
            }  
    })   
} 
//mistakes
/* i must used visibility hidden when  was trying to hide the div when it's get down */

const parent = document.querySelector(".list-box-parent"); 
let child = document.querySelectorAll(".list-box");
let index = 1;
const interval = 4000;
let setint;

const firstClone = child[0].cloneNode(true)
const secondClone = child[child.length-1].cloneNode(true)

firstClone.setAttribute('id',"first-clone")
secondClone.setAttribute('id',"second-clone")
parent.append(firstClone)
parent.prepend(secondClone)

const slideWidth = child[index].clientWidth

parent.style.transform = `translatex(${-slideWidth * index}px)`

const starteSlide = ()=> {
    setint= setInterval(() => {
        index++;
        parent.style.transform = `translatex(${-slideWidth * index}px)`
        parent.style.transition = "all 0.8s ease-in-out"
    }, interval);
}

parent.addEventListener('transitionend',()=>{
    child = document.querySelectorAll(".list-box");
    if(child[index].id === firstClone.id) {
        parent.style.transition = "none"
        index = 1
        parent.style.transform = `translatex(${-slideWidth * index}px)`
    }
})
starteSlide()


console.table("%cwarning you cant hack this site.", "color:red; font-size:80px; text-transform:uppercase")


console.log(parent.children)