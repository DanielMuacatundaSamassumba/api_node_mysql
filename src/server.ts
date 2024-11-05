import express from "express"
import TodoRouters from './Routers/Todo.Routers'
const app = express()

app.use(express.json())
app.use(TodoRouters)
app.listen(3000, ()=>console.log("server is running on port number 3000"))

