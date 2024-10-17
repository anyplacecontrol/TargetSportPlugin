// This file configures the development web server
// which supports hot reloading and synchronized testing.

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../webpack.config.dev'
import opn from 'opn'

const bundler = webpack(config)

const server = new WebpackDevServer(bundler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  open: false // We will manually open the browser
})

server.listen(3002, 'localhost', (err) => {
  if (err) {
    /* eslint-disable-next-line no-console */
    console.log(err)
    return
  }
  /* eslint-disable-next-line no-console */
  console.log(`Starting server on http://localhost:3002`)
  opn(`http://localhost:3002`) // Open the browser manually
})
