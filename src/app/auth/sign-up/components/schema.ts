import * as z from 'zod'

export const signUpFormSchema = z
  .object({
    first_name: z.string().min(1, { message: 'First name is required' }),
    last_name: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().email().min(1, { message: 'Email is required' }),
    password: z.string().min(1, 'Password is required'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
