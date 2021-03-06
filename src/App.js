import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'

function App() {

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch =useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>{dispatch(increment(1))}}>+</button>
      <button onClick={()=>{dispatch(decrement(1))}}>-</button>
      {isLogged? <h3>Just for users</h3>:''}
    </div>
  );
}

export default App;
