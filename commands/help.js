module.exports = {
    name:'хелп',
    execute(message){
        const Discord = require('discord.js');
        const examlyEmbed = new Discord.MessageEmbed()
           .setColor('#fd035a')
           .setTitle('Команды')
           .addFields(
               {name:'.кик', value:'Кикнуть участника'},
               {name:'.бан', value:'забанить участника'},
               {name:'.голосование', value:'голосование'},
               {name:'.аватар', value:'показывает аватар'},
               {name:'.сервер', value:'инфо о сервере'},
               {name:'.шар', value:'случайный ответ на вопрос'},
               {name:'.время', value:'показывает время'},
               {name:'.монетка', value:'am'}
           )
        message.channel.send({embed:examlyEmbed});
    },
};