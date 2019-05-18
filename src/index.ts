import Telegraf from "telegraf"
import dotenv from "dotenv"
dotenv.config()

const bot = new Telegraf(process.env.PORT)
bot.telegram.setWebhook("https://21b55742.ngrok.io")
bot.startWebhook("/", null, 5001)
bot.start(async (ctx) => {
  try {
    await ctx.reply("Welcome")
  } catch (err) {
    console.log(err);
  }
})

bot.catch((err) => console.log("error", err))
