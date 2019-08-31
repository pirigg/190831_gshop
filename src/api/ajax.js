
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {

  return new Promise(function (reslove, reject) {
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = aixos.get(url)
    } else {
      promise = axios.post(url, data)
    }
  
    promise.then(function (response) {
      reslove(response.data)
    }).catch(function (error) {
      reject(error)

    })
  })
}