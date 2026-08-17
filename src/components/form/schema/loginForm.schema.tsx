import z from "zod";


export const loginSchema = z.object({
    email: z.email("Invalid email").min(1, "Email is required"),
    password: z.string().min(8, "Invalid password")
})

export type LoginFormValue = z.infer<typeof loginSchema>