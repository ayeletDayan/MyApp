import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
        <ul class="mail-nav">
            <li @click="inbox"> Inbox </li>
            <li @click="starred"> Starred </li>
            <li @click="sent"> Sent </li>
            <li @click="draft"> Drafts </li>
            <li @click="trash"> Trash </li>
        </ul>
    `,
    methods: {
        inbox(){
            this.$emit('inbox');
        },
        sent(){
            this.$emit('sent');
        },
        draft(){
            this.$emit('draft');
        },
        trash(){
            this.$emit('trash');
        },
        starred(){
            this.$emit('starred');
        }
    },
    components:{
        mailPreview
    }
};
