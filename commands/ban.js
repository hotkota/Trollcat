module.exports={
    name:'бан',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        const user = message.mentions.users.first();
        args.shift();

        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .ban(`${args}`)
                .then(()=>{
                    message.channel.send(`${user.tag} был забанен\nПричина ${args}`);
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