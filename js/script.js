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
            stato: "inviato"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Ah Scusa!",
            stato: "inviato"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Tutto fatto!",
            stato: "ricevuto"
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
            stato: "inviato"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Mi piacerebbe ma devo andare in palestra!",
            stato: "ricevuto"
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
            stato: "inviato"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Ah scusa! Potresti portarmeli oggi?",
            stato: "ricevuto"
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
            stato: "inviato"
          },
          {
            data: "01/01/1970 00:00:00",
            text: "Si, ma preferirei andare al cinema!",
            stato: "ricevuto"
          },
        ] 
      },
    ],

    counter: 0,

  }
})