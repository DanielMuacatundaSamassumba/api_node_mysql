import { Response, Request, query } from "express";
import database from "./../Connetion/Connetion"
export default class TodoController {

    index(req: Request, res: Response) {

        const query_todo_database = "SELECT * FROM tbl_todo"
        database.query(query_todo_database, (err: any, result: any) => {
            if (err) {
                console.error(err)
                return;
            }
            res.status(200).json({ massege: "dados recuperadados com sucesso!", data: result })
        })

    }

    show(req: Request, res: Response) {

        const query_todo_database = "SELECT * FROM tbl_todo WHERE ID = ?"
        const { id } = req.params
        if (id) {
            database.query(query_todo_database, [id], (err, result) => {
                if (err) {
                    console.error(err)
                    return;
                }
                res.status(200).json({ massege: "dados recuperadados com sucesso!", data: result })
            })
        } else {
            res.status(200).json({ massege: "id é necessário" })
        }
    }

    create(req: Request, res: Response) {

        const { description } = req.body
        const query_todo_database = "INSERT INTO tbl_todo(description) VALUES(?)"
        const data = [description]
        if (description) {
            database.query(query_todo_database, data, (err: any, result: any) => {
                if (err) {
                    console.error(err)
                    return
                }
                res.status(200).json({
                    massage: "item cadastrado com sucesso!",
                    data: { data: { description: description } }
                })
            })
        } else {
            res.status(400).json({ massage: "Preencha o compo descrição" })
        }


    }
    delete(req: Request, res: Response) {

        const { id } = req.params
        if (id) {
            const query_todo_database = "DELETE FROM tbl_todo WHERE ID = ?"
            database.query(query_todo_database, [id], (err, result) => {
                if (err) {
                    console.error(err)
                    return;
                }
                res.status(200).json({ massege: "dados apagados com sucesso!" })
            })
        } else {
            res.status(200).json({ massege: "id é necessário" })
        }
    }
    update(req: Request, res: Response) {
        const { id } = req.params;
        const { description } = req.body;

        if (id) {
            const query_todo_database = "UPDATE tbl_todo SET description = ? WHERE id = ?";
            database.query(query_todo_database, [description, id], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Erro ao atualizar a tarefa" });
                }
                res.status(200).json({ message: "Tarefa atualizada com sucesso!", data: result });
            });
        } else {
            res.status(400).json({ message: "O campo 'id' é necessário" });
        }
    }

}