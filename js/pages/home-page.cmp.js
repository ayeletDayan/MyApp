export default {
    template:`
        <section class="home-page">
            <h3>Welcome to our App</h3>
            <img class="books-img" src="img/books-wall.jpg" @click="books">            
            <img class="mail-img" src="img/mail.png" @click="mail">
            <img class="keep-img" src="img/TheBest.jpg" @click="keep">
            <div v-if="isBooks">
            <router-link to="/books"></router-link>            
            </div>
            <div v-if="isKeep">
            <router-link to="/keep"></router-link>
            </div> 
            <div v-if="isMail">
            <router-link to="/mail"></router-link>
            </div>  

        </section>
    `,
     data() {
        return {
            isBooks: false,
            isKeep: false,
            isMail: false
        };
    },
    methods:{
        books(){
            this.isBooks = true;
            console.log(this.isBooks)
        },
        mail(){
            this.isMail = true;           
        },
        keep(){
            this.isKeep = true;
        }
    }
}