import { INCREMENT, DECREMENT } from "../consts";

export function incrementCounter() {
  return { type: INCREMENT };
}

export function decrementCounter() {
  return { type: DECREMENT };
}
