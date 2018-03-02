import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Nuts',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Bananas',
    note: '',
    amount: 1200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Rent',
    note: '',
    amount: 120000,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
];

export default expenses;