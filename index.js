const TelegramBot = require("node-telegram-bot-api");
const nodemon = require("nodemon");
const token = "5068847959:AAFPNBnU-QnvovjZSJlgnK7DBXi6j8C7psY";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (e) => {
  const chatId = e.chat.id;
  const text = e.text;
  if (text === "/start") {
    bot.sendMessage(chatId, `MagicBotga xush kelibsiz ${e.chat.first_name}`);
  }
});
