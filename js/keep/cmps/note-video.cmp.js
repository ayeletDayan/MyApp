export default {
    template: `
  <div class="video-box">
  <br>
        <input type="txt" v-model="txt" placeholder="Insert Url">
        <button @click="reportVal">Add</button>
    </div>
`,
    data() {
        return {
            txt: ''
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.txt);
        }
    }
}
