import React, {useReducer,useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
// import ApiFetch from './components/ApiFetch';
import AppContext from './contexts/AppContext';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';
// import Memo from './components/Memo';
// import CompB from './components/CompB';
// import B from './components/B';
// import BasicReducer from './components/BasicReducer';
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from './components/TimerContainer';

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const addCount1 = useCallback(() => {
      setCount1(prev=>prev+1)
  },[count1])

  const addCount2 = useCallback(() => {
      setCount2(prev=>prev+1)
  },[count2])

  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 name="Hooks"/> */}
        {/* <BasicUseEffect></BasicUseEffect> */}
        {/* <TimerContainer/> */}
        {/* <ApiFetch /> */}
        {/* <B></B> */}
        {/* <BasicReducer/> */}
        {/* <h3>{count}</h3>
        <CompB></CompB> */}
        {/* <Memo></Memo> */}
        <CountDisplay name={"count1"} count={count1}/>
        <CountClick handleClick={addCount1}>AddCount1</CountClick>
        <CountDisplay name={"count2"} count={count2}/>
        <CountClick handleClick={addCount2}>AddCount2</CountClick>
      </header>
    </div>
    </AppContext.Provider>
  );
}

export default App;
