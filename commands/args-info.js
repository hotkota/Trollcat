module.exports = {
    name:'аргумент',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        if(!args.length){
            return message.channel.send(`am ${message.author}`);
        }

        message.channel.send(`${args}`);
    },
};