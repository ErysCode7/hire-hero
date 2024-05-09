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
    <MaxWidthWrapper className="pt-40 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">
        Join as a {seekerRole} or {specialistRole}
      </h1>

      <div className="flex justify-center items-center gap-5 w-full py-10">
        <Card
          className={cn(
            'relative h-64 flex items-center justify-center md:cursor-pointer',
            {
              'border-gray-950 dark:border-blue-500': role === USER_ROLE.SEEKER,
            },
          )}
          onClick={() => handleSetRole('SEEKER')}
        >
          <CardHeader className="absolute top-0 left-0">
            <Image src="/vercel.svg" alt="seeker" width={100} height={100} />
          </CardHeader>
          <CardContent>
            <h4 className="text-black dark:text-white text-xl font-medium">
              Im a Seeker, looking for Specialist
            </h4>
          </CardContent>
        </Card>

        <Card
          className={cn(
            'relative h-64 flex items-center justify-center md:cursor-pointer',
            {
              'border-gray-950 dark:border-blue-500':
                role === USER_ROLE.SPECIALIST,
            },
          )}
          onClick={() => handleSetRole('SPECIALIST')}
        >
          <CardHeader className="absolute top-0 left-0">
            <Image src="/vercel.svg" alt="seeker" width={100} height={100} />
          </CardHeader>
          <CardContent>
            <h4 className="text-black dark:text-white text-xl font-medium">
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
