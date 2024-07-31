/*eslint-disable*/

import FormLogin from "../components/Fragment/FormLogin"
import AuthLayouts from "../components/Layout/AuthLayouts"


const LoginPage = () => {

    return (
        <AuthLayouts isi="Selamat Datang, Silahkan Login" title="Login" type="login">
            <FormLogin></FormLogin>

            
        </AuthLayouts>
    )

}

export default LoginPage