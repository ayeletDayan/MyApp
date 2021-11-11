export default {
    template: `
        <section class="home-page">
            <h3>Welcome to our App</h3>
            <router-link to="/books">
                <img class="books-img" src="img/books-wall.jpg" @click="books">            
            </router-link>      

            <router-link to="/mail">
            <img class="mail-img" src="img/mail.png" @click="mail">
        </router-link>
                <img class="keep-img" src="img/TheBest.jpg" @click="keep">
            <!-- <div v-if="isBooks">
                </div> -->
                <!-- <div v-if="isKeep"> -->
            <router-link to="/keep"></router-link>
            <!-- </div> 
            <div v-if="isMail"> -->
            <!-- </div>   -->

        </section>
    `,
    data() {
        return {
            isBooks: false,
            isKeep: false,
            isMail: false
        };
    },
    methods: {
        books() {
            this.isBooks = true;
            console.log(this.isBooks)
        },
        mail() {
            this.isMail = true;
        },
        keep() {
            this.isKeep = true;
        }
    }
}