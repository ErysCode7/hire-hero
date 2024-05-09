'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { SignUpFormSchema, signUpFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpForm = () => {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <div>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}></form>
    </div>
  )
}

export default SignUpForm
