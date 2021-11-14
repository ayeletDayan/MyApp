import { mailService } from '../services/mail-service.js';

export default {
    template: `
        <section class="mail-compose">            
            <h4>New message</h4>            
            <div>To: <textarea class="to" v-model="composeToAdd.to"></textarea></div><br>
            <div>Subject: <textarea class="subject" v-model="composeToAdd.subject"></textarea></div><br>            
            <div><textarea class="mail-txt" v-model="composeToAdd.txt"></textarea></div><br>
            <div style="text-align: center;"><button @click="save" class="send-btn">Save</button>
            <button @click="send" class="send-btn">Send</button></div>            
        </section>
    `,
    data() {
        return {
            composeToAdd: {
                to: '',
                subject: '',
                txt: '',
                date: mailService.setDateAndTime(),
                isOpen: false
            } 
        };
    },
    created() {        

    },    

    methods: {
        send(){
            this.$emit('send', this.composeToAdd)
        },
        save(){
            this.$emit('save', this.composeToAdd)
        }
    }
};