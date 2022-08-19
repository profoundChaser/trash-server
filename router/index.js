const router = require('koa-router')()

module.exports = (app) => {
    app.use(router.routes()).use(router.allowedMethods())
}