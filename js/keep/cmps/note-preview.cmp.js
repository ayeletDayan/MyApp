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
    <button class="edit-btn"  @click="onPin(note.id)" :style="isPinned"><i >&#10083;</i></button>
    <button class="edit-btn"><i class="fa fa-paper-plane"></i></button>
    <button class="edit-btn" @click="removeNote(note.id)"><i class="fa fa-trash"></i></button>
    <i class='fas fa-palette'><input type="color" id="color-picker-wrapper" @change="setColor(note.id, $event)"/></i>
    <button class="edit-btn"><i class='fas fa-edit' style='font-size:18px'></i></button>  
    </div>      
    </div>
    `,
    data() {
        return {
            gColor: "pink",
            isColorOpen:false
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
            this.isColorOpen = true;
         },

        setColor(id, event){   
            const color = event.target.value
            this.$emit('onColor',color, id)
            this.isColorOpen = false;
        }, 

    },
    computed: {
        isPinned(){
        return this.note.isPinned ? "color: red" : "color: black" 
        },
        noteColor() {                     
            return "background-color: "+ this.note.style?.backgroundColor || '#ffffff';
        },      
    },
    components: {
        todoList
    }
}
