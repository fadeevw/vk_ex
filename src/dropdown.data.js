export const data = [
   {
      description: 'Башня:',
      params: ['A', 'B'],
   },
   {
      description: 'Уровень:',
      params: [...Array(28).keys()].slice(3),
   },
   {
      description: 'Номер переговорки:',
      params: [...Array(10).keys()].map((level) => level + 1),
   },
]

export default data