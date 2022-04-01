import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

export const ElementWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_BLACK_40};
  transition: background-color 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.TRANSPARENT_BLACK_50};
  }
`

export const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Status = styled.div<{ isActive: boolean }>`
  font-size: 10px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.TRANSPARENT_WHITE_70 : theme.colors.TRANSPARENT_WHITE_40};
  margin-right: 10px;
  user-select: none;
  text-transform: capitalize;
`

export const Priority = styled.div<{ priority: number }>`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${({ priority, theme }) => theme.colors[`PRIORITY_${priority}`]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  line-height: 10px;
  color: ${({ theme }) => theme.colors.TRANSPARENT_WHITE_70};
  user-select: none;
`

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.ORANGE};
  user-select: none;
`

export const CardsWrapper = styled.div`
  flex: 1 1 0;
  margin-right: 10px;
`
