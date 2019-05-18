"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const moment_1 = __importDefault(require("moment"));
const winston_telegram_1 = __importDefault(require("winston-telegram"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { combine, label, printf, colorize, timestamp } = winston_1.default.format;
winston_telegram_1.default.Telegram;
const logLabel = `${process.env.API_HOST}:${process.env.API_PORT}`;
const logTimestamp = moment_1.default().format(`MM-DD-YY H:mm:ss`);
const logFileName = moment_1.default().format(`MM-DD-YY`);
const logMessageFormat = printf((info) => {
    return `[${info.label}]: ${info.message} | ${info.timestamp}`;
});
winston_1.default.config.syslog.levels.telegram = 8;
winston_1.default.addColors({
    error: `red`,
    warn: `yellow`,
    info: `cyan`,
    verbose: `blue`,
    debug: `white`,
    silly: `white`,
});
const logger = winston_1.default.createLogger({
    levels: winston_1.default.config.syslog.levels,
    transports: [
        new winston_1.default.transports.File({
            filename: `./logs/${logFileName}.log`,
            level: `error`,
            format: combine(colorize({ all: true }), label({ label: logLabel }), timestamp({ format: logTimestamp }), logMessageFormat),
        }),
        new winston_1.default.transports.Console({
            format: combine(label({ label: logLabel }), colorize({ all: true, message: true }), timestamp({ format: logTimestamp }), logMessageFormat),
            level: `silly`,
        }),
    ],
});
logger.add(new winston_telegram_1.default({
    level: `telegram`,
    token: process.env.TELEGRAM_SERVICES_TOKEN,
    chatId: process.env.TELEGRAM_SERVICES_BOT_CHAT_ID,
    unique: true,
    format: combine(label({ label: logLabel }), colorize({ all: true, message: true }), timestamp({ format: logTimestamp }), logMessageFormat),
}));
exports.default = logger;
