import axios from 'axios';

export const fetchList = async url => {
  return (await axios.get(url)).data;
}

export const parseList = list => {
  return list.map(item => {
    const title = item.direction.title
    const numberOfCourses = item.groups.reduce((prev, curr) => {
      prev += curr.items.length;
      return prev;
    }, 0)
    return { title, numberOfCourses, id: item.direction.id }
  });
}