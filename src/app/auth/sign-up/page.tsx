'use client'

import React, { useState } from 'react'
import SeekerOrSpecialist from './components/seeker-or-specialist'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import SignUpForm from './components/sign-up-form'
import SignUpFormSidebar from './components/sign-up-form-sidebar'

const SignUpPage = () => {
  const [role, setRole] = useState('')
  const [showSignUpPage, setShowSignUpPage] = useState(false)

  if (!showSignUpPage) {
    return (
      <SeekerOrSpecialist
        role={role}
        setRole={setRole}
        setShowSignUpPage={setShowSignUpPage}
      />
    )
  }

  return (
    <MaxWidthWrapper className="pt-40">
      <div>
        <div>
          <SignUpFormSidebar />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default SignUpPage
