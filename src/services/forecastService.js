import { axiosInstance } from '../config/axios'
import apiUrls from '../config/apiUrls'

class ForecastService {
  get (city) {
    return axiosInstance.get(apiUrls.FORECAST + '/' + city)
      .then(response => response.data)
  }
}

export default ForecastService
