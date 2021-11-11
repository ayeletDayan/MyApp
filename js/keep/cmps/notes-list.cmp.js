import { noteService } from '../services/note-service.cmp.js';
import notePreview from './note-preview.cmp.js';
import { utilService } from '../../services/util-service.js';

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
            this.notes.splice(idx, 1)
            noteService.put(this.notes)
             .then(notes => this.notes = notes)
            // .then(() => {
            //     const msg = {
            //         txt: `Review was remove`,
            //         type: 'success'
            //     };
            //     eventBus.$emit('showMsg', msg);
            // })
            // .catch(err => {
            //     console.log('err', err);
            //     const msg = {
            //         txt: 'Error. Please try later',
            //         type: 'error'
            //     };
            //     eventBus.$emit('showMsg', msg);
            // });
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