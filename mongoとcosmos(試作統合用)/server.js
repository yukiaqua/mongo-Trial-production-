import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3001
const dbUrl = 'mongodb://localhost/crud' // dbの名前をcrudに指定

mongoose.connect(dbUrl, dbErr => {
if (dbErr) throw new Error(dbErr)
else console.log('db connected')

// MongoDBに接続してからサーバーを立てるために
// app.listen()をmongoose.connect()の中に移動
app.listen(port, err => {
 if (err) throw new Error(err)
     else console.log(`listening on port ${port}`)
   })
 })