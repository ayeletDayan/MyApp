import mailPreview from './mail-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
        <ul class="mail-list">
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" >
                <mail-preview :mail="mail" @openMail="openMail" @star="star" @trash="trash"/>              
            </li>            
        </ul> `,

    methods: {
        openMail(id) {
            this.isMailOpen = true;
            this.$emit('openMail', id);
        },

        star(id, isOn) {
            const idx = this.mails.findIndex((mail) => mail.id === id)
            this.mails[idx].isStarred = (isOn === 'on')? true : false
            this.$emit('onStarred', id); 
        },

        trash(id){
            this.$emit('onTrash', id);           
        }

    },
    components: {
        mailPreview,

    }
};
