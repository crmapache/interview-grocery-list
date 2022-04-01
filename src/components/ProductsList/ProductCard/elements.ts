import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_BLACK_40};
`

export const StyledInput = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.TRANSPARENT_WHITE_40};
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.WHITE};
  width: 100%;
  margin-bottom: 10px;
`

export const SetStatusWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    flex: 1 1 0;

    &:first-child {
      margin-right: 10px;
    }
  }
`

export const SetPriorityWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    flex: 1 1 0;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`
