const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("576394046214242304");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('online');
//client.user.setGame("- Atom.", "https://www.twitch.tv/idk");
  console.log("Reeebel | Logged in! Server count: ${client.guilds.size}");
 // client.user.setActivity("Royal Orders.",{type: 'WATCHING'});
});


client.login(process.env.BOT_TOKEN);
