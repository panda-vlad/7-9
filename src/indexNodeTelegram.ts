// import fs from 'fs'
// import dotenv from 'dotenv'
// import TelegramBot from 'node-telegram-bot-api'
// import _ from 'lodash'
// import logger from './helpers/logger'
// import { commands, keyboards } from './helpers/markup'
// // import { ctx } from './app/ctx'
// dotenv.config()
// const bot = new TelegramBot(process.env.TOKEN, {
//   webHook: true,
// })
// bot.setWebHook(`${process.env.URL}/bot${process.env.TOKEN}`)
// bot.on('webhook_error', (error) => logger.log('error', error.toString()))

// // 📢  COMMANDS HANDLERS 🍾 START command
// bot.onText(new RegExp(`\/${commands.start.command}`), async (msg, [source, match]) => {
//   const { chat, from } = msg
//   try {
//     await bot.sendMessage(chat.id, `Чат бот компании Eco Lake рад приветствовать Вас! 🌊`, {
//       reply_markup: {
//         keyboard: keyboards.buttonsKeyboards.initialKeyboard,
//       },
//     })
//     ctx.set(`ctx.name`, `main menu`)
//   } catch (err) {
//     logger(err)
//   }
// })
