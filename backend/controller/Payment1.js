const express = require("express");
const router = express.Router();
const con = require("../db");


module.exports = ()=>{
    router.get('/:id', async (req,res)=>{
        console.log("payment1 접근")

        try {
            const [ret] = await con.execute('select * from customers where email = ?', [req.params.id])
            res.json(ret[0])
        } catch(err){
            console.log('sql 실패 : ', err.message)
            res.status(500).send('db 오류')
        }
    })

    // // 수정
    // router.put('/modify',async (req,res)=>{
    //     console.log("payment1 modify 접근")
    //     // console.log(req.body)
    //     let data = [
    //         req.body.customer_name,
    //         req.body.zip,
    //         req.body.roadname_address,
    //         req.body.building_name,
    //         req.body.detail_address,
    //         req.body.contact_number,
    //         req.body.email
    //     ]
    //     console.log(data)

    //     try {
    //         const [ret] = await con.execute('update customers set customer_name=?, zip = ?, roadname_address=?, building_name=?, detail_address = ?, contact_number=? where email = ?', data)
    //         res.send('수정성공')
    //     } catch(err){
    //         console.log('sql 실패 : ', err.message)
    //         res.status(500).send('db 오류')
    //     }

    // })

    return router
}