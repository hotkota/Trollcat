module.exports={
    name:'сервер',
    execute(message){
        const Discord = require('discord.js');
        const examlyEmbed = new Discord.MessageEmbed()
        .setColor('#fd035a')
        .setTitle('Сервер')
        .setDescription(`Информация о сервере\nНазвание сервера: **${message.guild.name}**\nКоличество участников: **${message.guild.memberCount}**`)
        message.channel.send(examlyEmbed);
    },
};