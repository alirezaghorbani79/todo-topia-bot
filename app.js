const { Telegraf, Markup, Telegram } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_API_TOKEN);
console.log("TOKEN:", process.env.BOT_API_TOKEN);

bot.on("message", (ctx) => {
  const inlineKeyboard = Markup.inlineKeyboard([
    Markup.button.webApp(
      "Open TodoTopia",
      "https://open-evolving-seal.ngrok-free.app"
    ),
  ]);

  ctx.reply(
    "Let's get started 📝\n\nPlease tap the button below to start managing your tasks!",
    inlineKeyboard
  );
});

bot.launch();
