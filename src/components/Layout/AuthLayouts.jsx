
/*eslint-disable*/
import { Link } from "react-router-dom"
const AuthLayouts = (props) => {
    const {children, title, type,isi} = props

    return (
        <div className='flex justify-left pl-40 min-h-screen items-center' style={{
            background: "url('/images/bg1.jpg') no-repeat center center fixed",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}>
            
            <div className="w-full max-w-md bg-white bg-opacity-50 p-8 rounded-3xl shadow-3xl"
            style={{ boxShadow: 'inset 9px 9px 9px rgba(0.9, 0.9, 0.9, 0.25)' }}>
                <h1 className='text-7xl font-bold mb-6 text-blue-600'>{title}</h1>
                <p className='font-regular text-2xl text-black mb-8 '>
                {isi}
                <div style={{ borderBottom: '8px solid #3b82f6', width: '25%', marginBottom: '2rem', paddingTop: '0.2rem', paddingBottom: '0.5rem' }}></div>
                </p>
                <div className="w-full">
                {children}
                {/* <Navigation type={type}></Navigation> */}
                <p className="text-xl font-semibold my-5 text-center">
                    {type === "login" ? "Don't have an Account? " : "Already have an Account? "}
                    {type === "login" && (
                    <Link to="/register" className="text-blue-600 mx-2">
                    Register</Link> 
                    )}
                    {type === "register" && (
                    <Link to="/login" className="text-blue-600 mx-2">
                    Login</Link> 
                    )}
                </p>
                </div>
            </div>
        </div>

    )
}

//untuk memecah function
// const Navigation = ({type}) => {
//     if (type === "login") {
//         return (
//             <p className="text-sm my-5 text-center">
//                     Don't have an Account?
                    
//                     <Link to="/register" className="text-blue-600 mx-2">
//                     Register</Link> 
//             </p>
//             )
//     } else {
//         return (
//             <p className="text-sm my-5 text-center">
//                     Already have an Account?
                    
//                     <Link to="/login" className="text-blue-600 mx-2">
//                     Login</Link> 
//             </p>
//             )
//     }
// }

export default AuthLayouts