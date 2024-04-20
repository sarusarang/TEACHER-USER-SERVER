// importing json-server package
const JSONserver = require('json-server')

// creating server using create() method from json server
const MPserver = JSONserver.create()

// generating path/route to server resources
const router = JSONserver.router('./db.json')

// initiating json-server middlewares
const middleware = JSONserver.defaults()

// creating PORT number for server
const port = 4000 | process.env.port


// implementing middleware to server
MPserver.use(middleware)


// implementing route to resource to server
MPserver.use(router)


// run command for server
MPserver.listen(port,()=>{
    console.log(`server is running at PORT:${port}`)
})