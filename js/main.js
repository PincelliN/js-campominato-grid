/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/ 


//variabile bottone

const WannaPlay= document.querySelector("button");

//variabile tavolo da gioco
const Container=document.getElementById("game-table");

//variabile select
const Difficult=document.querySelector("select");

// creo un evento che da origine a tutto

WannaPlay.addEventListener("click",function () {
    
     //aggiungo la classe hide al bottone
     WannaPlay.classList.add("hide");   
    //Rimuovo la classe hide alla tavola da gioco
        Container.classList.remove("hide");
   
    let Cell=CreatElementsAndClass(0,100,"div","square");
        //evento per i singoli click dei singoli box
        
         
        console.log(Cell);
        Cell.addEventListener("click",function () {
              
            Cell.classList.add("click");
        })
           
       
       
    }
    
)



//FUNZIONE


//dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici

function CreatElementsAndClass(min,max,tag,classe) {
  //dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici
  let cell;
    for (let index = min; index < max; index++) {
        // variabili utilizata per i numeri che vanno inseriti nei box
        let element = index;

        console.log(element);
        
        //variabile future celle
         let Box= document.createElement(tag);
       
        //aggiungo la classe con le caratteristiche delle celle
        Box.classList.add(classe);
       
        //inserisco l'index al interno
        Box.append(index);
        
        cell+=Box;
        Container.appendChild(Box);
     
    }
      return cell
}


    