const GarbageController = require('../controller/garbage')
const KeywordsController = require('../controller/keywords')
const UserController = require('../controller/user')
const KeywordsNumController = require('../controller/keywords_num')

const router = require('koa-router')()

module.exports = (app) => {
  /* 用户模块 */
  router.post('/queryGarbage', async (ctx, next) => {
    ctx.body = await UserController.queryGarbage(ctx, next)
  })
  //用户登录
  router.post('/login', async (ctx, next) => {
    ctx.body=await UserController.login(ctx,next)
  })

  router.post('/garbage', async (ctx, next) => {
    ctx.body = await GarbageController.getGarbageList(ctx, next)
  })
  /* 关键字模块 */
  router.post('/keywords', async (ctx, next) => {
    ctx.body = await KeywordsController.getKeyWordsByUserId(ctx, next)
  })
  router.post('clearKeyWords', async (ctx, next) => {
    ctx.body = await KeywordsController.clearKeyWordsByUserId(ctx, next)
  })
  /* 关键字数量模块 */
  router.post('/hotKeywords', async (ctx, next) => {
    ctx.body = await KeywordsNumController.getHotKeywords(ctx, next)
  })
  app.use(router.routes()).use(router.allowedMethods())
}
