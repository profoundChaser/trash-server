module.exports = {
  ArrayISEmpty(array) {
    return array.length === 0
  },
  //生成几位数的随机数
  createRandomNum(n) {
    let res = ''
    for (let i = 0; i < n; i++) {
      res += ~~(Math.random() * 9)
    }
    return res
  },
  time13TransferTime10(time) {
    return Math.round(time / 1000)
  },
  createRandomNumWidthScope(min, max) {
    return ~~(Math.random() * (max - min) + min)
  },
  objectIsEmpty(obj) {
    return Object.keys(obj).length > 0
  },
}
