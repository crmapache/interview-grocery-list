import React from 'react'

import { StyledButton, Shadow, ContentWrap } from '@components/Button/elements'

import { ButtonProps } from './types'

export const Button = ({
  children,
  onClick,
  color = 'TRANSPARENT_BLACK_40',
  fullWidth,
  disabled,
}: ButtonProps) => {
  const buttonClickHandler = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <StyledButton
      onClick={buttonClickHandler}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <ContentWrap>{children}</ContentWrap>
      <Shadow className="button-shadow" />
    </StyledButton>
  )
}
