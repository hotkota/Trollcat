module.exports = {
    name:'пнуть',
    execute(message){
        const taggedUser = message.mentions.users.first();

        if(!message.mentions.users.size){
            return message.reply(`пнул сам себя`)
        }

        message.channel.send(`**${taggedUser.username}** пнули`);
    },
};