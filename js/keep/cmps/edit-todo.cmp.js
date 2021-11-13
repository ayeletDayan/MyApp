export default {
    props: ['todos'],
    template: `
         <div class="todo-box">
             <label>
                 <br>
                <input type="check-box" v-model="txt"/> 
                <button @click="addTodo">+</button>
                <button @click="reportVal">Add</button>
            </label>
         </div>
    `,
    data() {
        return {
            txt: '',
            currTodos: this.todos            
        };
    },
    methods: {
        reportVal() { 
            if (!this.todos.lenght) this.currTodos.push({txt: this.txt, doneAt: Date.now()})   
            this.$emit('setInput', this.currTodos);
        },
        addTodo() {
             this.currTodos.push({txt: this.txt, doneAt: Date.now()})
            //  document.querySelector('input').value = ''
        }
    }
}