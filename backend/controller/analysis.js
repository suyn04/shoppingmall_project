const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");
const path = require("path");

module.exports = () => {
    router.get("/", async (req, res) => {
        console.log(`/ 진입 확인`); //정상작동 확인

        try {
            const [ret] = await conn.execute(
                "SELECT * from orders WHERE order_status = '배송완료'"
            );
            res.json(ret);
        } catch (err) {
            console.error("sql 실패 : ", err.message);
            res.status(500).send("db 오류");
        }
    });

    return router;
};
