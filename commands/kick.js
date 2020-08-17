module.exports={
    name:'кик',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        const user = message.mentions.users.first();
        const memder = message.guild.member(user);
        args.shift();

        if (user) {
            if (memder) {
                memder
                .kick(`${args}`)
                .then(() => {
                    message.channel.send(`${user.tag} был кикнут\nПричина ${args}`);
                })
                .catch(error => {
                    message.channel.send(`Не достаточно прав`);
                    console.error(error);
                });
            } else {
                message.channel.send(`такого пользователя нет`);
            };
        } else {
            message.channel.send(`Укажите пользователя`);
        };
    },
};