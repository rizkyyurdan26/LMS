/*eslint-disable*/

import { forwardRef } from "react";
import Input from "./Inputs";
import Label from "./Labels";

const InputForm = forwardRef(
    (props, ref) => {
        const { label, name, type, placeholder } = props;
        return (
            <div className="mb-6">
                <Label htmlFor={label}>{label}</Label>
                <Input name ={name} type={type} placeholder={placeholder} ref={ref} />
            </div>
        )
    }
)
export default InputForm