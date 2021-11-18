
d = new Date();
const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;


 let doubleDigitMin = d.getSeconds().toLocaleString('en-US', {
   minimumIntegerDigits: 2,
   useGrouping: false
 })

 
 console.log(
   'Output:   ' + doubleDigitMin
 )



const app = new Vue({
  el: "#app",

  data: {

    contacts: 
    [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        visible: true,
        messages: 
        [
          {
            data: "01/01/1970 00:00:00",
            text: "Hai portato a spasso il cane?",
            stato: "chat-user"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Ah Scusa!",
            stato: "chat-client"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Tutto fatto!",
            stato: "chat-user"
          },
        ] 
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        visible: true,
        messages: 
        [
          {
            data: "01/01/1970 00:00:00",
            text: "Lollatina??",
            stato: "chat-client"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Mi piacerebbe ma devo andare in palestra!",
            stato: "chat-user"
          },
        ] 
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        visible: true,
        messages: 
        [
          {
            data: "01/01/1970 00:00:00",
            text: "Ti sei dimenticato i soldi da me",
            stato: "chat-client"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Ah scusa! Potresti portarmeli oggi?",
            stato: "chat-user"
          },
        ] 
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        visible: true,
        messages: 
        [
          {
            data: "01/01/1970 00:00:00",
            text: "Oggi puoi uscire? Andiamo al cinema?",
            stato: "chat-client"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Si, ma preferirei andare al cinema!",
            stato: "chat-user"
          },
        ] 
      },
    ],

    counter: 0,
    //variabile in cui all'inteno viene scritto il messaggio da inviare
    toSend: '',
    clock: null,
    //variabile in cui all'inteno viene scritto il nome da cercare
    searchClient: ""

  },

  methods: {

    //Funzione che utilizzo per inviare il messaggio
    msgSend() {

       if (this.toSend.trim() !== '') {

          let time = '';
          time = this.getDate(time);
          
          const msgStr = {
            data: '01/01/1970 ' + time,
            text: this.toSend,
            stato: 'chat-user'
          }
    
          this.contacts[this.counter].messages.push(msgStr);
          this.msgAuto()
          //serve a ripulire l'input-text
          this.toSend = '';
       } else {
          console.log('error');
       }

       
       
    },
    //funzione che utilizzo per inviare il mesaggio di risposta dopo n secondi
    msgAuto(){
      this.clock = setTimeout(()=>{
        this.msgRecived();
      },1000)
    },

    //Funzione che effettua la risposta in automatico
    msgRecived() {

      let time = '';
      time = this.getDate(time);

      const msgStr = {
        data: '01/01/1970 ' + time,
        text: "Ok.",
        stato: "chat-client"
      }

      this.contacts[this.counter].messages.push(msgStr);

   },

   //Funzione per aggiornare l'ora in cui è stato mandato il messaggio
    getDate(d) {
       d = new Date();
      //Utilizzo per mostrare sempre due cifre
       let doubleDigitSec = d.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      })

      let doubleDigitMin = d.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      })

      let doubleDigitHou = d.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      })

       const time = `${doubleDigitHou}:${doubleDigitMin}:${doubleDigitSec}`;

       // console.log(time);

       return time;
    }
 }
})
