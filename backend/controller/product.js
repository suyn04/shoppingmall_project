const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = (upload) => {
    router.get("/", async (req, res) => {
        console.log("홈페이지 진입"); //정상작동 확인

        res.send("홈페이지 진입");
    });

    return router;
};
