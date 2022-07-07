import React from 'react'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as appAction from "./actions/app.action"

export default function App() {

  const appReducer = useSelector(({appReducer}) => appReducer);
  const box1Reducer = useSelector(({box1Reducer}) => box1Reducer);
  const dispatch = useDispatch();
  return (
    <div style={{padding: 10}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <button onClick={()=>dispatch(appAction.add())}>ADD</button>
        <button onClick={()=>dispatch(appAction.remove())}>REM</button>
        <button onClick={()=>dispatch(appAction.clear(-1))}>CLR</button>
      </div>
      <h1>CodeMobiles : {appReducer.count}, B1({box1Reducer.count1})</h1>
      <Box1/>
      <Box2/>
      <Box3/>
    </div>
  )
}
