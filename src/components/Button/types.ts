import { colors } from '@theme/colors'
import { ReactChild } from 'react'

export interface ButtonProps {
  children: ReactChild
  onClick: () => void
  color?: keyof typeof colors
  fullWidth?: boolean
  disabled?: boolean
}
