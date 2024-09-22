import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset }  from '../state/features/counterSlice';

export const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
        <h3>Counter</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <p>{count}</p>
    </div>
  )
}
