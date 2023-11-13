import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './../actions/counterActions';

export default function AuthApp() {
    const set = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Auth App .... Login here to get the discount</p>
            {
                set ? (
                    <div>
                        <p>Congratulation..... you got 50% off. use UGT3434 coupon</p>
                    </div>
                )
                    : (
                        <div>
                            <p>Login here to get discount</p>
                        </div>
                    )}
            <button onClick={() => dispatch(login())}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
