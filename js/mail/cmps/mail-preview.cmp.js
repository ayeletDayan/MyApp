export default {
    props: ['mail'],
    template: `
    <div class="mail-preview" @click="onMail">
        <div class="fa fa-star" :class="star" @click="onStar"></div>        
        <div v-if="mail.from" class="from">From: {{mail.from}}</div>
        <div v-if="mail.to" class="from">To: {{mail.to}}</div>
        <div>Subject: {{mail.subject}}</div>
        <div class="mail-date">{{mail.date}} <i @click="trash" class="fa fa-trash"></i></div>        
        <div class="show-mail-txt">{{mailTxt}}</div>        
    </div>    
    `,

    data(){
        return{
            isStarOn: false
        }
    },

    methods: {
        onMail() {
            this.mail.isOpen = true;
            this.$emit('openMail', this.mail.id);
        },
        onStar(){            
            this.isStarOn = !this.isStarOn
            this.mail.isStarred = !this.mail.isStarred
            if (this.isStarOn) this.$emit('star', this.mail.id, 'on')
            else this.$emit('star', this.mail.id, 'off')
        },
        trash(){
            this.mail.isTrash = !this.mail.isTrash
            this.$emit('trash', this.mail.id);
        }
    },

    computed: {
        mailTxt() {
            const txtToShow = this.mail.txt.substr(0, 50) // not good for mobile
            return txtToShow
        },
        star(){
            if (this.mail.isStarred) return 'star-on'
            return (this.isStarOn) ? 'star-on' : 'star-off'
        }

    }
}
