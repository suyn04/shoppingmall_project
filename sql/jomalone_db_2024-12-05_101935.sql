/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.5.2-MariaDB, for osx10.19 (arm64)
--
-- Host: 127.0.0.1    Database: jomalone_db
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth` (
  `auth_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`auth_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`email`) REFERENCES `customers` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES
(2,'assa@naver.com','123123'),
(3,'juhye@gmail.com','123123');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;

--
-- Table structure for table `basket`
--

DROP TABLE IF EXISTS `basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `basket` (
  `bs_id` int(11) NOT NULL AUTO_INCREMENT,
  `bs_email` varchar(255) DEFAULT NULL,
  `bs_product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`bs_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basket`
--

/*!40000 ALTER TABLE `basket` DISABLE KEYS */;
INSERT INTO `basket` VALUES
(1,'nov004@naver.com',1),
(2,'nov004@naver.com',2),
(3,'dkssud@naver.com',3),
(4,'dkssud@naver.com',4),
(5,'dkssud@naver.com',1);
/*!40000 ALTER TABLE `basket` ENABLE KEYS */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `customer_id` varchar(20) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(15) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `required_agree` tinyint(1) NOT NULL,
  `optional_agree` tinyint(1) DEFAULT NULL,
  `customer_address` text DEFAULT NULL,
  `join_date` timestamp NULL DEFAULT current_timestamp(),
  `last_login_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) DEFAULT '정상',
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES
('AA2155675','류정윤','jeongyun@gmail.com','010-3333-1111','여자',NULL,1,0,NULL,'2021-12-02 08:32:11','2021-12-02 08:32:11','휴면'),
('AA2231252','박세라','endorphin91@naver.com','010-6610-3721','여자','1991-08-31',1,0,NULL,'2022-12-04 01:00:11','2022-12-04 01:00:11','휴면'),
('AA2460962','이아람','aram@gmail.com','010-2222-3333','여자',NULL,1,0,NULL,'2024-12-04 01:00:11','2024-12-04 01:00:11','휴면'),
('AA2463058','손주혜','juhye@gmail.com','010-6565-4343','',NULL,1,0,NULL,'2024-12-04 02:39:19','2024-12-04 02:39:19','정상'),
('AA2480651','정성윤','sungyoon@gmail.com','010-1111-2222','',NULL,1,0,NULL,'2024-12-03 05:20:31','2024-12-03 05:20:31','정상'),
('AA2485519','이규만','gyuman@naver.com','010-1234-1123','여자','2000-11-04',1,0,NULL,'2024-12-02 08:33:05','2024-12-02 08:33:05','정상'),
('AA2492815','한수연','sooyeon@naver.com','010-2222-3333','남자',NULL,1,0,NULL,'2024-12-04 01:04:27','2024-12-04 01:04:27','정상'),
('AA2495410','손재훈','assa@naver.com','010-1112-2223','',NULL,1,0,NULL,'2024-12-04 01:08:55','2024-12-04 01:08:55','정상');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

--
-- Table structure for table `deleted_customers`
--

DROP TABLE IF EXISTS `deleted_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deleted_customers` (
  `customer_id` varchar(20) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(15) NOT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `required_agree` tinyint(1) NOT NULL,
  `optional_agree` tinyint(1) DEFAULT NULL,
  `customer_address` text DEFAULT NULL,
  `join_date` timestamp NULL DEFAULT NULL,
  `deleted_date` timestamp NULL DEFAULT current_timestamp(),
  `reason` text DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deleted_customers`
--

/*!40000 ALTER TABLE `deleted_customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `deleted_customers` ENABLE KEYS */;

--
-- Table structure for table `one_to_one`
--

DROP TABLE IF EXISTS `one_to_one`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `one_to_one` (
  `post_no` int(11) NOT NULL AUTO_INCREMENT,
  `post_category` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `post_date` datetime NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_detail` longtext NOT NULL,
  `reply_detail` longtext DEFAULT NULL,
  `reply_date` datetime DEFAULT NULL,
  `reply_status` varchar(20) NOT NULL DEFAULT '대기',
  PRIMARY KEY (`post_no`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `one_to_one`
--

/*!40000 ALTER TABLE `one_to_one` DISABLE KEYS */;
INSERT INTO `one_to_one` VALUES
(8,'order',123,'2024-12-02 19:21:40','안녕못해','하세요우',NULL,'2024-12-02 22:23:00','대기'),
(9,'refund',123,'2024-12-02 19:38:05','안녕','하십니까',NULL,NULL,'대기'),
(10,'order',123,'2024-12-02 19:41:20','하이','만나서반갑',NULL,NULL,'대기'),
(11,'order',123,'2024-12-02 20:01:41','왜이러세요','제발 나좀 도와주러ㅏ',NULL,NULL,'대기'),
(12,'order',123,'2024-12-02 20:10:04','wpqkftkffuwnj','dksl 왜이래',NULL,NULL,'대기'),
(13,'product',123,'2024-12-02 20:22:16','안녕','하겠냐고!!!!',NULL,NULL,'대기'),
(14,'information',123,'2024-12-02 20:24:43','이아람','탈퇴시켜줘',NULL,NULL,'대기'),
(15,'refund',123,'2024-12-02 20:28:43','류정윤','환불하겠습니다',NULL,'2024-12-03 09:55:28','대기');
/*!40000 ALTER TABLE `one_to_one` ENABLE KEYS */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `pay_to` varchar(255) NOT NULL,
  `order_to` varchar(255) NOT NULL,
  `order_total` int(11) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES
(1,'2024-12-03','취소','카드','이아람',130000),
(2,'2024-12-02','주문완료','카드','삼아람',250000),
(3,'2024-12-01','배송중','페이코','류정윤',330000),
(4,'2024-11-24','배송완료','네이버페이','한수연',140000),
(5,'2024-10-28','배송준비중','카카오페이','박세라',90000);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

--
-- Table structure for table `orders_detail`
--

DROP TABLE IF EXISTS `orders_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_detail` (
  `order_id` int(11) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `order_cnt` varchar(255) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `order_tel` varchar(255) DEFAULT NULL,
  `order_addr` varchar(255) DEFAULT NULL,
  `order_msg` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_detail`
--

/*!40000 ALTER TABLE `orders_detail` DISABLE KEYS */;
INSERT INTO `orders_detail` VALUES
(1,'1','1',60000,'010-1111-2222','강서구','조심히와주세요'),
(2,'2','1',70000,'010-3333-2222','강동구','집앞에 놔주세요'),
(3,'1','4',60000,'010-6666-2223','강남구',NULL),
(4,'2','2',70000,'010-7777-5555','강북구','택배함에 넣어주세요'),
(5,'3','1',90000,'010-6666-4444','중구','조심히 다뤄주세요'),
(1,'2','1',70000,'010-1111-2222','강서구','조심히와주세요'),
(3,'3','1',90000,'010-6666-2223','강남구',NULL);
/*!40000 ALTER TABLE `orders_detail` ENABLE KEYS */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name_kor` varchar(255) DEFAULT NULL,
  `product_name_eng` varchar(255) DEFAULT NULL,
  `product_special` varchar(50) DEFAULT NULL,
  `product_category_id` int(11) DEFAULT NULL,
  `product_scent` varchar(50) DEFAULT NULL,
  `product_group_scent` varchar(50) DEFAULT NULL,
  `product_status` tinyint(1) DEFAULT NULL,
  `product_intro` text DEFAULT NULL,
  `product_ingredient` text DEFAULT NULL,
  `product_top` int(11) DEFAULT NULL,
  `product_heart` int(11) DEFAULT NULL,
  `product_base` int(11) DEFAULT NULL,
  `product_reg_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES
(1,'라임 바질 앤 만다린 코롱','Lime Basil & Mandarin Cologne','Best Seller',1,'citrus','라임 바질 앤 만다린',1,'조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Amyl Cinnamal, Geraniol, Citronellol, Benzyl Salicylate, Hexyl Cinnamal, Eugenol, Benzyl Benzoate <ILN49337>',1,2,3,'2024-12-02 00:00:00'),
(2,'그레이프프루트 코롱','Grapefruit Cologne','New',1,'citrus','그레이프프루트',1,'스페인 해안의 수많은 자몽 과수원. 자몽의 밝고 명랑한 느낌에 로즈마리, 페퍼민트, 피멘토의 톡 쏘는 향을 더했습니다. 산뜻한 느낌, 기분이 좋아지는 향수입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Geraniol, Citral, Eugenol, Alpha-Isomethyl Ionone, Coumarin, Amyl Cinnamal, Citronellol, Bht <ILN49332>',4,5,6,'2024-12-02 00:00:00');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `product_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_category_one` varchar(50) DEFAULT NULL,
  `product_category_two` varchar(50) DEFAULT NULL,
  `product_category_thr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`product_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES
(1,'cologne',NULL,NULL),
(2,'home-scents','candle',NULL),
(3,'home-scents','diffuser',NULL),
(4,'bath-body','bath-shower','body-hand-wash'),
(5,'bath-body','bath-shower','shower-gel-oil'),
(6,'bath-body','bath-shower','bath-oil'),
(7,'bath-body','body-care','body-cream'),
(8,'bath-body','body-care','body-hand-lotion'),
(9,'bath-body','body-care','hand-cream'),
(10,'bath-body','body-care','body-mist');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;

--
-- Table structure for table `product_note`
--

DROP TABLE IF EXISTS `product_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_note` (
  `product_note_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_note_name` varchar(50) DEFAULT NULL,
  `product_note_intro` text DEFAULT NULL,
  `product_note_upSystem` varchar(255) DEFAULT NULL,
  `product_note_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_note_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_note`
--

/*!40000 ALTER TABLE `product_note` DISABLE KEYS */;
INSERT INTO `product_note` VALUES
(1,'만다린','밝고 새콤한 만다린이 라임의 톡 쏘는 향과 블렌딩되어 탑노트에 명랑한 상쾌함을 더해주는 향','note_mandarin.jpg','note_mandarin.jpg'),
(2,'바질','바질 허브의 따스함에 후추향이 스치며 경쾌한 시트러스 노트에 예상치 못한 반전을 주는 향','note_basil.jpg','note_basil.jpg'),
(3,'앰버우드','앰버(amber, 호박) 향의 우디 노트로 프레그런스에 계속 파고들게 되는 따뜻함을 더해주는 향','note_amberwood.jpg','note_amberwood.jpg'),
(4,'그레이프프루트','반짝이는 청량감으로 향이 전개되며, 약간의 쌉싸름하면서도 활기 넘치는 느낌을 줍니다.','note_grapefruit.jpg','note_grapefruit.jpg'),
(5,'로즈마리','라벤더, 캄포, 민트의 상쾌함이 투명한 느낌의 아로마틱 향을 선사합니다.','note_rosemary.jpg','note_rosemary.jpg'),
(6,'모스','모스의 파릇함이 향의 베이스에 흙 내음 나는 우디한 따뜻함을 표현해 줍니다.','note_moss.jpg','note_moss.jpg'),
(7,'베르가못','베르가못이 얼 그레이 티에 생기를 더해주며, 시트러스의 신선함으로 향을 밝고 환하게 만들어 줍니다.','note_bergamot.jpg','note_bergamot.jpg'),
(8,'큐컴버','시원하고 신선하며 살짝 크런치한 노트는 상쾌한 즙을 가득 머금고 있습니다','note_cucumber.jpg','note_cucumber.jpg'),
(9,'비즈왁스','깊이 있고 풍부한 애니멀릭 액센트에 토바코의 터치가 가미되어 고급스러운 달콤함을 선사합니다.','note_beeswax.jpg','note_beeswax.jpg');
/*!40000 ALTER TABLE `product_note` ENABLE KEYS */;

--
-- Table structure for table `product_opt`
--

DROP TABLE IF EXISTS `product_opt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_opt` (
  `product_opt_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `product_price` int(11) DEFAULT NULL,
  `product_volume` varchar(50) DEFAULT NULL,
  `product_upSystem` varchar(255) DEFAULT NULL,
  `product_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_opt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_opt`
--

/*!40000 ALTER TABLE `product_opt` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_opt` ENABLE KEYS */;

--
-- Table structure for table `review_management`
--

DROP TABLE IF EXISTS `review_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_management` (
  `review_no` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `review_date` datetime NOT NULL,
  `review_rate` int(11) NOT NULL,
  `review_recommend` tinyint(1) NOT NULL,
  `review_nick` text NOT NULL,
  `review_title` varchar(255) NOT NULL,
  `review_detail` longtext NOT NULL,
  `review_region` varchar(255) DEFAULT NULL,
  `review_scent` varchar(255) DEFAULT NULL,
  `review_time` int(11) DEFAULT NULL,
  `review_gift` int(11) DEFAULT NULL,
  `review_good` int(11) DEFAULT NULL,
  `review_bad` int(11) DEFAULT NULL,
  `review_upload_file` varchar(255) DEFAULT NULL,
  `review_upload_origin` varchar(255) DEFAULT NULL,
  `review_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`review_no`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_management`
--

/*!40000 ALTER TABLE `review_management` DISABLE KEYS */;
INSERT INTO `review_management` VALUES
(1,2,1,'2024-11-19 12:09:20',1,1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),
(6,1,123,'2024-12-03 12:12:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(7,1,123,'2024-12-03 12:12:38',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(8,1,123,'2024-12-03 12:19:51',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(9,1,123,'2024-12-03 13:41:50',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(10,1,123,'2024-12-03 13:52:16',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(11,1,123,'2024-12-03 14:03:09',2,0,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `review_management` ENABLE KEYS */;

--
-- Table structure for table `review_reports`
--

DROP TABLE IF EXISTS `review_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_reports` (
  `report_no` int(11) NOT NULL,
  `review_no` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `report_date` datetime NOT NULL,
  `report_detail` longtext NOT NULL,
  `check_detail` text DEFAULT NULL,
  `check_datetime` datetime DEFAULT NULL,
  `check_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`report_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_reports`
--

/*!40000 ALTER TABLE `review_reports` DISABLE KEYS */;
INSERT INTO `review_reports` VALUES
(1,1,1,'2024-11-19 12:09:20','기분이 나빠졌어요',NULL,NULL,0);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;

--
-- Dumping routines for database 'jomalone_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-05 10:19:40
