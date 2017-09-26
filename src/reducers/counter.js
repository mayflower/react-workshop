import { INCREMENT, DECREMENT } from "../consts";

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state < 10 ? state + 1 : 10;
    case DECREMENT:
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
}

export default counter;
