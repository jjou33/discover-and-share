import axios from 'axios'

export const fetchModule = async (url: string, options: object) => {
  try {
    const response = await axios(url, options)

    return response.data
  } catch (error) {
    console.error('Error : ', error)
    throw error
  }
}
