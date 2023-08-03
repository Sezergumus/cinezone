import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    // if request has cinema_id in it, return the hall with that cinema_id
    if (req.query.cinema_id) {
        const { rows } = await sql`SELECT * FROM hall WHERE cinema_id = ${req.query.cinema_id}`;
        return res.status(200).json(rows);
    } else if(req.query.hall_id) {
        const { rows } = await sql`SELECT * FROM hall WHERE id = ${req.query.hall_id}`;
        return res.status(200).json(rows[0]);
    } else {
        const { rows } = await sql`SELECT * FROM hall`;
        return res.status(200).json(rows);
    }
}