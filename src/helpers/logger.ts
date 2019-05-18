import winston from 'winston'
import moment from 'moment'
import winstonTelegram from 'winston-telegram'
import dotenv from 'dotenv'
dotenv.config()
const { combine, label, printf, colorize, timestamp } = winston.format
winstonTelegram.Telegram

const logLabel = `${process.env.API_HOST}:${process.env.API_PORT}`
const logTimestamp = moment().format(`MM-DD-YY H:mm:ss`)
const logFileName = moment().format(`MM-DD-YY`)
const logMessageFormat = printf((info) => {
  return `[${info.label}]: ${info.message} | ${info.timestamp}`
})
winston.config.syslog.levels.telegram = 8

winston.addColors({
  error: `red`,
  warn: `yellow`,
  info: `cyan`,
  verbose: `blue`,
  debug: `white`,
  silly: `white`,
})

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [
    new winston.transports.File({
      filename: `./logs/${logFileName}.log`,
      level: `error`,
      format: combine(
        colorize({ all: true }),
        label({ label: logLabel }),
        timestamp({ format: logTimestamp }),
        logMessageFormat
      ),
    }),
    new winston.transports.Console({
      format: combine(
        label({ label: logLabel }),
        colorize({ all: true, message: true }),
        timestamp({ format: logTimestamp }),
        logMessageFormat
      ),
      level: `silly`,
    }),
  ],
})

logger.add(
  new winstonTelegram({
    level: `telegram`,
    token: process.env.TELEGRAM_SERVICES_TOKEN,
    chatId: process.env.TELEGRAM_SERVICES_BOT_CHAT_ID,
    unique: true,
    format: combine(
      label({ label: logLabel }),
      colorize({ all: true, message: true }),
      timestamp({ format: logTimestamp }),
      logMessageFormat
    ),
  })
)

export default logger
