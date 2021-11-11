import noteTxt from '../cmps/note-txt.cmp.js';
import {noteService} from '../services/note-service.cmp.js';
import notesList from '../cmps/notes-list.cmp.js';

export default {
    template: `
    <section class="keep-app">
        <button @click="noteTxt">noteTxt</button>
        <button @click="noteImg">noteImg</button>
        <button @click="noteYouTube">noteYouTube</button>
        <button @click="noteToDo">noteToDo</button>
        <br><br>
    <notes-list class="notes-list" v-if="isShown" :notes="notesToShow" />
    <br>
    </section>
    `,
    data() {
        return {
            notes: noteService.query(),
            isShown: true,
            // isPined: true
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
        noteTxt(){
            console.log('txt')
            console.log(this.notes)
        },
        noteImg(){
            console.log('noteImg')
        },
        noteYouTube(){
            console.log('noteYouTube')
        },
        noteToDo(){
            console.log('noteToDo')
        }


    },

    computed: {
        notesToShow() {
            return this.notes            
        },

    },
    components: {
        notesList,
        noteTxt
        
    },
};

// const textBox = {
//     props: ['data'],
//     template: `
//         <div class="text-box">
//             <label>
//                 <input type="text" v-model="txt" @blur="reportVal" />
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//             txt: '',
//         };
//     },
//     methods: {
//         reportVal() {
//             this.$emit('setInput', this.txt);
//         }
//     }
// };
// const imgBox = {
//     props: ['data'],
//     template: `
//         <div class="img-box">
//             <label>
//             <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//             // img: '',
//         };
//     },
//     methods: {
//         uploadImage(event) {
//             const URL = 'http://foobar.com/upload';
//             let data = new FormData();
//             data.append('name', 'my-picture');
//             data.append('file', event.target.files[0]);
//             let config = {
//                 header: {
//                     'Content-Type': 'image/png'
//                 }
//             }
//             axios.put(
//                 URL,
//                 data,
//                 config
//             ).then(
//                 response => {
//                     console.log('image upload response > ', response)
//                 }
//             )
//         }
//     }
// };
// const youTubeBox = {
//     props: ['data'],
//     template: `
//         <div class="youTubeBox">
//             <label>
//             <iframe width="200" height="100" src="https://www.youtube.com/embed/juocv4AtrHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </label>
//         </div>
//     `,
//     data() {
//         return {
//         };
//     },
//     methods: {
//         reportVal() {
//         }
//     }
// };
// const todoBox = {
//     props: ['data'],
//     template: `
//         <div class="todoBox">
//             <label>
                
//             </label>
//         </div>
//     `,
//     data() {
//         return {
            
//         };
//     },
//     methods: {
        
//     }
// };

// export default {
//     template: `
//     <section>
//         <div>
//             <component v-for="(currCmp, idx) in cmps" 
//                         :is="currCmp.type" 
//                         :data="currCmp.data" 
//                         @setInput="setInput($event, idx)">
//             </component>            
//         </div>
//     </section> 
//     `,

//     data() {
//         return {
//             cmps: [
//                 {
//                     type: 'textBox',
//                     data: {
//                         lable: 'note.info.txt'
//                     }
                       
//                 },
//                 {
//                     type: 'imgBox',
//                     data: {
//                         label: '<img :src="note.info.img">'
//                     }
//                 },
//                 {
//                     type: 'youTubeBox',
//                     data: {
//                         label: 'note.info.url'
//                     }
//                 },
//                 {
//                     type: 'todoBox',
//                     data: {
//                         label: '<note-todo :todos="note.info.todos"/>'
//                     }
//                 }
//             ],
//             answers: []
//         };
//     },
//     methods: {
//         setInput(ev, inputIdx) {
//             this.answers[inputIdx] = ev;
//             console.log('Survey Got ev', ev);
//         },
//         save() {
//         }
//     },

//     components: {
//         textBox,
//         imgBox,
//         youTubeBox,
//         todoBox
//     }
// };