const config = require("./config.json");

const token = config.token;


const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [Discord.IntentsBitField.Flags.GuildMessages, Discord.IntentsBitField.Flags.Guilds],
});
const fs = require("fs");
let channel;



console.log("Starting...");
Client.on("ready", async () => {
    channel = await Client.channels.fetch(config.channel);
    
    console.log("Bot is ready");
    channel.send("--------------------Bot is ready--------------------");
    
    let first = true;
    let lastLines = [];

    setInterval(async () => {
        if(!fs.existsSync("../screenlog.0")) {
            console.log("Couldn't find a logfile, please add/rename one to screenlog.0");
            await Sleep(20000);
            return;
        }
        let logs = fs.readFileSync("screenlog.0");
        
        if(first) {
            channel.send(logs.toString());
            lastLines = lines;
            first = false;
            return;
        }
        let lines = logs.toString().split("\n");
        if(lines.length < 2) return;

        let oldLastLine = lastLines.length;
        let newLastLine = lines.length;
        if(oldLastLine != newLastLine) {
            let linesToPrint = lines.slice(oldLastLine);
            channel.send(linesToPrint.join("\n"));
        }
        lastLines = lines;

    }, 300); //500ms update interval

    process.on("exit", () => {
        console.log("Stopping the bot...");
        if(channel) {
            channel.send("--------------------Bot stopped--------------------");
            console.log("Bot stopped.")
        } else {
            console.log("Bot wasn't yet connected to Channel when stopped.")
        }
    });
});



function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

Client.login(token);