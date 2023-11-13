import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, res } from './../actions/counterActions';

export default function MyCounter() {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <p>the initial state is: {count}</p>
            <button onClick={() => dispatch(inc())}>increment</button>
            <button onClick={() => dispatch(dec())}>decrement</button>
            <button onClick={() => dispatch(res())}>reset</button>
        </div>
    )
}
