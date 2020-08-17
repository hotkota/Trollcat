module.exports={
    name:'год',
    execute(message){
        const {prefix} = require('./config.json');
        const args = message.content.slice(prefix.length).split(/ +/);
        args.shift();

        if(!args[0]){
            message.channel.send('Укажите год');
        }else{
            var year = args[0];

            if((year%4==0)&&(year%100!=0)||(year%400)==0){
                message.channel.send('Высокосный');
            }else{
                message.channel.send('Не высокосный');
            };
        };
    },
};