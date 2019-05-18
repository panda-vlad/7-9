"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = __importDefault(require("telegraf"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new telegraf_1.default(process.env.PORT);
bot.telegram.setWebhook("https://21b55742.ngrok.io");
bot.startWebhook("/", null, 5001);
bot.start((ctx) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield ctx.reply("Welcome");
    }
    catch (err) {
        console.log(err);
    }
}));
bot.catch((err) => console.log("error", err));
