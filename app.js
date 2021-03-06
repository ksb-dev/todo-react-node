const express = require('express')
const connectDB = require('./DB/connect')
const app = express()
require('dotenv').config()
const path = require('path')
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(cors())

// Middleware for serving static files
//app.use(express.static('./public'))

// Custom middleware for connecting database
const connect = require('./DB/connect')

// Authentication middleware
const authenticateUser = require('./middleware/authentication')

// Rotes
const tasks = require('./routes/tasksRoute')
const authRouter = require('./routes/auth')

// Error handler
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', authenticateUser, tasks)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
