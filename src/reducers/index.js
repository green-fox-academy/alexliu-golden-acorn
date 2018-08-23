import { combineReducers } from 'redux';

const initState = {
  amount: 0,
};

const acorns = (state = initState, action) => {
  switch (action.type) {
    case 'BUY_ACORN':
      return {
        amount: state.amount + action.amount,
      };
    case 'EAT_ACORN':
      if (state.amount > 0) {
        return {
          amount: state.amount - action.amount,
        };
      }
    default:
      return state;
  }
};

// const componentDidMount = () => {
//   document.addEventListener('keydown', this.handleEnterKey());
// };

// const handleEnterKey = (state) => {
//   return (e) => {
//     if (e.keyCode === 38) {
//       return { amount: state.amount + 1 };
//     } else if (e.keyCode === 40) {
//       if (state.amount > 0) {
//         return { amount: state.amount - action.amount };
//       }
//     }
//   };
// };

// const arrows = (state = initState, action) => {
//   switch (action.type) {
//     case 'ARROW_UP':
//       componentDidMount();
//     case 'ARROW_DOWN':
//       componentDidMount();
//     default:
//       return state;
//   }
// };

export default combineReducers({
  acorns,
  // arrows,
});
