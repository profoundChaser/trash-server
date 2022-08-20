const GarbageService = require('../../service/garbage')
const handleRes = require('../../utils/handleRes')

module.exports = {
  getGarbageList: async (ctx, next) => {
    let res
    const sqlRes = await GarbageService.getGarbageList()
    if (sqlRes.garbageList.length) {
      res = handleRes(ctx, '查询成功', true, sqlRes)
    } else {
      res = handleRes(ctx, '查询失败', false)
    }
    return res
  },
}
