const tableName = 'Garbage'
const sqlOperator = require('../../db/sql')

module.exports = {
  getGarbageList: async () => {
    const res = await sqlOperator.getAndCountAll(tableName)
    const { count, rows } = res
    let garbageList = []
    if (rows.length) {
      for (let i = 0; i < rows.length; i++) {
        const item = rows[i]
        //联表查询分类
        const garbageCategory = await item.getGarbage_category()
        garbageList.push({
          id: item.id,
          garbage_name: item.garbage_name,
          category_name: garbageCategory.category_name,
        })
      }
    }
    return { count, garbageList }
  },
  //根据关键字查询一个结果
  getGarbageByKeywords: async (keywords) => {
    const sqlRes = await sqlOperator.getByPropBlur(
      tableName,
      'garbage_name',
      keywords
    )
    return sqlRes
  },
}
