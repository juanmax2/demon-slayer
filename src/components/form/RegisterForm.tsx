import { useForm, type SubmitHandler } from "react-hook-form"
import { type FormValues, schema } from "./schema/registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./components/input/Input"
import './Form.css'
import { useAuthContext } from "../../hooks/useAuthContext"
import type { User } from "../../users/model/user.model"
import { useNavigate } from "react-router-dom"


export function RegisterForm() {
    const navigate = useNavigate()
    const { register } = useAuthContext()
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = (data) =>{
        const user: User = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        register(user)
        navigate('/login')
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name="name"
                    control={control}
                    label="name"
                    error={errors.name ? errors.name.message : ""}
                />
                <Input 
                    name="email"
                    control={control}
                    label="email"
                    error={errors.email ? errors.email.message : ""}
                />
                <Input 
                    name="password"
                    type="password"
                    control={control}
                    label="password"
                    error={errors.password ? errors.password.message : ""}
                />
                <Input 
                    name="confirmPassword"
                    type="password"
                    control={control}
                    label="confirmPassword"
                    error={errors.confirmPassword ? errors.confirmPassword.message : ""}
                />

                <button type="submit">Registrarse</button>
            </form>
    )
}