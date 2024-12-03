const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = (upload) => {
    router.get("/", async (req, res) => {
        console.log(`/ 진입 확인`); //정상작동 확인

        try {
            const [ret] = await conn.execute("select * from view_product_info");
            res.json(ret);
        } catch (err) {
            console.error("sql 실패 : ", err.message);
            res.status(500).send("db 오류");
        }
    });
    router.get("/productList", async (req, res) => {
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

    return router;
};
