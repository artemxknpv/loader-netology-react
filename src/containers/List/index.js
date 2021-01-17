import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/actions'
import { parseList } from '../../redux/tools/helpers'
import {
  ListWrapper,
  MainWrapper,
  StyledEmphasis,
  StyledHeader,
} from '../../components/styled/StyledList'
import { ListItem } from '../ListItem'
import { Loader } from '../../components/Loader'

export const List = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector((state) => state.isLoading)
  const listOfDirections = useSelector((state) => state.list).items
  const parsedList = parseList(listOfDirections)
  const { error } = listOfDirections
  const isError = !!error

  React.useEffect(() => {
    dispatch(
      actions.fetchList.start({
        url:
          'https://gitcdn.link/repo/netology-code/react-task/master/netology.json',
      }),
    )
  }, [dispatch])

  return (
    <MainWrapper>
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <>
          <StyledHeader>
            Изучайте <StyledEmphasis>актуальные темы</StyledEmphasis>
          </StyledHeader>
          <ListWrapper>
            {isError
              ? error
              : parsedList.map((elem) => (
                  <ListItem item={elem} key={elem.id} />
                ))}
          </ListWrapper>
        </>
      )}
    </MainWrapper>
  )
}
