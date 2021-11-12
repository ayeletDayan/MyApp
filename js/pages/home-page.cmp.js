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
            <router-link to="/keep">
            <img class="keep-img" src="img/TheBest.jpg" @click="keep">
            </router-link>
        </section>
    `,
}