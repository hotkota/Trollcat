module.exports = {
    name:'шар',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        const messages = [['Да'],['Нет'],['Возможно'],['Наверное'],['Скорее всего'],['Никогда'],['Вероятнее всего'],['Не думаю'],['Спроси позже']
        ];
        if(!args[1]){
            message.channel.send('Спросите что-нибудь');
        }else{
            const am = messages[Math.floor(Math.random()*messages.length)];
            message.channel.send(am);
        }
    },
};