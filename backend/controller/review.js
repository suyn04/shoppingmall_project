const express = require("express");
const router = express.Router();
const conn = require("../db");

module.exports = (upload) => {
    router.get("/productReview", async (req, res) => {
        const { product_id } = req.query; //prodcut_id를 쿼리 파라미터로 받기
        try {
            let query = `
                SELECT review_management.*, view_product_info_opt.*
                FROM review_management
                LEFT OUTER JOIN view_product_info_opt on review_management.product_id = view_product_info_opt.product_id
                WHERE review_management.product_id = ?
            `;
            const values = [];
            if (product_id) {
                values.push(product_id);
            }
            const [rows] = await conn.execute(query, values);
            console.log(rows);

            res.json(rows);
        } catch (err) {
            console.error("리뷰 목록 조회 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });
    router.get("/reviewWrite", async (req, res) => {
        const { product_opt_id } = req.query; //prodcut_id를 쿼리 파라미터로 받기
        try {
            let query = `
                SELECT *
                FROM view_product_info_opt
                WHERE product_opt_id = ?
            `;
            const values = [];
            if (product_opt_id) {
                values.push(product_opt_id);
            }
            const [rows] = await conn.execute(query, values);
            console.log('/reviewWrite/rows',rows[0]);

            res.json(rows[0]);
        } catch (err) {
            console.error("리뷰 목록 조회 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });

    // 리뷰 목록 가져오기
    router.get("/", async (req, res) => {
        // console.log('리뷰 목록 요청');
        try {
            const [rows] = await conn.execute(
                "SELECT * FROM review_management"
            );
            console.log("리뷰 목록:", rows); // 디버깅용 로그
            res.json(rows);
        } catch (err) {
            console.error("리뷰 목록 조회 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });

    // 특정 리뷰 상세 정보 가져오기
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        console.log(`리뷰 상세 요청 ID: ${id}`); // 요청 ID 확인
        try {
            const [rows] = await conn.execute(
                "SELECT * FROM review_management WHERE review_no = ?",
                [id]
            );
            if (rows.length > 0) {
                console.log("리뷰 데이터 : ", rows[0]);
                res.json(rows[0]); // 첫 번째 데이터 반환
            } else {
                res.status(404).json({
                    error: "해당 리뷰를 찾을 수 없습니다.",
                });
            }
        } catch (err) {
            console.error("리뷰 상세 조회 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });

    // 리뷰 저장하기
    router.post("/", async (req, res) => {
        const {
            product_opt_id = null,
            product_id =null,
            email = null,
            review_rate = null,
            review_recommend = null,
            review_nick = null,
            review_title = null,
            review_detail = null,
            review_region = null,
            review_scent = null,
            review_time = null,
            review_gift = null,
        } = req.body;

        console.log("받은 데이터:", req.body);

        try {
            const query = `
                INSERT INTO review_management (
                    product_opt_id,product_id, email, review_date, review_rate, review_recommend,
                    review_nick, review_title, review_detail, review_region, review_scent,
                    review_time, review_gift, review_status
                )
                VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [
                product_opt_id,
                product_id,
                email,
                new Date(), // 리뷰 작성 날짜
                review_rate,
                review_recommend,
                review_nick || "익명",
                review_title || "제목 없음",
                review_detail || "내용 없음",
                review_region || "지역 미지정",
                review_scent || "향 미지정",
                review_time,
                review_gift,
                1, // 기본 상태값
            ];

            console.log("삽입할 값:", values);
            await conn.execute(query, values);

            res.status(201).json({
                message: "리뷰가 성공적으로 저장되었습니다!",
            });
        } catch (err) {
            console.error("리뷰 저장 실패:", err.message);
            res.status(500).send("DB 삽입 실패");
        }
    });

    // 고객 정보 조회 라우트
    router.post("/areviewlist", async (req, res) => {
        const { email } = req.body; // 바디에서 이메일 가져와서
        const sessionToken = req.headers["authorization"]; // 세션 토큰 확인

        // 세션 토큰 검증
        if (!sessionToken || sessionToken !== "mockSessionToken") {
            // 세션토큰이 없거나 저장된 세션토큰과 일치 하지 않으면
            return res
                .status(401)
                .json({ error: "세션 토큰이 유효하지 않습니다." });
        }

        try {
            // 이메일로 customer DB 조회
            const [ret] = await db.query(
                `SELECT * FROM customers WHERE email = ?`,
                [email]
            );
            if (ret.length === 0) {
                // 조회된 결과가 없으면
                return res
                    .status(404)
                    .json({ error: "고객 정보를 찾을 수 없습니다." });
            }

            // 조회된 결과가 있다면
            res.json(ret[0]); // 첫 번째 결과 반환
        } catch (err) {
            console.error("DB 조회 실패:", err.message);
            res.status(500).send("서버 오류");
        }
    });

    return router;
};
