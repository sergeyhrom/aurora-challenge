import axiosInstance from './axios'

const loadMovies = async (params) => {
  const { data } = await axiosInstance.get('movies', { params })
  return data
}

export {
  loadMovies
}
