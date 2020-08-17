module.exports={
    name:'монетка',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        args.shift();

        var random = Math.floor(Math.random()*3);
        if(!args[0]){
            message.channel.send('Укажите сторону');
        }
        else if(random === 1){
            if(args[0] === 'орел'||'орёл'){
               message.channel.send(`Вы выбрали **${args[0]}**, выпал **${args[0]}**`);
            }else if(args[0] === 'решка'){
                message.channel.send(`Вы выбрали **${args[0]}**, выпал **орел**`);
            };
        }else{
            if(args[0] === 'орел'||'орёл'){
                message.channel.send(`Вы выбрали **${args[0]}**, выпала **решка**`);
            }else if(args[0] === 'решка'){
                message.channel.send(`Вы выбрали **${args[0]}**, выпала **решка**`);
            };
        }
    },
};