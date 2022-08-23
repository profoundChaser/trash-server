const { AppSecret, AppID } = require('../config/wxconfig')
const httpRequest = require('koa2-request')
const WXBizDataCrypt = require('../utils/WXBizDataCrypt')
module.exports = {
  getOpenId: (code) => {
    return new Promise(async (resolve) => {
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${AppID}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`
      const res = await httpRequest(url) // http请求
      const { session_key, openid } = JSON.parse(res.body)
      resolve({ session_key, openid })
    })
  },
  decryptUserInfo: (session_key, encryptedData, iv) => {
    const WBC = new WXBizDataCrypt(AppID, session_key)
    const userInfo = WBC.decryptData(encryptedData, iv)
    return userInfo
  },
}
