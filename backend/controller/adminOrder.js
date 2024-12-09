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
            const [ret] = await con.execute('SELECT o.*, od.*, vpo.product_id, vpo.product_name_kor, vpo.product_name_eng, vpo.product_price AS unit_price, vpo.product_upSystem FROM orders o JOIN orders_detail od ON o.order_id = od.order_id JOIN  view_product_info_opt vpo ON od.product_id = vpo.product_opt_id WHERE o.order_id = ?', [req.params.id])

            // console.log(ret)

            // console.log('이메일: ',ret[0].email)

            const [cust] = await con.execute('SELECT * from customers WHERE email = ?', [ret[0].email])

            const responseData = {
                order: ret,
                customer: cust[0]
            }
            res.json(responseData)
        } catch(err){
            console.log('sql 실패 : ', err.message)
            res.status(500).send('db 오류')
        }

        
    })

    // 주문 상태 및 운송장 번호 업데이트
    router.post('/update', async (req, res) => {
        const orders = req.body;
        // console.log(orders)
    
        try {
        for (let order of orders) {
            await con.execute(
            `UPDATE orders SET order_status = ?, invoice = ? WHERE order_id = ?`,
            [order.status, order.invoice, order.order_id]
            );
        }
        res.json({ message: '수정이 완료되었습니다.' });
        } catch (err) {
        console.error('수정 실패:', err);
        res.status(500).send('DB 오류');
        }
    })

    return router;
};
