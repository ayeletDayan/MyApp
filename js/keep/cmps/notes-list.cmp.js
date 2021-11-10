import { noteService } from '../services/note-service.cmp.js';
import notePreview from './note-preview.cmp.js';

export default {
    props: ['notes'],
    template: `
        <div class="notes-list">
            <div v-for="note in notes" :key="note.id" class="note-preview-container" >                
                <note-preview :note="note" @removeNote="removeNote"/>
                </div>
        </div>
    `,
    methods: {
        removeNote(idx){
            noteService.remove(idx)
        }

        // select(note) {
        //     this.$emit('selected', note);
        // },
        // log() {
        //     console.log('Logging.....');
        // }
    },
    components:{
        notePreview
    }
};