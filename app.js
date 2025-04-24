const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
            
        };
    },
    methods: {
        attackMonster() {
            Math.random() * (12-5) + 5;

    }
});


app.mount('#game');
