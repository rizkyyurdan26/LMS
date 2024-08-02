/*eslint-disable*/
import { useEffect, useRef, useState } from "react"
import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"
import { login } from "../../services/auth.service"

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")
    const handleLogin = (event) => {
        event.preventDefault()
        // localStorage.setItem("email",event.target.email.value)
        // localStorage.setItem("password",event.target.password.value)
        // window.location.href = "/product"
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data,(status, res) => {
            if (status) {
                localStorage.setItem("token", res)
                window.location.href = "/product"
            } else{
                setLoginFailed(res.response.data)
                
            }
            
        })
    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus()
    },[])

    return(
        <form onSubmit={handleLogin}>
           
            <InputForm 
                label='Username' 
                type='text' 
                placeholder='Jhon Wick'
                name='username'
                ref ={usernameRef}>
            </InputForm>

            <InputForm 
                label='Password'
                type='password'
                name='password'
                placeholder='enter strong password'>

            </InputForm>

            <Button className='bg-blue-600 w-full' type='submit'
            >Login</Button>

            {loginFailed && <p className="text-red-500 text-center font-bold mt-5"> {loginFailed}</p>}
        </form>

    )
}

export default FormLogin