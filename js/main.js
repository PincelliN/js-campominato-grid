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
    
    //dovendo creare più elementi utilizzo un ciclo for più indicato per valore di indice numerici
    for (let index = 0; index < 100; index++) {
        // variabili utilizata per i numeri che vanno inseriti nei box
        let element = index;

        console.log(element);
        //Rimuovo la classe hide alla tavola da gioco
        Container.classList.remove("hide");

        //variabile future celle
        const Box= document.createElement("div");

        //aggiungo la classe con le caratteristiche delle celle
        Box.classList.add("square");
        //inserisco l'index al interno
        Box.append(index);
        console.log(Box);
        //evento per i singoli click dei singoli box
        Box.addEventListener("click",function() {

            this.classList.add("click");
            
        })

           
      
        //stampo nel contenitore
        Container.append(Box)  ;
    }
    
})
