const {createApp}= Vue;

createApp({


  data(){

    return{

      mailArray:[],
      url: 'https://flynn.boolean.careers/exercises/api/random/mail'


    }


  },

  methods:{

    getApis(){

      for (let index = 0; index < 10; index++) {

        axios.get(this.url)
        .then( (risposta) => {
          
          this.mailArray.push(risposta.data.response);
        
        })  
        .catch( (errore) => {
          console.log(errore);
        })
  
        
      }
      
    }
    
    

  },

  mounted(){

    this.getApi()

  }



}).mount('#app');




