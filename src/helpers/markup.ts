export const commands = {
  start: {
    command: 'start',
  },
}

export const keyboards = {
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
      ]
    },
  },
}
