const GarbageController = require('../controller/garbage')
const KeywordsController = require('../controller/keywords')
const UserController = require('../controller/user')

const router = require('koa-router')()

module.exports = (app) => {
  /* 用户模块 */
  router.get('/queryGarbage', async (ctx, next) => {
    ctx.body = await UserController.queryGarbage(ctx, next)
  })

  router.get('/garbage', async (ctx, next) => {
    ctx.body = await GarbageController.getGarbageList(ctx, next)
  })
  /* 关键字模块 */
  router.get('/keywords', async (ctx, next) => {
    ctx.body = await KeywordsController.getKeyWordsByUserId(ctx, next)
  })
  router.post('clearKeyWords', async (ctx, next) => {
    ctx.body = await KeywordsController.clearKeyWordsByUserId(ctx, next)
  })
  app.use(router.routes()).use(router.allowedMethods())
}
