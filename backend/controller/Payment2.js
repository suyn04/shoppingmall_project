const express = require("express");
const router = express.Router();
const con = require("../db");


module.exports = () => {
    router.get('/:id', async (req,res)=>{
  
      console.log("payment2 view_prod 접근")
  
      try {
        const [ret] = await con.execute('select bs_id, bs_product_id, product_upSystem, product_name_kor, product_name_eng, product_volume, product_price from view_product_info_opt join basket on basket.bs_product_id = view_product_info_opt.product_opt_id where bs_email = ?', [req.params.id])
  
        res.json(ret)
      } catch(err){
        console.log('sql 실패 : ', err.message)
        res.status(500).send('db 오류')
      }
    })

    router.post('/join/:id', async (req,res)=>{
        console.log('결제 정보 추가')
    })
  
    return router;
  };