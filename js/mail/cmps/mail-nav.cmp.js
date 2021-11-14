import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
        <ul class="mail-nav">
            <li @click="inbox" class="fa fa-envelope"> Inbox </li>
            <li @click ="starred" class="fa fa-star"> Starred </li>
            <li @click="sent" class="fa fa-paper-plane"> Sent </li>
            <li @click="draft" class="fas fa-edit"> Drafts </li>
            <li @click="trash" class="fa fa-trash"> Trash </li>
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
