const { createApp } = Vue

createApp({
    data() {
        return {
            mailPath: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: []
        }
    },
    methods: {
        getEmails() {
                axios.get(this.mailPath).then(response => {
                    this.emails.push(response.data.response);
                });
        }
    },
    mounted() {
        this.getEmails();
    }
}).mount('#app')