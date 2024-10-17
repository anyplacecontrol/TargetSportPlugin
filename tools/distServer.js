// This file configures a web server for testing the production build
// on your local machine.

import express from 'express'
import path from 'path'
import {chalkProcessing} from './chalkConfig'
import opn from 'opn'

// eslint-disable-next-line no-console
console.log(chalkProcessing('Opening production build...'))

const app = express()
const PORT = 4000

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return
  }
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`)
  opn(`http://localhost:${PORT}`)
})
