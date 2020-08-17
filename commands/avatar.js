module.exports = {
    name:'аватар',
    execute(message){
        const Discord = require('discord.js');
        const { prefix } = require('./config.json');
        const user = message.mentions.users.first()||message.author;
        const args = message.content.slice(prefix.length).split(/ +/);
        var net = 0;
        var am = 0;
        args.shift();

        if(!args[0]){
            const examlyEmbed = new Discord.MessageEmbed()
                .setColor('#fd035a')
                .setAuthor(user.username)
                .setImage(user.displayAvatarURL({format:"png",dinamic:true,size:512}))
            message.channel.send({embed:examlyEmbed});
        }else{
            switch (args[0]) {
                case '16':
                    net = 16;
                    break;
                case '32':
                    net = 32;
                    break;
                case '64':
                    net = 64;
                    break;
                case '128':
                    net = 128;
                    break;
                case '256':
                    net = 256;
                    break;
                case '512':
                    net = 512;
                    break;
                case '1024':
                    net = 1024;
                    break;
                case '2048':
                    net = 2048;
                    break;
                case '4096':
                    net = 4096;
                    break;
                default:
                    am = 1;
            };
            if(am == 0){
                const examlyEmbed = new Discord.MessageEmbed()
                    .setColor('#fd035a')
                    .setAuthor(user.username)
                    .setImage(user.displayAvatarURL({format:"png",dinamic:true,size:net}))
                message.channel.send({embed:examlyEmbed});
            }else{
                const examlyEmbed = new Discord.MessageEmbed()
                    .setColor('#fd035a')
                    .setTitle('Не верный формат')
                    .addFields(
                        { name:'Верные расширения:',value:'`16 32 64 128 256 512 1024 2048 4096`'}
                    )
                message.channel.send({embed:examlyEmbed});
            };
        };
    },
};