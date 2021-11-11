import todoList from './todo-list.cmp.js';

export default {
    props: ['note'],
    template: `
    <div class="note-preview" :style="noteColor">
    <div v-if="note.type==='note-txt'" >
    <P>{{note.info.txt}}</P>
    </div>
    <div v-if="note.type ==='note-img'" >
    <img :src="note.info.img">
    </div>
    <div v-if="note.type==='note-todos'">
    <todo-list :todos="note.info.todos"/>
    </div>
    <div v-if="note.type==='note-video'" >    
             <label>
             <iframe width="200" height="100" :src="note.info.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </label>         
    </div>
    <div class="edit-btn-container">
    <button  @click="onPin(note.id)" :style="isPinned"><i >&#10083;</i></button>
    <button><i class="fa fa-paper-plane"></i></button>
    <button @click="removeNote(note.id)"><i class="fa fa-trash"></i></button>
    <input type="color" class="clr-input" @change="setColor(note.id, $event)">
    <button @click="onColor(note.id)" class="clr-img"><i class="material-icons" style= "font-size: 18px;">&#xe3b7;</i></button>
    <button><i class="material-icons" style= "font-size: 18px;">edit</i></button>
    </div>      
    </div>
    `,
    data() {
        return {
            gColor: "pink"
        } 
    },
    methods: {
        removeNote(id) {
            this.$emit('removeNote', id)
        },
        onPin(id){
            this.note.isPinned = !this.note.isPinned
            this.$emit('onPin', id)
        },
        onColor(id){
            console.log(id);
           const elImg = document.querySelector(".clr-img");
           elImg.style.display = "none";
           const elClr = document.querySelector(".clr-input");
           elClr.style.display = "block";
        },

        setColor(id, event){            
            this.gColor = event.target.value
            this.note.style.backgroundColor = event.target.value
            this.$emit('onColor',event.target.value, id)
        }, 

    },
    computed: {
        isPinned(){
            // console.log('pin')
        return this.note.isPinned ? "color: red" : "color: black" 
        },
        noteColor() {                     
            return "background-color: "+ this.gColor;
        },      
    },
    components: {
        todoList
    }
}
