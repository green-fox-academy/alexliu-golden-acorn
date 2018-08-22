import { combineReducers } from 'redux';

const initState = {
  amount: 0,
};

const handleEnterKey = (amount) => {
  return (e) => {
    
  };
};

const componentDidMount = (amount) => {
  document.addEventListener('keydown', () => {
    if (e.keyCode === 38) {
      console.log(amount);
      return { amount: amount + 1 };
    } else if (e.keyCode === 40) {
      if (amount > 0) {
        return { amount: amount - 1 };
      }
    }
  });
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

const arrows = (state = initState, action) => {
  switch (action.type) {
    case 'ARROW_UP':
      componentDidMount(state.amount);
    case 'ARROW_DOWN':
      componentDidMount(state.amount);
    default:
      return state;
  }
};

export default combineReducers({
  acorns,
  arrows,
});
