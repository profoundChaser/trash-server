const KeywordsNumService = require('../../service/keywords_num')
const handleRes = require('../../utils/handleRes')

module.exports = {
    getHotKeywords: async (ctx, next) => {
    let res
    const sqlRes = await KeywordsNumService.getHotKeywords()
    if (sqlRes.length) {
      res = handleRes(ctx, '查询成功', true, sqlRes)
    } else {
      res = handleRes(ctx, '查询失败', false)
    }
    return res
  },
}