'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

type LoginButtonProps = {
  className?: string
}

const LoginButton = ({ className }: LoginButtonProps) => {
  const router = useRouter()

  const redirectToLoginPage = () => {
    router.push('/auth/login')
  }

  return (
    <Button type="button" className={className} onClick={redirectToLoginPage}>
      Login
    </Button>
  )
}

export default LoginButton
