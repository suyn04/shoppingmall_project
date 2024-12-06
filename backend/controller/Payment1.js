const express = require("express");
const router = express.Router();
const con = require("../db");


module.exports = ()=>{
    router.get('/:id', async (req,res)=>{
        console.log("payment1 접근")

        try {
            const [ret] = await con.execute('select * from customers where email = ?', [req.params.id])
            res.json(ret)
        } catch(err){
            console.log('sql 실패 : ', err.message)
            res.status(500).send('db 오류')
        }
    })

    return router
}