const fs = require("fs");
const Discord = require("discord.js");
const { token, prefix } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.once("ready", () => {
    client.user.setPresence({
        activity:{name:"Hot_kota#4267",type:"LISTENING"},status:"idle"
    })
    .catch(console.error);
    console.log("Готов");
});

client.on("message", message => {
    if (message.author.bot || message.channel.type == "dm") return;

    if (message.content.startsWith("Привет")) {
        message.channel.send("https://neprivet.ru");
    };

    if (message.content.startsWith("Можно вопрос")){
        message.channel.send("https://nometa.xyz");
    };

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply("Код не работает");
    };
});

client.login(token);