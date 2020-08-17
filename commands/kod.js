module.exports={
    name:'код',
    execute(message){
        const {prefix ,ID} = require('./config.json');

        const args = message.content.slice(prefix.length).split(/ +/);
        args.shift();

        if(!message.author.id === `${ID.ownerID}`){
            message.channel.send('Нет прав');
        }else{
            eval(args[0]);
        };
    },
};