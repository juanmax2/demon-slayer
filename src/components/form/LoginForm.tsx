import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "./components/input/Input";
import { loginSchema, type LoginFormValue } from "./schema/loginForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import './Form.css'

export function LoginForm() {

    const navigate = useNavigate()
    const { login } = useAuthContext()
    const {control, handleSubmit, setError, formState: {errors}} = useForm<LoginFormValue>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit: SubmitHandler<LoginFormValue> = (data) => {
        const isSuccess = login(data.email, data.password)

        if (isSuccess){
            navigate("/private/characters")
        }else{
            setError("password", {
                type: "manual",
                message: "El correo o la contraseña no coinciden"
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                control={control}
                label="Email"
                error={errors.email ? errors.email.message : ""}
            />
            <Input
                name="password"
                control={control}
                label="Password"
                error={errors.password ? errors.password.message : ""}
                type="password"
            />

            <button type="submit">Iniciar</button>
        </form>
    )
}