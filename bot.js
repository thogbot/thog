const { ShardClient } = require("detritus-client");
const config = require("./config.json");
const fs = require("fs");

const client = new ShardClient(config.token);

client.on("messageCreate", async ctx => {
  const { message } = ctx;
    if (message.content == "Why do chips get stale??") {
    const buffer = fs.readFileSync("images/thog.png");
    message.reply({ file: {data: buffer, filename: "thog.png" }});
    return;
  }
  if (/who|where|when|what|how|why/.test(message.content.toLowerCase())){
    message.reply('thog dont caare');
  }
});

(async () => {
  await client.run();
  console.log("Thog Bot Don't Caare");
})();
