import axios from 'axios'

const HTTPS = true;
const URL = 'coffeelux.club/api'
class GEO {
  static async routesIndex(){
    const res = await axios.get(`http${HTTPS?'s':''}://${URL}/captureRides/index`)
    return res.data
  }

  static async read(key){
    const res = await axios.get(`http${HTTPS?'s':''}://${URL}/captureRides/read/${key}`)
    return res.data
  }
}

export default GEO