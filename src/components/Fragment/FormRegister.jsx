/*eslint-disable*/
import Button from "../Elements/Button/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return(
        <form action=''>
            <InputForm 
                label='Full Name' 
                type='text' 
                placeholder='enter your name'
                name='fullname'>
            </InputForm>

            <InputForm 
                label='Email' 
                type='email' 
                placeholder='example@gmail.com'
                name='email'>
            </InputForm>

            <InputForm 
                label='Password'
                type='password'
                name='password'
                placeholder='enter strong password'>

            </InputForm>

            <InputForm 
                label='Confirm Password'
                type='password'
                name='confirmpassword'
                placeholder='repeat your password'>

            </InputForm>

            <Button className='bg-blue-600 w-full' >Register</Button>
        </form>

    )
}

export default FormRegister