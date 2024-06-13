/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/ 


//variabile bottone

const WannaPlay= document.querySelector("button");

//variabile tavolo da gioco
const Container=document.getElementById("game-table");

//variabile select
const Level= document.querySelector("select");

// creo un evento che da origine a tutto

WannaPlay.addEventListener("click",function () {

    // variabile valore livello selezionato
    const Difficult=document.querySelector("select").value;
     //aggiungo la classe hide al bottone e alla select
     Level.classList.add("hide");

     WannaPlay.classList.add("hide");   
    //Rimuovo la classe hide alla tavola da gioco
        Container.classList.remove("hide");
   if (Difficult==2) {
    CreatElementsAndClass(0, 100, "div", "square", "veteran", "click");
   } else if (Difficult ==1) {
    CreatElementsAndClass(0, 81, "div", "square", "soldier", "click");
   } else {
    CreatElementsAndClass(0, 49, "div", "square", "recluta", "click");
   }
    
   
    
        //evento per i singoli click dei singoli box
        
         
      
    

       
    }
    
)



//FUNZIONE


//dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici

function CreatElementsAndClass(min,max,tag,classe,classe2,classe3) {
  //dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici
  
    for (let index = min; index < max; index++) {
        // variabili utilizata per i numeri che vanno inseriti nei box
        let element = index;

        console.log(element);
        
        //variabile future celle
         let Box= document.createElement(tag);
       
        //aggiungo la classe con le caratteristiche delle celle
        Box.classList.add(classe ,classe2);
       
        //inserisco l'index al interno
        Box.append(index);
        // aggiungo un evento per aggiugere una seconda classe in caso di click
        Box.addEventListener("click",function () {

                this.classList.add(classe3);
            
        })

       //stampo tutto
        Container.appendChild(Box);
     
    }
    
}


    