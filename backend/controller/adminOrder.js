const express = require("express");
const router = express.Router();
const con = require("../db");

module.exports = () => {
    router.get("/", async (req, res) => {
        console.log("order 진입"); //정상작동 확인
        try {
            const [ret] = await con.execute('select * from orders')
            // console.log(ret)
            res.json(ret)
        } catch(err){
            console.log('sql 실패 : ', err.message)
            res.status(500).send('db 오류')
        }
    })

    router.get('/detail/:id', async (req,res)=>{

        console.log("orders detail 접근")

        try {
            const [ret] = await con.execute('select * from orders where order_id = ?',
                    [req.params.id])
            res.json(ret[0])
        } catch(err){
            console.log('sql 실패 : ', err.message)
            res.status(500).send('db 오류')
        }
    })

    return router;
};
