module.exports={
    name:'скажи',
    execute(message){
        const args = message.content.slice(prefix.length).split(' ');
        args.shift();
        message.delete().catch();

        message.channel.send(args);
    },
};