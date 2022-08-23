const tableName = 'GarbageCategory'
const sqlOperator = require('../../db/sql')

module.exports = {
  getGarbageCategoryList: async () => {
    const res = await sqlOperator.getAndCountAll(tableName)
    return res
  },
}
