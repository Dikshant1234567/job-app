import express from 'express'
import pool from "./db/db.js"

const MyServer = () => {
    const app = express()
    const PORT = 3500

    app.get("/" ,async (req, res)=>{
        try {
        const result = await pool.query("SELECT NOW()")

        res.json({
            message: "Server is running",
            databaseTime: result.rows[0]
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Database connection failed")
    }

    })

    app.listen(PORT, () => {
        console.log("App is running on " + PORT)
    })
}

export default MyServer