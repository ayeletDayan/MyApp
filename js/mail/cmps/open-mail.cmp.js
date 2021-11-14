export default {
    props: ['currMail'],
    template: `
    <div class="open-mail">
        <div>From: {{currMail.from}}</div>
        <div>Subject: {{currMail.subject}}</div>
        <div>{{currMail.date}}</div>
        <div>{{currMail.txt}}</div>
    </div>
    `,
}



