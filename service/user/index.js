const tableName = 'User'
const sqlOperator = require('../../db/sql')

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
    }else{
      await keywordRes.update({createdAt:Date.now()})
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
      await sqlOperator.createRecord('KeywordsNum', {
        keyword_name: keyword,
        num: 1,
      })
    }
    return res
  },
}
