export default {
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
            todos: []
        };
    },
    methods: {
        reportVal() {
            console.log(this.todos)
            if (!this.todos.lenght) this.todos.push(this.txt)
            this.$emit('setInput', this.todos);
        },
        addTodo() {
            this.todos.push(this.txt)
            document.querySelector('input').value = ''
        }
    }
}

