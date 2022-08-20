const tableName = 'Keywords'
const sqlOperator = require('../../db/sql')
module.exports = {
  //获取一个用户的查询关键字历史记录
  getKeyWordsByUserId: async (id) => {
    const options = {
      where: {
        userId: id,
      },
    }
    const res = await sqlOperator.getAll(tableName, options)
    return res
  },
  //清空一个用户的关键字记录
  clearKeyWordsByUserId: async (id) => {
    const keywordsRes = this.getKeyWordsByUserId(id)
    if (keywordsRes.length !== 0) {
      for (let i = 0; i < keywordsRes.length; i++) {
        //结果本身带有清空的方法
        keywordsRes[i].destroy()
      }
    }
  },
}
