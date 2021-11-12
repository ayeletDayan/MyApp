import noteTxt from '../cmps/note-txt.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVideo from '../cmps/note-video.cmp.js';
import noteTodo from '../cmps/note-todo.cmp.js';
import { noteService } from '../services/note-service.cmp.js';
import notesList from '../cmps/notes-list.cmp.js';

export default {
    template: `
    <section class="keep-app">
        <br>
        <div class="add-note">
        <button @click=noteTxt>
        <i class="fa fa-comment" style="font-size:24px"></i>
        </button>
        <button @click=noteImg>
        <i class="fa fa-file-photo-o" style="font-size:24px"></i>
        </button>
        <button @click=noteYouTube>
        <i class="fa fa-youtube-square" style="font-size:24px"></i>
        </button>
        <button @click=noteToDo>ToDo</button>  
        </div>
        <note-txt v-if="onAddTxt" @setInput="addNote"/> 
        <note-img v-if="onAddImg" @setInput="addNote"/>
        <note-video v-if="onAddVideo" @setInput="addNote"/> 
        <note-todo v-if="onAddTodo" @setInput="addNote"/>
        <br>
        <notes-list class="notes-list" v-if="isShown" :notes="notesToShow" />
    <br>
    </section>
    `,
    data() {
        return {
            notes: [],
            isShown: true,
            onAddTxt: false,
            onAddImg: false,
            onAddVideo: false,
            onAddTodo: false,
            comp: ''
        };
    },
    created() {
        this.loadNotes();
    },
    methods: {
        loadNotes() {
            noteService.query()
                .then(notes => this.notes = notes);
        },
        noteTxt() {
            console.log('txt')
            this.onAddTxt = true;
        },
        noteImg() {
            console.log('noteImg')
            this.onAddImg = true;
        },
        noteYouTube() {
            console.log('noteYouTube')
            this.onAddVideo = true
        },
        noteToDo() {
            console.log('noteToDo')
            this.onAddTodo = true
        },
        addNote(input) {
            if (this.onAddTxt) {
                noteService.addNote(input, 'txt')
                    .then(() => {
                        this.loadNotes();
                    })
            }
            else if (this.onAddImg) {
                noteService.addNote(input, 'img')
                    .then(() => {
                        this.loadNotes();
                    })
            }
            else if (this.onAddVideo) {
                noteService.addNote(input, 'video')
                    .then(() => {
                        this.loadNotes();
                    })
            }
            else if (this.onAddTodo) {
                console.log(input)
                noteService.addNote(input, 'todo')
                    .then(() => {
                        this.loadNotes();
                    })
            }
            this.onAddTxt = false
            this.onAddImg = false
            this.onAddVideo = false
            this.onAddTodo = false
        }
    },

    computed: {
        notesToShow() {
            return this.notes
        },

    },
    components: {
        notesList,
        noteTxt,
        noteImg,
        noteVideo,
        noteTodo 
    },
};