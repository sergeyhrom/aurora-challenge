import axios from 'axios'
import useCommonStore from '../stores/common'

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_MOVIES_API_URL,
  baseURL: 'https://november7-730026606190.europe-west1.run.app'
})

axiosInstance.interceptors.request.use((config) => {
  const { setLoading } = useCommonStore()
  setLoading(true)
  return config
}, (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use((response) => {
  const { setLoading } = useCommonStore()
  setLoading()
  return response
}, (error) => {
  const { setLoading } = useCommonStore()
  setLoading()
  return Promise.reject(error)
})

export default axiosInstance
