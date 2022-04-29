import TelegramBotApi from "node-telegram-bot-api";

const token = ""; // сюда написать токен

const bot = new TelegramBotApi(token, {
    polling: true,
});

bot.on("message", (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, text);
});
