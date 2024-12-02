-- Active: 1728291744694@@127.0.0.1@3306@study_db
CREATE table TB_BOARD(
    board_no int PRIMARY key AUTO_INCREMENT,
    board_category VARCHAR(100) ,
    admin_no INT ,
    board_date DATETIME , 
    board_title TEXT , 
    board_detail longTEXT,
    board_status INT 
);


INSERT INTO `TB_BOARD` (board_category, admin_no, board_date, board_title, board_detail, board_status) VALUES
('FAQ', 1, '2020-09-03', '나의 주문 내역은 어디서 확인하나요?', '온라인으로 고객님의 주문 상태를 확인하실 수 있습니다. 또는 조 말론 런던 고객관리지원팀 (1644-3753) 로 전화 문의, consumercare-kr@jomalone.com. 으로 이메일 문의도 가능합니다. 문의 시 고객님의 주문 확인 번호를 함께 알려주세요.', 0 );

INSERT INTO `TB_BOARD` (board_category, admin_no, board_date, board_title, board_detail, board_status) VALUES
('FAQ', 1, '2020-09-03', '해외 주문도 가능한가요?', '조 말론 런던 온라인 부티크에서 주문하신 제품은 한국 내로만 배송이 가능하며, 해외 배송이 불가능합니다.', 0 );


CREATE table TB_REVIEW(
    review_no INT PRIMARY key AUTO_INCREMENT,
    customer_id INT ,
    product_id INT ,
    review_date DATETIME , 
    review_rate INT, 
    review_recommend VARCHAR(255), 
    review_nick TEXT,
    review_title TEXT , 
    review_detail longTEXT,
    review_advan longTEXT,
    review_disadvan longTEXT,
    review_region VARCHAR(255),
    review_age VARCHAR(255), 
    review_period TEXT, 
    review_scent VARCHAR(255), 
    review_time TEXT, 
    review_gift TEXT,
    review_upSystem VARCHAR(255), 
    review_upOri VARCHAR(255), 
    review_good INT, 
    review_bad INT, 
    review_status INT
);

CREATE table TB_PRODUCT(
    product_id INT PRIMARY key AUTO_INCREMENT,
    product_date DATETIME , 
    product_name TEXT , 
    product_price INT
);


SELECT `TB_REVIEW`.*, `TB_PRODUCT`.product_name from `TB_REVIEW`
left OUTER join `TB_PRODUCT` on `TB_REVIEW`.product_id = `TB_PRODUCT`.product_id;


SELECT `TB_REVIEW`.*, COALESCE(`TB_PRODUCT`.product_name, 'No Product') from `TB_REVIEW` left OUTER join `TB_PRODUCT` on `TB_REVIEW`.product_id = `TB_PRODUCT`.product_id

alter Table `TB_PRODUCT` MODIFY product_id int AUTO_INCREMENT PRIMARY KEY;



SELECT `TB_REVIEW`.*, COALESCE(TB_PRODUCT.product_name, 'No Product') AS product_name from `TB_REVIEW` left OUTER join `TB_PRODUCT` on `TB_REVIEW`.product_id = `TB_PRODUCT`.product_id WHERE review_no = 3