const DiscordMusicBot = require("./structures/DiscordMusicBot");
const { keep_alive } = require("./structures/keep_alive");

const client = new DiscordMusicBot();

client.build();

module.exports = client; //;-;
