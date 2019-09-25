'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://49.234.62.214:7300/mock/5d89e15741e041168ac31ca5/v1"',
})
