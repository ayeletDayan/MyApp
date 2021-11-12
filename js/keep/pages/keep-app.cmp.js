// import noteTxt from '../cmps/note-txt.cmp.js';
import { noteService } from '../services/note-service.cmp.js';
import notesList from '../cmps/notes-list.cmp.js';
// import addNote from '../cmps/add-note.cmp.js';
// import txtBox from './textBox';


export default {
    template: `
    <section class="keep-app">
        <br>
        <div class="add-note">
        <button @click='comp = "text-box"'>
        <i class="fa fa-comment" style="font-size:24px"></i>
        </button>
        <button @click='comp = "text-box"'>
        <i class="fa fa-file-photo-o" style="font-size:24px"></i>
        </button>
        <button @click='comp = "text-box"'>
        <i class="fa fa-youtube-square" style="font-size:24px"></i>
        </button>
        <button @click='comp = "text-box"'>ToDo</button>  
        </div>
        <!-- <add-note v-if="onAddNote" @add-note="addNote"/> -->
        <!-- <component :is="comp" /> -->
        <br>
        <notes-list class="notes-list" v-if="isShown" :notes="notesToShow" />
    <br>
    </section>
    `,
    data() {
        return {
            notes: [],
            isShown: true,
            // onAddNote: false,
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
        // noteTxt() {
        //     console.log('txt')
        //     console.log(this.notes)
        //     this.onAddNote = true;
        // },
        // noteImg() {
        //     console.log('noteImg')
        // },
        // noteYouTube() {
        //     console.log('noteYouTube')
        // },
        // noteToDo() {
        //     console.log('noteToDo')
        // }


    },

    computed: {
        notesToShow() {
            return this.notes
        },

    },
    components: {
        notesList,  
        // noteTxt,
        // addNote,
        // txtBox
    },
};