import { noteService } from '../services/note-service.cmp.js';
import notePreview from './note-preview.cmp.js';
import { eventBus } from '../../services/event-bus-service.js';
import { utilService } from '../../services/util-service.js';

export default {
    props: ['notes'],
    template: `
        <div class="notes-list">
        <div v-for="note in pinedNotes" :key="note.id" class="note-preview-container" >            
            <note-preview :note="note" @removeNote="removeNote" @onPin="onPin" @onColor="onColor" @updetTodoNote="updetTodoNote" @editNote="editNote"/>           
        </div>
        <div v-for="note in notPinedNotes" :key="note.id" class="note-preview-container" >            
            <note-preview :note="note" @removeNote="removeNote" @onPin="onPin" @onColor="onColor" @updetTodoNote="updetTodoNote" @editNote="editNote"/>           
        </div>
        </div>        
    `,

    methods: {
        removeNote(id) {
            const idx = this.notes.findIndex(note => note.id === id)
            this.notes.splice(idx, 1)
            utilService.remove('notes', id)
                .then(() => {
                    const msg = {
                        txt: `Note was remove`,
                        type: 'success'
                    };
                    eventBus.$emit('showMsg', msg);
                })
                .catch(err => {
                    console.log('err', err);
                    const msg = {
                        txt: 'Error. Please try later',
                        type: 'error'
                    };
                    eventBus.$emit('showMsg', msg);
                });
        },

        updetTodoNote(id) {
            const idx = this.notes.findIndex(note => note.id === id)
            noteService.put(this.notes[idx])
        },

        onPin(id) {
            const idx = this.notes.findIndex(note => note.id === id)
            noteService.put(this.notes[idx])
        },

        onColor(color, id) {
            const idx = this.notes.findIndex(note => note.id === id)
            this.notes[idx].style.backgroundColor = color;
            noteService.put(this.notes[idx])
        },
        editNote(id){
            const idx = this.notes.findIndex(note => note.id === id)
            noteService.put(this.notes[idx])
        }
    },

    computed: {
        pinedNotes() {
            return this.notes.filter((note) => {
                return note.isPinned
            })
        },

        notPinedNotes() {
            return this.notes.filter((note) => {
                return !note.isPinned
            })
        }
    },

    components: {
        notePreview,
    }
};