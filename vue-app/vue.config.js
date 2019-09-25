const path = require('path')
// const webpack = require('webpack')
const axios = require('axios')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('base', resolve('src/base'))
  },
  baseUrl: '/',
  devServer: {
    before(app) {
      app.get('/api/getDiscList', function (req, res) {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

        axios.get(url, {
          headers: {
            referer: 'https://y.qq.com/portal/playlist.html',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then(response => {
          res.json(response.data)
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
}
// VUE_APP_BASE_API = '/getDiscList'