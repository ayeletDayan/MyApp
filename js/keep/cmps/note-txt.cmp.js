export default {
    template: `
         <div class="text-box">
             <label>
                 <br>
                 <input type="text" v-model="txt"/>
                 <button @click="reportVal">Add</button>
            </label>
         </div>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        reportVal() {            
            this.$emit('setInput', this.txt);
        }
    }
};