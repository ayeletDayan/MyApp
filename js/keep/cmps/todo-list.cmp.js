export default {
    props: ['todos'],
    template: `
    <div>
    <div v-for="(todo, idx) in todos" >
        {{todo.txt}}
    <a class="x" @click="removeTodo">x</a>
    </div>
</div>
    `
    ,
    methods: {
        removeTodo(idx) {
            this.todos.splice(idx, 1)
        },
    }
}