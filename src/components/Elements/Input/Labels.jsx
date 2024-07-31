/*eslint-disable*/
const Label = (props) => {
        const { children, htmlFor } = props
        return (
            <label 
                htmlFor={htmlFor} 
                className="block mb-2 text-xl font-semibold text-black  ">
                {children}
            </label>
        );
    }
    
    export default Label