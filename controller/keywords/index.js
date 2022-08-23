const KeywordsService = require('../../service/keywords')
const handleRes = require('../../utils/handleRes')

module.exports = {
  getKeyWordsByUserId: async (ctx, next) => {
    let res
    const { id } = ctx.request.body
    const sqlRes = await KeywordsService.getKeyWordsByUserId(id)
    console.log(sqlRes)
    if (sqlRes.length) {
      res = handleRes(ctx, '查询成功', true, sqlRes)
    } else {
      res = handleRes(ctx, '查询失败', false)
    }
    return res
  },
  clearKeyWordsByUserId: async (ctx, next) => {
    let res
    const { id } = ctx.request.body
    const sqlRes = await KeywordsService.clearKeyWordsByUserId(id)
    console.log(sqlRes)
  },
}
