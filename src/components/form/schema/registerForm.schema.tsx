import z from "zod";

export const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email adress").min(1, "Email is required"),
    password: z.string().min(8, "Password is required"),
    confirmPassword: z.string().min(8, "Confirm password is required")
}).refine(data => data.password === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>