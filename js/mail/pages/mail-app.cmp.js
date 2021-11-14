import { mailService } from '../services/mail-service.js';
import { utilService } from '../../services/util-service.js';
import mailList from '../cmps/mail-list.cmp.js';
import mailFilter from '../cmps/mail-filter.cmp.js';
import mailNav from '../cmps/mail-nav.cmp.js';
import compose from '../cmps/compose.cmp.js';
import openMail from '../cmps/open-mail.cmp.js';

export default {
    template: `
    <section class="mail-app">
            <mail-filter @filtered="filtered" />
            <button class="compose-btn" @click="onCompose">compose</button>
            <compose v-if="isCompose" class="compose" @send="send" @save="save"/>
            <div v-if="currMail.isOpen" :key="currMail.id" >
                <open-mail :currMail="currMail"/>
            </div> 
            <div class="mail-body"> 
            <mail-nav @inbox="inbox" @sent="sent" @draft="draft" @trash="trash" @starred="starred"/>

            <mail-list v-if="showInbox" :mails="mails" @openMail="openMail" @onTrash="onTrash" @onStarred="onStarred"/>
            <mail-list v-if="showSent" :mails="sentMails" @openMail="openMail"/>
            <mail-list v-if="showDrft" :mails="draftMails" @openMail="openMail"/>
            <mail-list v-if="showTrash" :mails="trashMails" @openMail="openMail"/>
            <mail-list v-if="showStarred" :mails="starredMails" @openMail="openMail"/>

            <mail-list v-if="isShown" :mails="mailsToShow" @openMail="openMail" @onTrash="onTrash" @onStarred="onStarred"/>

            </div>
        </section>`,
    data() {
        return {
            mails: mailService.query('mails'),
            sentMails: mailService.query('sent-mails'),
            draftMails: mailService.query('draft-mails'),
            trashMails: mailService.query('trash-mails'),
            starredMails: mailService.query('starred-mails'),
            filterBy: '',
            isCompose: false,
            currMail: '',
            showInbox: true,
            showSent: false,
            showDrft: false,
            showTrash: false,
            showStarred: false,
            isShown: false

        };
    },
    created() {
        this.loadMails();
    },
    methods: {
        onCompose() {
            this.isCompose = true
        },

        send(input) {
            this.sentMails.push(input)
            mailService.put('sent-mails',input)
            this.isCompose = false
        },

        save(input) {
            console.log(input)
            this.draftMails.push(input)
            mailService.put('draft-mails',input)
            this.isCompose = false
        },

        openMail(id) {
            const idx = this.mails.findIndex((mail) => mail.id === id)
            // this.isMailOpen = true
            this.currMail = this.mails[idx]
        },

        inbox() {
            this.showSent = false
            this.showDrft = false
            this.showTrash = false
            this.showStarred = false
            this.showInbox = true
        },

        sent() {
            this.showInbox = false
            this.showDrft = false
            this.showTrash = false
            this.showStarred = false
            this.showSent = true
        },

        draft() {
            this.showInbox = false
            this.showSent = false
            this.showTrash = false
            this.showStarred = false
            this.showDrft = true           
        },

        trash() {  //for nav
            this.showInbox = false
            this.showSent = false
            this.showStarred = false
            this.showDrft = false
            this.showTrash = true
        },

        onTrash(id){ //for move to trash
            const idx = this.mails.findIndex((mail) => mail.id === id)
            this.trashMails.push(this.mails[idx])
            this.mails.splice(idx,1)            
            utilService.saveToStorage('trash-mails', this.trashMails);
            utilService.saveToStorage('mails', this.mails);
        },

        starred() { //for nav
            this.showInbox = false
            this.showSent = false
            this.showDrft = false
            this.showTrash = false
            this.showStarred = true
        },

        onStarred(id){ //for move to stars
            const idx = this.mails.findIndex((mail) => mail.id === id)
            this.starredMails.push(this.mails[idx])
            utilService.saveToStorage('starred-mails', this.starredMails);
            utilService.saveToStorage('mails', this.mails);
        },

        loadMails() {
            mailService.query('mails')
                .then(mails => this.mails = mails);
            mailService.query('sent-mails')
                .then(mails => this.sentMails = mails);
            mailService.query('draft-mails')
                .then(mails => this.draftMails = mails);
            mailService.query('trash-mails')
                .then(mails => this.trashMails = mails);
            mailService.query('starred-mails')
                .then(mails => this.starredMails = mails);

        },
        
        filtered(filterBy) {
            console.log(filterBy)
            this.filterBy = filterBy;
            this.showInbox = false,
            this.isShown = true
        },
    },
    computed: {
        mailsToShow() {            
            console.log(this.filterBy)
            if (!this.filterBy) return this.mails;
            // const searchStr = this.filterBy.toLowerCase();
            const sortBy = this.mails.filter((mail) => {
                return mail.from.toLowerCase().includes(this.filterBy.from);
            });
            return sortBy;
        },
    },

    components: {
        mailList,
        mailFilter,
        mailNav,
        compose,
        openMail
    },
};