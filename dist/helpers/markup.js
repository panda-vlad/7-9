"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = {
    start: {
        command: 'start',
    },
};
exports.keyboards = {
    buttonsKeyboards: {
        initialKeyboard: () => {
            return [
                [
                    {
                        text: 'Заработать',
                    },
                ],
                [
                    {
                        text: 'Я в кафе!',
                    },
                ],
                [
                    {
                        text: 'Баланс: 100 cfs',
                    },
                ],
            ];
        },
    },
};
