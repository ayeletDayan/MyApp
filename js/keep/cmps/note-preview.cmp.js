import todoList from './todo-list.cmp.js';
import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import editTodo from '../cmps/edit-todo.cmp.js';
import { noteService } from '../services/note-service.cmp.js';

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
    <todo-list :todos="note.info.todos" @removeTodo="updateTodos(note.id)"/>
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
    <button class="edit-btn" @click="onEditNote"><i class='fas fa-edit' style='font-size:18px'></i></button>  
    </div>
    <note-txt v-if="onEditTxt" @setInput="editNote"/>
    <note-img v-if="onEditImg" @setInput="editNote"/>
    <note-video v-if="onEditVideo" @setInput="editNote"/> 
    <edit-todo v-if="onEditTodo" :todos="note.info.todos" @setInput="editNote"/>       
    </div>
    `,
    data() {
        return {
            gColor: "pink",
            isColorOpen: false,
            onEditTxt: false,
            onEditImg: false,
            onEditVideo: false,
            onEditTodo: false
        }
    },
    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => this.notes = notes);
        },

        removeNote(id) {
            this.$emit('removeNote', id)
        },

        onPin(id) {
            this.note.isPinned = !this.note.isPinned
            this.$emit('onPin', id)
        },

        onColor(id) {
            this.isColorOpen = true;
        },

        setColor(id, event) {
            const color = event.target.value
            this.$emit('onColor', color, id)
            this.isColorOpen = false;
        },

        onEditNote() {
            if (this.note.type === "note-txt") this.onEditTxt = true;
            else if (this.note.type === "note-img") this.onEditImg = true;
            else if (this.note.type === "note-video") this.onEditVideo = true;
            else if (this.note.type === "note-todos") this.onEditTodo = true;
        },

        editNote(input) {
            if (this.onEditTxt) this.note.info.txt = input
            else if (this.onEditImg) this.note.info.img = input
            else if (this.onEditVideo) this.note.info.url = input
            else if (this.onAddTodo) {input.map((todo) => {this.note.info.todos.push(todo)})}
            this.onEditTxt = false
            this.onEditImg = false
            this.onEditVideo = false
            this.onEditTodo = false
            this.$emit('editNote', this.note.id)
        },

        updateTodos(id) {   
            console.log(id);  
            this.$emit('updetTodoNote', id)
        }
    },
    computed: {
        isPinned() {
            return this.note.isPinned ? "color: red" : "color: black"
        },
        noteColor() {
            return "background-color: " + this.note.style?.backgroundColor || '#ffffff';
        },
    },
    components: {
        todoList,
        noteTxt,
        noteImg,
        noteVideo,
        editTodo
    }
}
