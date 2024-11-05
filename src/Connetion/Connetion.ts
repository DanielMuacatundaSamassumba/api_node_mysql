import mysql from "mysql2"
    const database = mysql.createConnection(
        {
            database: "Todo",
            password: "",
            user: "root",
            host: "localhost"

        }
    )
    database.connect()

export default database