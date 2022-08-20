const mapperConfig = require('../config/mapperConfig')

module.exports = {
  getAndCountAll: async function (tableName, options = {}) {
    return mapperConfig[tableName].findAndCountAll(options)
  },
  getAll: async function (tableName, options = {}) {
    return mapperConfig[tableName].findAll(options)
  },
  getByPK: async function (tableName, pk, val) {
    return mapperConfig[tableName].findByPk({
      where: {
        [pk]: val,
      },
    })
  },
  getByPropAccurate: async function (tableName, key, val) {
    return mapperConfig[tableName].findOne({
      where: {
        [key]: val,
      },
    })
  },
  getByPropBlur: async function (tableName, key, val) {
    return mapperConfig[tableName].findOne({
      where: {
        [key]: {
          [Op.like]: `${val}%`,
        },
      },
    })
  },
  updateRecord: async function (tableName, pk, pk_val, updateInfo) {
    const item = await this.getByPK(tableName, pk, pk_val)
    if (item) {
      return item.update(updateInfo)
    } else {
      throw new Error(`the customer with id ${id} is not exist`)
    }
  },
  createRecord: async (tableName, createInfo) => {
    return mapperConfig[tableName].create(createInfo)
  },
  deleteRecord: async (tableName, pk, pk_val) => {
    const item = await this.getByPK(tableName, pk, pk_val)
    if (item) {
      return item.destroy()
    } else {
      throw new Error(`the customer with id ${id} is not exist`)
    }
  },
}
