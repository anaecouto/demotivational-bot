require("dotenv").config();
// const cron = require("node-cron");
// const axios = require("axios");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { getDemotivationalSentences } = require("./commands/demotivational");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", async (msg) => {
  switch (msg.content) {
    case "!makemesad":
      msg.channel.send(getDemotivationalSentences());
      break;
  }
});

// const task = cron.schedule("*/5 * * * * *", () => {
//   client.channels.cache.get("1044406189020172330").send(getDemotivationalSentences());
// });

// task.start();

client.login(process.env.BOT_TOKEN);
