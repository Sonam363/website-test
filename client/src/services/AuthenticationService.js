import Api from '@/services/Api'
// this file imports the axios object
// its then exports an object with a register method
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
