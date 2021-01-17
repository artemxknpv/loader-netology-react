const THOSE_NUMBERS = ['2', '3', '4']

export const parseList = (list) =>
  list.map((item) => {
    const { title } = item.direction
    const numberOfCourses = item.groups.reduce((prev, curr) => {
      /* eslint-disable no-param-reassign */
      prev += curr.items.length
      return prev
    }, 0)
    let numberOfCoursesFormatted = numberOfCourses.toString()
    const lastNumber =
      numberOfCoursesFormatted[numberOfCoursesFormatted.length - 1]
    if (
      THOSE_NUMBERS.includes(lastNumber) &&
      !(numberOfCourses % 100 < 19 && numberOfCourses % 100 > 10)
    ) {
      numberOfCoursesFormatted += ' курса'
    } else if (lastNumber === '1' && numberOfCourses % 100 !== 11) {
      numberOfCoursesFormatted += ' курс'
    } else {
      numberOfCoursesFormatted += ' курсов'
    }
    return {
      title,
      numberOfCourses: numberOfCoursesFormatted,
      id: item.direction.id,
    }
  })
