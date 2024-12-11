'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

type SignUpButtonProps = {
  className?: string
}

const SignUpButton = ({ className }: SignUpButtonProps) => {
  const router = useRouter()

  const redirectToSignUpPage = () => {
    router.push('/auth/sign-up')
  }

  return (
    <Button
      type="button"
      variant="secondary"
      className={className}
      onClick={redirectToSignUpPage}
    >
      Sign Up
    </Button>
  )
}

export default SignUpButton
