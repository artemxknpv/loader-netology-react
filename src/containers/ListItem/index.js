import React from 'react'
import {
  DirectionSubtitle,
  DirectionTitle,
  ItemAvatar,
  ItemWrapper,
  TextWrapper,
} from '../../components/styled/StyledListItem'

export const ListItem = ({ item }) => (
  <ItemWrapper>
    <TextWrapper>
      <DirectionTitle>{item.title}</DirectionTitle>
      <DirectionSubtitle>{item.numberOfCourses}</DirectionSubtitle>
    </TextWrapper>
    <ItemAvatar />
  </ItemWrapper>
)
