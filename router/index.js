const router = require('koa-router')()

module.exports = (app) => {
    router.get('/',async (ctx,next)=>{
        ctx.body='欢迎'
    })
    app.use(router.routes()).use(router.allowedMethods())
}