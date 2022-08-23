const UserService = require('../../service/user')
const handleRes = require('../../utils/handleRes')
const { objectIsEmpty } = require('../../utils/tools')

module.exports = {
  queryGarbage: async (ctx, next) => {
    let res
    const { id, queryInfo } = ctx.request.body
    const sqlRes = await UserService.queryGarbage(id, queryInfo)
    if (objectIsEmpty(sqlRes)) {
      res = handleRes(ctx, '查询成功', true, sqlRes)
    } else {
      res = handleRes(ctx, '亲，未能查到相匹配的结果,请原谅', false)
    }
    return res
  },
  login: async (ctx, next) => {
    let res
    const loginRes = await UserService.login(ctx)
    if (objectIsEmpty(loginRes)) {
      res = handleRes(ctx, '登录成功', true, loginRes)
    } else {
      res = handleRes(ctx, '登录失败', false)
    }
    return res
  },
}
