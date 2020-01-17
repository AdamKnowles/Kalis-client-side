import React, { useRef } from "react"
import "./Login.css"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";


const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = useSimpleAuth()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()

       
        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <main style={{textAlign:"center"}}>
            <div className="patient-profile-detail-text">
            <form className="form--login" onSubmit={handleLogin}>
                {/* <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1> */}
                <fieldset>
                    <label htmlFor="inputEmail"> Username</label>
                    <input ref={username} type="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset className="mb-2">
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
            </div>
        </main>
    )
}
 export default Login