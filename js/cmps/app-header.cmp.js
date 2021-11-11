export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h3>MyApp</h3>
            </div>
            <nav>
                <router-link to="/" active-class="active-link" exact>Home</router-link> |
                <router-link to="/mail">Mail</router-link>  |
                <router-link to="/keep">Keep</router-link> |
                <router-link to="/books">Books</router-link> |
                <router-link to="/about">About</router-link>
                <button v-on:click="onApp" style="margin-left:10px; padding:0; background-color: whitesmoke;">
                <i class="material-icons" style="font-size:36px">apps</i>
                </button>
            </nav>
        </header>
    `,
    methods: {
        onApp(){
            console.log('app')
        }
    }
}