import MaxWidthWrapper from '@/components/max-width-wrapper'
import {
  USER_ROLE,
  UserRole,
  seekerRole,
  specialistRole,
} from '@/constant/role'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { capitalizeFirstLetter } from '@/utils/helper'

type SeekerOrSpecialistProps = {
  role: string
  setRole: React.Dispatch<React.SetStateAction<string>>
  setShowSignUpPage: React.Dispatch<React.SetStateAction<boolean>>
}

const SeekerOrSpecialist = ({
  role,
  setRole,
  setShowSignUpPage,
}: SeekerOrSpecialistProps) => {
  const handleSetRole = (role: UserRole) => {
    setRole(role)
  }

  const handleShowSignUpPage = () => {
    setShowSignUpPage(true)
  }

  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center pt-40">
      <h1 className="text-4xl font-semibold">
        Join as a {seekerRole} or {specialistRole}
      </h1>

      <div className="flex w-full items-center justify-center gap-5 py-10">
        <Card
          className={cn(
            'relative flex h-64 items-center justify-center md:cursor-pointer',
            {
              'border-gray-950 dark:border-blue-500': role === USER_ROLE.SEEKER,
            },
          )}
          onClick={() => handleSetRole('SEEKER')}
        >
          <CardHeader className="absolute left-0 top-0">
            <Image src="/vercel.svg" alt="seeker" width={100} height={100} />
          </CardHeader>
          <CardContent>
            <h4 className="text-xl font-medium text-black dark:text-white">
              Im a Seeker, looking for Specialist
            </h4>
          </CardContent>
        </Card>

        <Card
          className={cn(
            'relative flex h-64 items-center justify-center md:cursor-pointer',
            {
              'border-gray-950 dark:border-blue-500':
                role === USER_ROLE.SPECIALIST,
            },
          )}
          onClick={() => handleSetRole('SPECIALIST')}
        >
          <CardHeader className="absolute left-0 top-0">
            <Image src="/vercel.svg" alt="seeker" width={100} height={100} />
          </CardHeader>
          <CardContent>
            <h4 className="text-xl font-medium text-black dark:text-white">
              Im a Specialist, looking for Seeker
            </h4>
          </CardContent>
        </Card>
      </div>

      <Button type="button" onClick={handleShowSignUpPage}>
        Join as {capitalizeFirstLetter(role.toLowerCase())}
      </Button>
    </MaxWidthWrapper>
  )
}

export default SeekerOrSpecialist
