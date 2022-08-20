const UserService = require('../../service/user')
const handleRes = require('../../utils/handleRes')
const { objectIsEmpty } = require('../../utils/tools')

module.exports = {
  queryGarbage: async (ctx, next) => {
    let res
    const { id } = ctx.request.body
    const sqlRes = await UserService.queryGarbage(1, '苹果')
    if (objectIsEmpty(sqlRes)) {
      res = handleRes(ctx, '查询成功', true, sqlRes)
    } else {
      res = handleRes(ctx, '亲，未能查到相匹配的结果,请原谅', false)
    }
    return res
  },
}
