module.exports = (ctx, info, isSuccess, dataset = {}) => {
  if (isSuccess) {
    ctx.status = 200
    return {
      msg: info,
      code: 200,
      data: dataset,
    }
  } else {
    ctx.status = 400
    return {
      msg: info,
      code: 400,
    }
  }
}
