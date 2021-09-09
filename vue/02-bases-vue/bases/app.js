const app = Vue.createApp({
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p> {{  }} </p>
    // `

    data(){
        return {
            // message: 'Hola mundo',
            quote: "Soy batman",
            author: "Bruce wayne "
        }
    },
    methods: {
        changeQuote( ){
            console.log('Hola mundo',)
            this.author = "Camilin pinguin"

            this.capitaliza()
         },
        
        capitaliza(){
            this.quote = this.quote.toUpperCase()
         }
    }
  
})

app.mount('#myApp')