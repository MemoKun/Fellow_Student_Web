import axios from 'axios'
import qs from 'qs'

export default {
 login:(data) => {
    return axios.request({
        url: 'login',
        data,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
}
}
