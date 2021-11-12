// import {noteService} from '../services/note-service.cmp.js';

const textBox = {
    template: `
        <div class="text-box">
            <label>
                <input type="text" v-model="txt" @blur="reportVal" />
                <a class="+" @click="addTxt">x</a>                
            </label>
        </div>
        `,
    methods: {
        addTxt(){
            console.log('txt')
        }
    }    
    }

const imgBox = {
    template: `
        <div class="text-box">
            <label>
            <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
            </label>
        </div>
        `}

const youTubeBox = {
    template: `
        <div class="text-box">
            <label>
            <iframe width="200" height="100" src="https://www.youtube.com/embed/juocv4AtrHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </label>
        </div>
        `}

const todoBox = {
    template: `
            <div class="text-box">
                <label>
                <input type="text" v-model="txt" @blur="reportVal" /> 
                </label>
           </div>
        `}

export default {
components: {'text-box' : textBox, 'text-box': imgBox, 'text-box' : youTubeBox, 'text-box' : todoBox},

data(){
return {
    comp
}
},
methods:{
    
}

}



