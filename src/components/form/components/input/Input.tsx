import { Controller, type Control, type FieldValues, type Path } from "react-hook-form"
import './Input.css'
interface InputProps<T extends FieldValues>{
    name: Path<T>,
    control: Control<T>,
    label: string,
    type?: string,
    error?: string
}

export function Input<T extends FieldValues,>({name, control, label, type, error, ...rest}: InputProps<T>) {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                <input
                    {...field}
                    {...rest} 
                    id={name}
                    type={type}
                    value={field.value ?? ""} 
                />}
            
            />
            {error && <p className="input-error">{error}</p>}
        </div>
    )
}