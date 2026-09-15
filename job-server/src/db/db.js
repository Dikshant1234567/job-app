import pg from "pg"

const { Pool } = pg

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Dikshant@123",
    database: "job"
})

export default pool