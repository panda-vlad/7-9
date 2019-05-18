import Telegraf, { Extra, Telegram } from "telegraf"
import Markup from "telegraf/markup"
import dotenv from "dotenv"
dotenv.config()

const PORT: number = parseInt(<string>process.env.PORT, 10)

const bot = new Telegraf(process.env.TOKEN)
const telegram = new Telegram(process.env.TOKEN)
try {
  bot.telegram.setWebhook("https://21b55742.ngrok.io")
  bot.startWebhook("/", null, PORT)
} catch (err) {
  console.log(err)
}

bot.start(async (ctx) => {
  try {
    const keyboard = Extra.markdown().markup((m) =>
      m.inlineKeyboard([m.callbackButton("Test button", "test")])
    )
    await ctx.reply("Welcome", keyboard)
  } catch (err) {
    console.log(err)
  }
})

bot.command("custom", (ctx) => {
  console.log("context", ctx)
  return ctx.reply(
    "Custom message",
    Markup.keyboard([["🔍 Search", "😎 Popular"]])
      .oneTime()
      .resize()
      .extra()
  )
})

bot.on("inline_query", async (ctx) => {
  const keyboard = Extra.markdown().markup((m) =>
    m.inlineKeyboard([m.callbackButton("Test button", "test")])
  )
  // telegram.answerInlineQuery()
})

bot.catch((err) => console.log("error", err))
bot.launch()
