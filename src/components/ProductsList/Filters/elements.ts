import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;

  & > button {
    flex: 1 1 0;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`
