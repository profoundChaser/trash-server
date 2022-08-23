const tableName = 'User'
const sqlOperator = require('../../db/sql')
const wxlogin = require('../../utils/wxlogin')
const jwt = require('jsonwebtoken')
const WXBizDataCrypt = require('../../utils/WXBizDataCrypt')
const { AppID } = require('../../config/wxconfig')
const handleRes = require('../../utils/handleRes')

module.exports = {
  //用户查询垃圾
  queryGarbage: async (id, keyword) => {
    let res
    //从垃圾中获取结果
    const sqlRes = await sqlOperator.getByPropBlur(
      'Garbage',
      'garbage_name',
      keyword
    )
    if (sqlRes) {
      const garbageCategory = await sqlRes.getGarbage_category()
      res = {
        garbage_category: garbageCategory.category_name,
        keyword,
      }
    }
    //查询用户的关键字是否存在
    const keywordRes = await sqlOperator.getByPropAccurate('Keywords', {
      where: {
        keyword_name: keyword,
        userId: id,
      },
    })
    //如果关键字不存在则生成
    if (!keywordRes) {
      await sqlOperator.createRecord('Keywords', {
        keyword_name: keyword,
        userId: id,
      })
    } else {
      await keywordRes.update({ createdAt: Date.now() })
    }
    //给存在的关键字num自增
    const keywordNumRes = await sqlOperator.getByPropAccurate('KeywordsNum', {
      where: {
        keyword_name: keyword,
      },
    })
    if (keywordNumRes) {
      await keywordNumRes.increment('num')
    } else {
      //不存在则生成该记录
      await sqlOperator.createRecord('KeywordsNum', {
        keyword_name: keyword,
        num: 1,
      })
    }
    return res
  },
  //用户授权登录
  login: async (ctx) => {
    let res
    let { code, iv, encryptedData, userInfo } = ctx.request.body
    iv = decodeURIComponent(iv)
    encryptedData = decodeURIComponent(encryptedData)
    //通过code去获取session_key openId
    const codeRes = await wxlogin.getOpenId(code)
    const { session_key, openid } = codeRes
    //解密获取用户信息
    // const userInfo = wxlogin.decryptUserInfo(session_key, encryptedData, iv)
    const options={
      where : {
        openId: openid,
      }
    }
    //查询数据库是否存在该用户
    const user = await sqlOperator.getByPropAccurate(tableName, options)
    if (user) {
      //有该用户 则生成token
      const token = jwt.sign(
        {
          id: user.id,
          openid: user.openId,
        },
        'user_token',
        { expiresIn: process.env.NODE_ENV != 'development' ? '3d' : '365d' }
      )
      res = {
        id:user.id,
        username: user.username,
        avatar: user.avatar,
        token,
        session_key
      }
    } else {
      //没有该用户 则添加该用户
      const user = await sqlOperator.createRecord(tableName, {
        username: userInfo.nickName,
        openId:openid,
        avatar: userInfo.avatarUrl,
      })

      const token = jwt.sign(
        {
          id: user.id,
          openid: user.openId,
        },
        'user_token',
        { expiresIn: process.env.NODE_ENV != 'development' ? '3d' : '365d' }
      )
      res = {
        id:user.id,
        username: user.username,
        avatar: user.avatar,
        token,
        session_key
      }
    }
    console.log(res)
    return res
  },
}
