import Telegraf from "telegraf"
import dotenv from "dotenv"
dotenv.config()

const PORT: number = parseInt(<string>process.env.PORT, 10)

const bot = new Telegraf(process.env.TOKEN)
try {
  bot.telegram.setWebhook("https://21b55742.ngrok.io")
  bot.startWebhook("/", null, PORT)
} catch (err) {
  console.log(err)
}

bot.start(async (ctx) => {
  try {
    await ctx.reply("Welcome")
  } catch (err) {
    console.log(err)
  }
})

bot.catch((err) => console.log("error", err))
