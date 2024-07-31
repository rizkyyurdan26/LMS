import { forwardRef } from "react"

/*eslint-disable*/
const Input = forwardRef(
    (props, ref) => {
        const{ type, placeholder, name} = props;
        return (
            <input
                type={type}
                className="w-full px-5 py-5 mb-0 text-md border rounded-md text-slate-700 placeholde: opacity-80"
                placeholder={placeholder}
                name={name}
                id={name}
                ref={ref}
            />
        )
    }
)

export default Input