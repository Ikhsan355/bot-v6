const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
    const text = msg.text;

    if (!text) return;

    if (text === '/start') {
        return bot.sendMessage(msg.chat.id, '🔥 Bot aktif');
    }

    if (text.startsWith('/mp3 ')) {
        return bot.sendMessage(msg.chat.id, '🎵 Fitur MP3 siap (tambahkan nanti)');
    }

    if (text.startsWith('/mp4 ')) {
        return bot.sendMessage(msg.chat.id, '🎬 Fitur MP4 siap (tambahkan nanti)');
    }

    if (text === '/menu') {
        return bot.sendMessage(msg.chat.id,
`🔥 MENU

/mp3 link
/mp4 link
/stats`);
    }
});
