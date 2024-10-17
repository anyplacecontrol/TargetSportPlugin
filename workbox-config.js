module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{html,js,css,png,jpg,jpeg,svg,gif,woff2}'],
  swDest: 'dist/service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  ignoreURLParametersMatching: [/./] // This will ignore all query parameters
}
