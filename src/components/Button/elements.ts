import styled, { css } from 'styled-components'

import { colors } from '@theme/colors'

export const StyledButton = styled.button<{
  color: keyof typeof colors
  fullWidth?: boolean
  disabled?: boolean
}>`
  background-color: ${({ color, theme }) => theme.colors[color]};
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.TRANSPARENT_WHITE_40 : theme.colors.WHITE};
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition: color 0.2s;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        cursor: pointer;

        .button-shadow {
          background-color: ${({ theme }) => theme.colors.TRANSPARENT_BLACK_20};
        }
      }

      &:active {
        .button-shadow {
          background-color: ${({ theme }) => theme.colors.TRANSPARENT_BLACK_30};
        }
      }
    `}
`

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.2s;
  z-index: 1;
`

export const ContentWrap = styled.div`
  position: relative;
  z-index: 2;
  user-select: none;
`
