import { capitalizeFirstLetter } from '@/utils/helper'

const USER_ROLE = {
  SEEKER: 'SEEKER',
  SPECIALIST: 'SPECIALIST',
} as const

export type UserRole = keyof typeof USER_ROLE

const seekerRole = capitalizeFirstLetter(USER_ROLE.SEEKER)
const specialistRole = capitalizeFirstLetter(USER_ROLE.SPECIALIST)

export { USER_ROLE, seekerRole, specialistRole }
