const tableName = 'KeywordsNum'
const sqlOperator = require('../../db/sql')
module.exports = {
  //获取一个用户的查询关键字历史记录
  getHotKeywords: async () => {
    const options = {
      order: [['num', 'DESC']],
      limit: 10,
    }
    const res = await sqlOperator.getAll(tableName, options)
    return res
  },
}
