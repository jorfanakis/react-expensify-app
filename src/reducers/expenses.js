
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,  action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
      //return state.filter((e) => { return e.id !== action.id; });
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((e) =>{
        if (e.id === action.id) {
          return {
            ...e,
            ...action.updates
          };
        } else {
          return e;
        }
      });

  case 'SET_EXPENSES':
    return action.expenses;

    default:
      return state;
  }

};

export default expensesReducer;
