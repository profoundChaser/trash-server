const path = require('path')
const bodyParser = require('koa-body')
const staticFiles = require('koa-static')
const cors = require('koa2-cors')

module.exports = (app) => {
  app.use(
    staticFiles(path.resolve(__dirname, '../public'), {
      maxAge: 30 * 24 * 60 * 60 * 100,
    })
  )
  app.use(
    cors({
      credentials: true,
    })
  )
  app.use(
    bodyParser({
      multipart: true,
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
      },
    })
  )
}