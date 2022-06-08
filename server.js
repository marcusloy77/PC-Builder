// back-end web framework for building web apps in JS
const express = require('express')

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

//controllers
const pcController = require('./controllers/pc_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const specsController = require('./controllers/spec_controller')

// create app object
const app = express()
const port = process.env.PORT || 8080

// start the web server
app.listen(port, () => console.log(`listening on port ${port}`))

// the workflow of express: starts from receiving the user request and goes until we provide a response.
// Each step in the workfow is a middleware function that has access to the req, res, next

// --receive request (from browser)
//    |
//    V
// middleware function to log request info in the terminal
app.use(logger)
//    |
//    V
// middleware function for mini router for static files - this is our SPA (Single-Page Application)
app.use(express.static('client'))
//    |
//    V
// parse json body in a POST, PUT or DELETE request, and it assigns the data to req.body
app.use(express.json())
//    |
//    V
// enable sessions
app.use(sessions)
//    |
//    V
// middleware for controllers with routes
app.use('/api/pcs', pcController) 
app.use('/api/users', usersController) 
app.use('/api/sessions', sessionsController)
app.use('/api/specs', specsController)

// this is saying when someone accesses the / route, run the relevant Controller
//    |
//    V
// send response back to user