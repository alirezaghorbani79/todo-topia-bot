const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_API_TOKEN);

bot.on("message", (ctx) => {
  const inlineKeyboard = Markup.inlineKeyboard([
    Markup.button.webApp("Open Todo Topia", process.env.WEB_APP_URL),
  ]);

  ctx.reply(
    "Let's get started 📝\n\nPlease tap the button below to start managing your tasks!",
    inlineKeyboard
  );
});
bot.catch((err, ctx) => {
  console.log(err);
});

bot.launch();
