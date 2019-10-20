import axios from 'axios'
import qs from 'qs'

export default {
 register:(data) => {
    return axios.request({
        url: 'register/ByPhoneNum',
        data,
        method: 'post'

    })
}
}