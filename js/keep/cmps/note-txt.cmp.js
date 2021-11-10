export default {
    template: `
         <div class="text-box">
             <label>
                 <input type="text" v-model="txt" @blur="reportVal" />
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