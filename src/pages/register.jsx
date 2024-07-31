/*eslint-disable*/


import FormRegister from "../components/Fragment/FormRegister"
import AuthLayouts from "../components/Layout/AuthLayouts"


const RegisterPage = () => {

    return (
        <AuthLayouts isi="Please fill in the data in the following form" title="Register" type="register">
            <FormRegister></FormRegister>
           
        </AuthLayouts>
    )

}

export default RegisterPage