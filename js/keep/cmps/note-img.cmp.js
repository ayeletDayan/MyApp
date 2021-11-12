export default {
    template: `
    <div class="img-box">
        <label>
        <input type="file" accept="image/*" @change="onImgInput($event)" id="file-input">
        </label>
    </div>
`,
    data() {
        return {
            img: ''
        }
    },
    methods: {
        onImgInput(e) {
            const file = e.target.files[0];
            const img = URL.createObjectURL(file);
            // this.save(this.note)
            console.log(img)
            this.$emit('setInput', img);

        },
    }
}

