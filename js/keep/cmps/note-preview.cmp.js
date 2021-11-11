import todoList from './todo-list.cmp.js';

export default {
    props: ['note'],
    template: `
    <div class="note-preview">
    <div v-if="note.type==='note-txt'" >
    <P>{{note.info.txt}}</P>
    </div>
    <div v-if="note.type==='note-img'" >
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
    <a class="x" @click="removeNote(note.id)">x</a>
    </div>
    `,
    methods: {
        removeNote(id) {
            this.$emit('removeNote', id)
        },
    },
    components: {
        todoList
    }
}
