/*eslint-disable*/
import { useEffect, useRef } from "react"
import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("email",event.target.email.value)
        localStorage.setItem("password",event.target.password.value)
        window.location.href = "/product"
    }

    const emailRef = useRef(null)

    useEffect(() => {
        emailRef.current.focus()
    },[])

    return(
        <form onSubmit={handleLogin}>
            <InputForm 
                label='Email' 
                type='email' 
                placeholder='example@gmail.com'
                name='email'
                ref ={emailRef}>
            </InputForm>

            <InputForm 
                label='Password'
                type='password'
                name='password'
                placeholder='enter strong password'>

            </InputForm>

            <Button className='bg-blue-600 w-full' type='submit'
            >Login</Button>
        </form>

    )
}

export default FormLogin