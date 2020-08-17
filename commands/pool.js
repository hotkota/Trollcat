module.exports={
    name:'голосование',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        args.shift()

        message.delete().catch();

        message.channel.send(`Голосование: **${args}**`).then(async(msg) => {
            msg.react('👍')
            msg.react('👎')
        });
    },
};