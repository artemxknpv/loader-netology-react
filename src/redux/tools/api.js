import axios from 'axios'

export const fetchList = async (url) => (await axios.get(url)).data
