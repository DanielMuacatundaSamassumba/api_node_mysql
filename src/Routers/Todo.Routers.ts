import Router from "express"
import TodoController from './../Controllers/TodoController'
import { todo } from "node:test"

const TodoRouters = Router()
const todocontroller = new TodoController()

TodoRouters.get("/todo/list", todocontroller.index)
TodoRouters.post("/todo/store", todocontroller.create)
TodoRouters.get("/todo/show/:id", todocontroller.show)
TodoRouters.delete("/todo/delete/:id", todocontroller.delete)
TodoRouters.put("/todo/update/:id", todocontroller.update)

 export default TodoRouters