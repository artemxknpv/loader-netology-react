import styled from 'styled-components'

export const DirectionTitle = styled.h2`
  font-size: 20px;
  font-family: 'Golos Text Sans', sans-serif;
  margin-bottom: 8px;
  font-weight: bolder;
`

export const DirectionSubtitle = styled.h3`
  font-size: 16px;
  font-family: 'Golos Text Sans', sans-serif;
  //font-weight: normal;
  color: #bcc1c6;
`

export const ItemWrapper = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  &:first-of-type {
    border-top: 1px solid #333;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemAvatar = styled.div`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: #f2f4f7;
`
