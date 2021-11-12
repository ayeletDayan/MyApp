export default {
    template: `
  <div class="video-box">
            <label>
            <iframe width="200" height="100" src="https://www.youtube.com/embed/juocv4AtrHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </label>
        </div>
`,
data() {
    return {
        video: '',
    };
},
methods: {
    reportVal() {            
        this.$emit('setInput', this.video);
    }
}
}

