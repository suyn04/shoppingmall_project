const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = (upload) => {
    router.get("/", async (req, res) => {
        console.log(`/ 진입 확인`); //정상작동 확인

        try {
            const [ret] = await conn.execute("select * from product");
            res.json(ret);
        } catch (err) {
            console.error("sql 실패 : ", err.message);
            res.status(500).send("db 오류");
        }
    });
    router.get("/colognes", async (req, res) => {
        console.log("/colognes 진입 확인");
        try {
            const [ret] = await conn.execute(
                "select * from view_product_info where product_category_id = 1 and product_volume = '100ml'"
            );
            res.json(ret);
        } catch (err) {
            console.error("db 불러오기 실패 : ", err.message);
            res.status(500).send("db오류");
        }
    });
    router.get("/admin/detail/:product_id", async (req, res) => {
        console.log("/admin/detail 진입 확인");
        console.log(req.params.product_id);
        try {
            const [ret] = await conn.execute(
                "select * from product where product_id = ?",
                [req.params.product_id]
            );
            res.json(ret[0]);
        } catch (err) {
            console.error("db 불러오기 실패 : ", err.message);
            res.status(500).send("db오류");
        }
    });

    return router;
};
