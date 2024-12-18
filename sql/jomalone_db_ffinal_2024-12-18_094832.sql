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
  `customer_id` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`auth_id`),
  UNIQUE KEY `email` (`email`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  CONSTRAINT `auth_ibfk_2` FOREIGN KEY (`email`) REFERENCES `customers` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES
(1,'24126192','jaehoon@gmail.com','123123'),
(2,'24144168','wooseok@gmail.com','123123'),
(3,'24150697','soohoon@gmail.com','123123'),
(4,'24161220','juhye@gmail.com','123123'),
(5,'24165558','sehoon@gmail.com','tpgns1212123!!'),
(6,'24167929','sooyeon@gmail.com','123123'),
(7,'24167985','gyuman@gmail.com','123123'),
(9,'24115002','eunwoo@gmail.com','123123'),
(10,'24142986','jungmin@gmail.com','123123'),
(11,'24100357','jehoon@gmail.com','123123'),
(12,'24153442','siwan@gmail.com','123123'),
(13,'24166865','chamchi@gmail.com','123123'),
(15,'24127432','hajoon@gmail.com','123123'),
(16,'24182702','jungyeon@gmail.com','123123'),
(17,'24166115','chimyeong@gmail.com','123123'),
(18,'24115347','seah@gmail.com','123123'),
(19,'24118486','yeseul@gmail.com','123123'),
(20,'24176691','admin@jomalone.kr','admin2024'),
(22,'24174206','9trade@gmail.com','123123'),
(23,'24121025','haein@gmail.com','123123'),
(25,'24108447','meddok@gmail.com','apEnrl123123!'),
(26,'24121067','hodong2@gmail.com','HODONG123123!');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basket`
--

/*!40000 ALTER TABLE `basket` DISABLE KEYS */;
INSERT INTO `basket` VALUES
(9,'sera@gmail.com',4),
(10,'sera@gmail.com',5),
(11,'sooyeon@gmail.com',2),
(12,'aram@gmail.com',4),
(13,'aram@gmail.com',1);
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
  `zip` int(11) DEFAULT NULL,
  `roadname_address` text DEFAULT NULL,
  `building_name` text DEFAULT NULL,
  `detail_address` text DEFAULT NULL,
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
('24100357','이제훈','jehoon@gmail.com','010-2222-2121','남자',NULL,1,0,12221,'서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','2023-12-11 05:23:41','2023-12-11 05:23:41','정상'),
('24108447','유재석','meddok@gmail.com','010-1212-4433','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 04:49:05','2024-12-16 04:49:05','정상'),
('24115002','차은우','eunwoo@gmail.com','010-8787-4678','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:17:20','2024-12-11 05:17:20','정상'),
('24115347','박세아','seah@gmail.com','010-7777-2222','여자','1993-03-03',1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:28:31','2024-12-11 05:28:31','정상'),
('24118486','한예슬','yeseul@gmail.com','010-3525-3252','',NULL,1,0,33323,'강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','2024-12-11 05:29:13','2024-12-11 05:29:13','정상'),
('24121025','정해인','haein@gmail.com','010-1231-2342','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 03:14:02','2024-12-16 03:14:02','정상'),
('24121067','강호동','hodong2@gmail.com','010-8282-9595','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 04:51:27','2024-12-16 04:51:27','정상'),
('24126192','손재훈','jaehoon@gmail.com','010-8888-7777','',NULL,0,0,22221,'경기도 안양시 만안구 안양천서로 249','(안양동, 안양역푸르지오더샵)','108호 902호','2024-12-10 08:51:23','2024-12-10 08:51:23','정상'),
('24127432','위하준','hajoon@gmail.com','010-5353-2525','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:25:33','2024-12-11 05:25:33','정상'),
('24142986','박정민','jungmin@gmail.com','010-5645-5689','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2022-12-11 05:07:32','2023-12-11 05:07:32','휴면'),
('24144168','변우석','wooseok@gmail.com','010-2345-3235','남자','1991-10-31',1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:07:32','2024-12-11 05:07:32','정상'),
('24150697','김수훈','soohoon@gmail.com','010-2342-3452','',NULL,0,0,NULL,NULL,NULL,NULL,'2024-12-10 08:57:44','2024-12-10 08:57:44','휴면'),
('24153442','임시완','siwan@gmail.com','010-8989-9797','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:24:12','2024-12-11 05:24:12','정상'),
('24161220','손주혜','juhye@gmail.com','010-3332-2234','여자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10 08:50:27','2024-12-10 08:50:27','휴면'),
('24165558','임세훈','sehoon@gmail.com','010-2345-6666','',NULL,0,0,15631,'인천시 연수구 송도국제대로 261','(송도동, 송도더샵센트럴시티)','1102동 404호','2024-12-10 08:56:35','2024-12-10 08:56:35','정상'),
('24166115','한치명','chimyeong@gmail.com','010-4343-7878','여자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:27:24','2024-12-11 05:27:24','정상'),
('24166865','강동원','chamchi@gmail.com','010-1010-2121','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:24:45','2024-12-11 05:24:45','정상'),
('24167929','한수연','sooyeon@gmail.com','010-2323-3434','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-05 08:08:37','2024-12-05 08:08:37','정상'),
('24167985','이규만','gyuman@gmail.com','010-5555-4444','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10 08:52:35','2024-12-10 08:52:35','정상'),
('24174206','구교환','9trade@gmail.com','010-1010-2020','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 03:09:34','2024-12-16 03:09:34','정상'),
('24176691','관리자','admin@jomalone.kr','02-123-4567','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:36:01','2024-12-11 05:36:01','정상'),
('24182702','한정연','jungyeon@gmail.com','010-7373-2323','여자','1997-07-05',1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:26:19','2024-12-11 05:26:19','정상');
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
  `zip` int(11) DEFAULT NULL,
  `roadname_address` text DEFAULT NULL,
  `building_name` text DEFAULT NULL,
  `detail_address` text DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `deleted_date` date DEFAULT NULL,
  `status` text DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deleted_customers`
--

/*!40000 ALTER TABLE `deleted_customers` DISABLE KEYS */;
INSERT INTO `deleted_customers` VALUES
('24109941','우수정','soojung@gmail.com','010-2323-1212','',NULL,0,0,NULL,NULL,NULL,NULL,'2024-12-10','2024-12-11','탈퇴'),
('24120633','이아람','aram@gmail.com','010-1111-2222','여자',NULL,1,1,2467,'서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','101동 303호','2024-12-06','2024-12-10','탈퇴'),
('24128106','이동근','donggeun@gmail.com','010-4646-3232','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11','2024-12-13','탈퇴'),
('24145384','류정윤','jeongyun@gmail.com','010-1122-3344','여자','1993-01-15',1,0,5502,'서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','2022-11-11','2024-12-10','탈퇴'),
('24153894','박세라','sera@gmail.com','010-3232-2323','여자','1991-08-31',1,1,NULL,NULL,NULL,NULL,'2024-12-05','2024-12-10','탈퇴'),
('24178933','김소희','sohee@gmail.com','010-9898-2235','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10','2024-12-12','탈퇴');
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
  `email` varchar(255) NOT NULL,
  `post_date` datetime NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_detail` longtext NOT NULL,
  `reply_detail` longtext DEFAULT NULL,
  `reply_date` datetime DEFAULT NULL,
  `reply_status` varchar(20) NOT NULL DEFAULT '대기',
  `one_upload_file` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`post_no`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `one_to_one`
--

/*!40000 ALTER TABLE `one_to_one` DISABLE KEYS */;
INSERT INTO `one_to_one` VALUES
(10,'order','123','2024-12-02 19:41:20','하이','만나서반갑',NULL,NULL,'대기',NULL),
(11,'order','123','2024-12-02 20:01:41','왜이러세요','제발 나좀 도와주러ㅏ',NULL,NULL,'대기',NULL),
(12,'order','123','2024-12-02 20:10:04','wpqkftkffuwnj','dksl 왜이래',NULL,NULL,'대기',NULL),
(13,'product','123','2024-12-02 20:22:16','안녕','하겠냐고!!!!',NULL,NULL,'대기',NULL),
(14,'information','123','2024-12-02 20:24:43','이아람','탈퇴시켜줘',NULL,NULL,'대기',NULL),
(15,'refund','123','2024-12-02 20:28:43','류정윤','환불하겠습니다',NULL,'2024-12-03 09:55:28','대기',NULL),
(17,'refund','aram@gmail.com','2024-12-09 10:45:24','저기요 ','화나게 하지마세요',NULL,NULL,'대기',NULL),
(18,'refund','aram@gmail.com','2024-12-09 10:49:20','월요병 퇴치해주세요','월요병 퇴치방법 좀 전수해주세요',NULL,NULL,'대기',NULL),
(19,'information','aram@gmail.com','2024-12-09 10:52:22','이름을 개명했습니다','이름을 개명해서 정보도 수정하고 싶습니다. ',NULL,NULL,'대기',NULL),
(20,'order','aram@gmail.com','2024-12-09 10:56:25','저는 정말 조말론을 사랑하는데','왜 도대체 제가 좋아하는 향수를 품절시키신거죠? ',NULL,NULL,'대기',NULL),
(21,'order','aram@gmail.com','2024-12-09 11:07:01','왜냐면','집에가고싶거든요',NULL,NULL,'대기',NULL),
(22,'refund','aram@gmail.com','2024-12-09 16:24:29','당신을 반품하고싶어요','당신을 반품하고싶으니 다시 가져가주세요',NULL,NULL,'대기',NULL),
(23,'etc','aram@gmail.com','2024-12-09 16:34:10','집에가고싶어요','집에 너무너무 가고싶어요\n',NULL,NULL,'대기',NULL),
(24,'product','sooyeon@gmail.com','2024-12-10 17:34:41','오케이 ','배송 기다리다 지쳤어요 땡벌',NULL,NULL,'대기',NULL),
(25,'information','aram@gmail.com','2024-12-11 10:56:09','제 정보를 누가 가져가셨죠','전 제 정보 제공에 동의한 적이 없습니다',NULL,NULL,'대기','rock1733882169629.jpeg'),
(26,'order','aram@gmail.com','2024-12-11 10:58:32','주문한지가 몇달인데 아직도...','도착을 안하는거죠 상품이.... ',NULL,NULL,'대기','capi1733882312138.jpeg'),
(27,'product','aram@gmail.com','2024-12-11 11:01:25','사랑해요','사랑해요',NULL,NULL,'대기','capi1733882485302.jpeg'),
(28,'etc','aram@gmail.com','2024-12-11 11:03:40','홍길동','고길동ㄴ은 없어요',NULL,NULL,'대기','1733882620400.jpeg'),
(29,'etc','undefined','2024-12-11 23:16:40','시러잉','조말론 너무 비싸서 시러잉~',NULL,NULL,'대기','1733926600135.jpeg'),
(30,'refund','admin@jomalone.kr','2024-12-11 23:18:14','세라님 ','관리자 페이지 환불해주세요',NULL,NULL,'대기','1733926694188.jpeg');
/*!40000 ALTER TABLE `one_to_one` ENABLE KEYS */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pay_to` varchar(255) NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `order_total` varchar(255) NOT NULL,
  `order_tel` varchar(255) NOT NULL,
  `order_zip` varchar(255) NOT NULL,
  `order_roadname` varchar(255) NOT NULL,
  `order_buildname` varchar(255) NOT NULL,
  `order_addredetail` varchar(255) NOT NULL,
  `order_msg` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) NOT NULL,
  `order_date` datetime NOT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  `status_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES
(1,'aram@gmail.com','kakao','이아람','617000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','잘 부탁드려요','반품완료','2024-12-06 12:00:00','','2024-12-10 14:30:59'),
(2,'jeongyun@gmail.com','card','삼아람','235000','010-2222-1121','5502','서울시 송송구 올림픽로 135','(잠실동, 잠실리센츠)','242동 212호',NULL,'반품접수','2023-11-11 00:12:00','','2024-12-10 14:30:59'),
(3,'sera@gmail.com','payco','박세라','220000','010-3232-2323','24672','서울시 송파구 올림픽로 135','(잠실잠실동, 잠실리센츠)','303동 453호','빠르게 부탁드려요','주문완료','2024-12-06 00:00:12','','2024-12-13 17:28:39'),
(4,'sooyeon@gmail.com','naver','한수연','434000','010-2323-3434','5502','서울시 동동문구 고산자로 534','(제기차기동, 제기한신아파트)','222동 1201호',NULL,'취소','2024-12-03 11:00:00','','2024-12-10 14:30:59'),
(5,'aram@gmail.com','naver','이아람','1100000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','안녕하이요','반품접수','2024-12-08 00:11:00','','2024-12-10 14:30:59'),
(6,'sooyeon@gmail.com','payco','한수연','1134000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','환불접수','2024-12-08 00:00:11','','2024-12-10 14:30:59'),
(7,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','반품접수','2024-12-08 04:00:00','','2024-12-10 14:30:59'),
(8,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08 00:04:00','','2024-12-13 17:28:39'),
(9,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','환불접수','2024-12-08 00:00:04','','2024-12-10 14:30:59'),
(10,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','반품접수','2024-12-08 03:00:00','','2024-12-10 14:30:59'),
(11,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','반품접수','2024-12-08 00:03:00','','2024-12-10 14:30:59'),
(12,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-08 00:00:03','','2024-12-13 17:28:39'),
(13,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','배송완료','2024-10-09 06:00:00','','2024-12-13 17:28:39'),
(14,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-11-09 00:06:00','','2024-12-13 17:28:39'),
(15,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-09 00:00:06','1111','2024-12-13 17:28:39'),
(16,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2023-11-08 13:00:00','1111','2024-12-13 17:28:39'),
(17,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2023-10-08 00:03:00','2222','2024-12-13 17:28:39'),
(18,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2023-09-08 00:00:03','3333','2024-12-13 17:28:39'),
(19,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','배송완료','2023-08-09 06:00:00','4444','2024-12-13 17:28:39'),
(20,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2023-07-09 00:06:00','5555','2024-12-13 17:28:39'),
(21,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2023-06-09 00:00:06','1111','2024-12-13 17:28:39'),
(22,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2022-11-08 13:00:00','1111','2024-12-13 17:28:39'),
(23,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2022-10-08 00:03:00','2222','2024-12-13 17:28:39'),
(24,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2022-09-08 00:00:03','3333','2024-12-13 17:28:39'),
(25,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','배송완료','2022-08-09 06:00:00','4444','2024-12-13 17:28:39'),
(26,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2022-07-09 00:06:00','5555','2024-12-13 17:28:39'),
(27,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2022-06-09 00:00:06','1111','2024-12-13 17:28:39'),
(28,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-11 00:06:00','5555','2024-12-13 17:28:39'),
(29,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-10 00:00:06','1111','2024-12-13 17:28:39'),
(30,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2024-12-09 13:00:00','1111','2024-12-13 17:28:39'),
(31,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','배송완료','2024-12-07 00:03:00','2222','2024-12-13 17:28:39'),
(32,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-11 00:00:03','3333','2024-12-13 17:28:39'),
(33,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','배송완료','2024-12-10 06:00:00','4444','2024-12-13 17:28:39'),
(34,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-09 00:06:00','5555','2024-12-13 17:28:39'),
(35,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'배송완료','2024-12-06 00:00:06','1111','2024-12-13 17:28:39'),
(36,'jehoon@gmail.com','kakao','이제훈','325000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-01-03 12:00:00','3456','2024-12-13 17:28:39'),
(37,'jehoon@gmail.com','card','이제훈','224000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-02-03 12:00:00','3456','2024-12-13 17:28:39'),
(38,'jehoon@gmail.com','card','이제훈','118200','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-03-03 12:00:00','3456','2024-12-13 17:28:39'),
(39,'jehoon@gmail.com','kakao','이제훈','888300','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-04-03 12:00:00','3456','2024-12-13 17:28:39'),
(40,'jehoon@gmail.com','card','이제훈','1503000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-05-03 12:00:00','3456','2024-12-13 17:28:39'),
(41,'jehoon@gmail.com','card','이제훈','450000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-06-03 12:00:00','3456','2024-12-13 17:28:39'),
(42,'jehoon@gmail.com','card','이제훈','275000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-07-03 12:00:00','3456','2024-12-13 17:28:39'),
(43,'jehoon@gmail.com','naver','이제훈','3240000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-08-03 12:00:00','3456','2024-12-13 17:28:39'),
(44,'jehoon@gmail.com','kakao','이제훈','115000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-09-03 12:00:00','3456','2024-12-13 17:28:39'),
(45,'jehoon@gmail.com','naver','이제훈','553000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-10-03 12:00:00','3456','2024-12-13 17:28:39'),
(46,'jehoon@gmail.com','card','이제훈','88000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-11-03 12:00:00','3456','2024-12-13 17:28:39'),
(47,'jehoon@gmail.com','kakao','이제훈','722000','010-2222-2121','12221','서울시 서대문구 수색로 100','(북가좌동, DMC래미안e편한세상)','303동 1203호','문 앞에 놔주세요','배송완료','2024-12-03 12:00:00','3456','2024-12-13 17:28:39'),
(48,'yeseul@gmail.com','kakao','한예슬','325000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-01-03 12:00:00','3456','2024-12-13 17:28:39'),
(49,'yeseul@gmail.com','card','한예슬','3125000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-02-03 12:00:00','3456','2024-12-13 17:28:39'),
(50,'yeseul@gmail.com','card','한예슬','428000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-03-03 12:00:00','3456','2024-12-13 17:28:39'),
(51,'yeseul@gmail.com','kakao','한예슬','117800','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-04-03 12:00:00','3456','2024-12-13 17:28:39'),
(52,'yeseul@gmail.com','card','한예슬','624000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-05-03 12:00:00','3456','2024-12-13 17:28:39'),
(53,'yeseul@gmail.com','card','한예슬','94400','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-06-03 12:00:00','3456','2024-12-13 17:28:39'),
(54,'yeseul@gmail.com','kakao','한예슬','148500','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-07-03 12:00:00','3456','2024-12-13 17:28:39'),
(55,'yeseul@gmail.com','card','한예슬','4958000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-08-03 12:00:00','3456','2024-12-13 17:28:39'),
(56,'yeseul@gmail.com','card','한예슬','420000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-09-03 12:00:00','3456','2024-12-13 17:28:39'),
(57,'yeseul@gmail.com','kakao','한예슬','727000','010-3525-3252','33323','강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','배송 전 연락주세요','배송완료','2024-10-03 12:00:00','3456','2024-12-13 17:28:39');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

--
-- Table structure for table `orders_detail`
--

DROP TABLE IF EXISTS `orders_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_detail` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `order_cnt` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_detail`
--

/*!40000 ALTER TABLE `orders_detail` DISABLE KEYS */;
INSERT INTO `orders_detail` VALUES
(1,1,'1',2,220000),
(2,1,'2',1,162000),
(3,1,'3',1,235000),
(4,2,'3',1,235000),
(5,3,'1',2,220000),
(6,4,'2',2,324000),
(7,4,'1',1,110000),
(8,5,'4',8,880000),
(9,5,'1',2,220000),
(10,6,'2',7,1134000),
(11,7,'2',4,648000),
(12,8,'2',4,648000),
(13,9,'2',1,162000),
(14,10,'2',1,162000),
(15,11,'2',1,162000),
(16,12,'3',1,235000),
(17,13,'3',1,235000),
(18,14,'3',1,235000),
(21,15,'3',2,470000),
(22,16,'1',2,220000),
(23,16,'2',1,162000),
(24,17,'3',1,235000),
(25,18,'4',3,324000),
(26,19,'1',2,220000),
(27,20,'2',2,162000),
(28,21,'3',1,235000),
(29,22,'4',1,324000),
(30,23,'1',2,220000),
(31,24,'2',3,162000),
(32,25,'3',1,235000),
(33,26,'4',2,324000),
(34,27,'1',3,220000),
(35,28,'2',1,162000),
(36,29,'3',1,235000),
(37,30,'4',2,324000),
(38,31,'1',1,220000),
(39,32,'2',3,162000),
(40,33,'3',2,235000),
(41,34,'4',1,324000),
(42,35,'1',2,220000),
(43,36,'2',1,162000),
(44,37,'3',1,235000),
(45,38,'4',3,324000),
(46,39,'1',2,220000),
(47,40,'2',2,162000),
(48,41,'3',1,235000),
(49,42,'4',1,324000),
(50,43,'1',3,220000),
(51,44,'2',1,162000),
(52,45,'3',2,235000),
(53,46,'4',1,324000),
(54,47,'1',2,220000),
(55,48,'2',3,162000),
(56,49,'3',1,235000),
(57,50,'4',2,324000),
(58,51,'1',1,220000),
(59,52,'2',2,162000),
(60,53,'3',1,235000),
(61,54,'4',3,324000),
(62,55,'1',2,220000),
(63,56,'2',1,162000),
(64,57,'3',1,235000);
/*!40000 ALTER TABLE `orders_detail` ENABLE KEYS */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name_kor` varchar(255) NOT NULL,
  `product_name_eng` varchar(255) NOT NULL,
  `product_special` varchar(50) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL,
  `product_scent` varchar(50) NOT NULL,
  `product_group_scent` varchar(50) DEFAULT NULL,
  `product_status` tinyint(1) NOT NULL,
  `product_intro` text NOT NULL,
  `product_ingredient` text NOT NULL,
  `product_top` int(11) DEFAULT NULL,
  `product_heart` int(11) DEFAULT NULL,
  `product_base` int(11) DEFAULT NULL,
  `product_reg_date` datetime NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES
(1,'라임 바질 앤 만다린 코롱','Lime Basil & Mandarin Cologne','Best Seller',1,'citrus','라임 바질 앤 만다린',1,'조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Amyl Cinnamal, Geraniol, Citronellol, Benzyl Salicylate, Hexyl Cinnamal, Eugenol, Benzyl Benzoate <ILN49337>',1,2,3,'2024-12-02 00:00:00'),
(2,'그레이프프루트 코롱','Grapefruit Cologne','New',1,'citrus','그레이프프루트',1,'스페인 해안의 수많은 자몽 과수원. 자몽의 밝고 명랑한 느낌에 로즈마리, 페퍼민트, 피멘토의 톡 쏘는 향을 더했습니다. 산뜻한 느낌, 기분이 좋아지는 향수입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Geraniol, Citral, Eugenol, Alpha-Isomethyl Ionone, Coumarin, Amyl Cinnamal, Citronellol, Bht <ILN49332>',4,5,6,'2024-12-02 00:00:00'),
(3,'얼 그레이 앤 큐컴버 코롱','Earl Grey & Cucumber Cologne','',1,'citrus',NULL,1,'영국의 전통인 애프터눈 티. 얼 그레이 티에 프루티 아로마 향을 더욱 강조해주는 베르가못과 시원한 오이의 향을 더했습니다. 비즈왁스와 바닐라의 베이스가 달콤함을 가져다 줍니다.','변성알코올, 정제수, 향료, 리날룰, 리모넨, 이소유제놀, 제라니올, 시트랄 [ILN36747]',7,8,9,'2024-12-04 11:11:37'),
(4,'잉글리쉬 페어 앤 프리지아 코롱','English Pear & Freesia Cologne',NULL,1,'fruity',NULL,1,'가을의 정수. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더했습니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Farnesol, Limonene, Geraniol, Linalool, Hexyl Cinnamal, Citronellol, Citral, Bht, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate <ILN98998>',10,11,12,'2024-12-04 12:06:59'),
(5,'와일드 블루벨 코롱','Wild Bluebell Cologne',NULL,1,'light-floral',NULL,1,'숲 속 깊은 곳에서 빛나고 있는 사파이어. 이슬 맺힌 블루벨의 은은하고 달콤한 향에 릴리와 들장미 향의 조화가 최면을 걸 듯 마음을 사로잡습니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',13,14,15,'2024-12-04 13:31:40'),
(6,'허니서클 앤 다바나 코롱','Honeysuckle & Davana Cologne',NULL,1,'floral',NULL,1,'영국 전원 지대에 물결치듯이 피어 오르는 야생 허니서클은 휘감듯이 피어 오르며 어둠이 깔리면 더욱 매력적으로 빛납니다. 과일 향의 반전을 지닌 다바나의 아로마 향, 여기에 로즈 향이 가미되어 더욱 신선해 집니다. 모스는 향에 우디함을 더해 줍니다. 햇살을 담아 따뜻해진 향. 선명하고 화사한 행복감을 표현하는 향입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015]',16,17,6,'2024-12-04 13:45:06'),
(7,'포머그래니트 누와 코롱','Pomegranate Noir Cologne',NULL,1,'woody',NULL,1,'대담한 레드 드레스의 관능미. 석류, 라즈베리, 자두를 섞은 짙은 다홍색 주스에 핑크 페퍼를 넣고 카사블랑카 백합과 숲의 향기를 더했습니다. 어둡고 불가사의한 느낌의 향수입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',18,19,20,'2024-12-04 13:52:02'),
(17,'우드 세이지 앤 씨 솔트 코롱','Wood Sage & Sea Salt Cologne',NULL,1,'woody',NULL,1,'바람부는 해안을 따라 걸으며 일상을 벗어나보세요. 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기. 험준한 절벽에서 느껴지는 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러져 자유롭고 활기찬 에너지와 즐거움이 가득합니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',21,22,23,'2024-12-04 15:55:39'),
(21,'바질 앤 네롤리 홈 캔들','Basil & Neroli Home Candle',NULL,2,'citrus',NULL,1,'런던의 모습을 그대로 담은 장난스럽고도 사랑스러운 향. 플로럴 향이 풍부한 네롤리에 바질의 기분 좋은 향이 더해져 즐거운 모험이 가득한 영국만의 독특한 향을 냅니다. 기분을 고조시키거나 긴장을 풀기 위해, 또는 단순히 고급스러운 느낌을 더하고 싶을 때 사용해 보세요. 캔들이 타면서 퍼지는 향이 즉각적으로 방 안을 가득 메워 매력적인 분위기를 연출해 줍니다. 홈 캔들은 45시간동안 지속되며 실버 덮개와 함께 판매됩니다. 캔들 용량은 200g입니다.','화장품 아님 / 파라핀, 향초 / 자가검사번호 F-A09B-T025002-A150',NULL,NULL,NULL,'2024-12-06 13:36:04'),
(22,'라임 바질 앤 만다린 디퓨저','Lime Basil & Mandarin Diffuser','',3,'citrus',NULL,1,'조 말론 런던의 모던한 클래식 제품으로 공간을 채워보세요. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요','에톡시디글라이콜,향료(리모넨 등) 자가검사번호: FB20-12-2207 ',0,0,0,'2024-12-06 13:47:35'),
(23,'그레이프프루트 바디 앤 핸드 워시','Grapefruit Body & Hand Wash',NULL,4,'citrus',NULL,1,'기분 좋은 그레이프프루트 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 깨끗하게 만들어 줍니다. 기분 좋은 시트러스 향을 피부에 은은하게 남겨보세요.','ngredients: Water\\Aqua\\Eau, Sodium Laureth Sulfate, Lauramidopropyl Betaine, Peg-7 Glyceryl Cocoate, Fragrance (Parfum), Glycerin, Sucrose, Limnanthes Alba (Meadowfoam) Seed Oil, Caffeine, Ethylhexylglycerin, Caprylyl Glycol, Peg-6 Caprylic/Capric Glycerides, Sodium Chloride, Peg-120 Methyl Glucose Dioleate, Polysorbate 20, Peg-150 Pentaerythrityl Tetrastearate, Pentylene Glycol, Hexylene Glycol, Polyquaternium-7, Magnesium Nitrate, Citric Acid, Geraniol, Limonene, Linalool, Citral, Eugenol, Bht, Sodium Benzoate, Methylchloroisothiazolinone, Methylisothiazolinone, Phenoxyethanol <ILN49499>',NULL,NULL,NULL,'2024-12-06 14:57:02'),
(24,'라임 바질 앤 만다린 바디 크림','Lime Basil & Mandarin Body Creme',NULL,7,'citrus',NULL,1,'풍부한 영양을 선사하는 라임 바질 앤 만다린 바디 크림으로 당신의 데일리 루틴을 완성해보세요. 코코아 버터와 스위트 아몬드 오일이 함유되어 부드러운 질감의 포뮬러가 피부에 촉촉한 보습 효과를 선사합니다. 매력적이면서도 풍미 넘치는 향을 피부에 은은하게 남겨보세요.','Ingredients: Water\\Aqua\\Eau, Glycerin, Cetearyl Alcohol, Simmondsia Chinensis (Jojoba) Seed Oil, Glyceryl Stearate, Stearic Acid, Fragrance (Parfum), Triethanolamine, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Theobroma Cacao (Cocoa) Seed Butter, Bisabolol, Caffeine, Dimethicone, Isopropyl Palmitate, Aloe Barbadensis Leaf Juice, Glyceryl Laurate, Cocamidopropyl Pg-Dimonium Chloride Phosphate, Caprylyl Glycol, Hexylene Glycol, Geraniol, Amyl Cinnamal, Benzyl Salicylate, Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Disodium Edta, Phenoxyethanol <ILN49220>',NULL,NULL,NULL,'2024-12-06 15:38:42'),
(26,'잉글리쉬 페어 앤 프리지아 센티드 캔들','English Pear & Freesia Scented Candle',NULL,2,'fruity',NULL,1,'갓 익은 배를 빚어낸 금색 햇빛이 가득한 과수원의 느낌을 공간에 채워보세요. 갓 익은 배의 관능적인 산뜻함을 우아한 화이트 프리지아가 감싸줍니다. 영국 교외에서 정교하게 만들어 시그니처 디자인 글라스에 담아 완성합니다.','화장품 아님 / 파라핀, 향료 / 자가검사번호 : F-A09B-T025002-A150',NULL,NULL,NULL,'2024-12-11 11:54:18'),
(27,'와일드 블루벨 센티드 캔들','Wild Bluebell Scented Candle',NULL,2,'light-floral',NULL,1,'그늘진 한적한 숲 속에서 살며시 피어난 사파이어처럼 푸르게 빛나는 꽃으로 공간을 채워보세요. 영국 교외에서 정교하게 만들어 시그니처 디자인 글라스에 담아 완성합니다.','화장품 아님 / 파라핀, 향료 자가검사번호 : F-A09B-T00250002-A151A ',NULL,NULL,NULL,'2024-12-11 12:04:34'),
(29,'피오니 앤 블러쉬 스웨이드 코롱','Peony & Blush Suede Cologne','Best Seller',1,'floral',NULL,1,'꽃의 귀족, 작약의 화려함을 담은 향. 화려하게 핀 작약에 더해진 붉은 사과의 향기로운 과즙과 순수한 자스민, 장미 그리고 카네이션, 블러쉬 스웨이드의 부드러운 관능미가 여운을 남깁니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015]',24,25,26,'2024-12-17 11:40:22'),
(30,'히노키 앤 시더우드 코롱 인텐스','Hinoki & Cedarwood Cologne Intense',NULL,1,'woody',NULL,1,'삼림욕을 하다 마주친 땅 속 깊이 자리 잡은 오래된 편백나무.깔끔한 느낌의 아로마 노트와 강렬한 우디 노트가 어우러지며 우아한 시더우드(삼나무)와 히노키(편백나무)의 강렬함으로 이어집니다. 매우 신선하고 특별한 향입니다.','변성알코올,향료,정제수,에칠헥실메톡시신나메이트,부틸메톡시디벤조일메탄,에칠헥실살리실레이트,쿠마린,리날룰,신남알,리모넨,유제놀,펜타에리스리틸테트라-다이-T-부틸하이드록시하이드로신나메이트 [ILN52653]',27,28,29,'2024-12-17 11:48:51');
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
  `product_note_name` varchar(50) NOT NULL,
  `product_note_intro` text NOT NULL,
  `product_note_upSystem` varchar(255) DEFAULT NULL,
  `product_note_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_note_id`),
  UNIQUE KEY `product_note_name` (`product_note_name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(9,'비즈왁스','깊이 있고 풍부한 애니멀릭 액센트에 토바코의 터치가 가미되어 고급스러운 달콤함을 선사합니다.','note_beeswax.jpg','note_beeswax.jpg'),
(10,'킹 윌리엄 페어','잘 영글은 신선한 배의 과즙에서 느껴지는 풍부하고 부드러운 과일향을 담았습니다.','note_kingwilliampear.jpg','note_kingwilliampear.jpg'),
(11,'프리지아','전형적인 브리티시 스타일. 새하얀 프리지아에서 느껴지는 섬세하고도 독특한 향이 미들 노트를 가득 채워줍니다.','note_freesia.jpg','note_freesia.jpg'),
(12,'파출리','감각적이면서도 깊고 우디한 노트로 잔향을 오래 지속시켜 줍니다.','note_patchouli.jpg','note_patchouli.jpg'),
(13,'블루벨','야생화의 향기에 산뜻한 그리너리의 향과 스파이시한 정향 싹의 발사믹한 달큰함, 그리고 스치듯 은은한 이슬의 투명한 향.','note_bluebell.jpg','note_bluebell.jpg'),
(14,'감','우윳빛 복숭아 노트에 깨끗하고 크리미한 향','note_persimmon.jpg','note_persimmon.jpg'),
(15,'화이트 머스크','파우더리하고 깨끗한 향이 부드러움을 더해 잔향의 지속력을 높여주는 향','note_whitehmusk.jpg','note_whitehmusk.jpg'),
(16,'다바나','감초 향을 가미한 푸른 식물 다바나가 향에 생동감을 선사하며 약간의 과일 노트를 더해줍니다.','note_davana.jpg','note_davana.jpg'),
(17,'잉글리쉬 허니서클','반짝이는 플로랄 향을 지닌 허니서클은 하트 노트를 꿀 향으로 물들여 풍부한 느낌을 선사합니다.','note_honeysuckle.jpg','note_honeysuckle.jpg'),
(18,'포머그래니트','과즙이 많은 붉은 과일의 조합으로 은은한 석류 향이 탑 노트에 감미롭고 상쾌한 느낌을 전해줍니다.','note_pomegranate.jpg','note_pomegranate.jpg'),
(19,'카사블랑카 백합','조화로운 플로랄 블렌드가 카사블랑카 백합의 강렬하고 스파이시한 느낌을 연상시킵니다','note_casablancalily.jpg','note_casablancalily.jpg'),
(20,'과이액목','매혹적이고 스모키한 나무 향이 스며들어 관능적인 분위기를 자아냅니다','note_ambrette.jpg','note_guaiacwood.jpg'),
(21,'암브레트 시드','정교한 아우라로 탑 노트를 감싸는 질감의 특징입니다.','note_ambrette.jpg','note_ambrette.jpg'),
(22,'씨 솔트','씨 솔트의 바삭바삭함이 질감과 산뜻함을 선사합니다.','note_seasalt.jpg','note_seasalt.jpg'),
(23,'세이지','흙 내음과 아로마틱함이 담긴 우디함이 베이스에 자연스러운 깊이를 줍니다.','note_sage.jpg','note_sage.jpg'),
(24,'빨간 사과','입 안 가득 침이 고이게 하는 신선한 사과 향을 그대로 담아내어 프레그런스의 탑노트를 순수하면서 프루티한 반전으로 열어주는 향','note_redapple.jpg','note_redapple.jpg'),
(25,'피오니','강렬한 플로랄 향에 섬세한 장미와 꿀향, 그리고 스치는 그리너리의 신선함. 프레그런스를 갓 피어나는 작약의 풍부함으로 채워주는 향','note_peony.jpg','note_peony.jpg'),
(26,'스웨이드','유연한 질감의 노트가 작약의 풍부한 꽃향을 받쳐주면서 매혹적이며 감각적인 느낌을 더해주는 향','note_suede.jpg','note_suede.jpg'),
(27,'아로마 클린 어코드','매우 신선한 노트가 처음 느껴보는 아로마틱한 변화를 더해줍니다.',NULL,NULL),
(28,'히노키(편백나무)','희귀하고 귀한 우드가 아로마틱한 향과 강렬한 우디 향을 선사합니다.',NULL,NULL),
(29,'시더우드 (삼나무)','드라이한 우디 향이 베이스에 카리스마 있는 강렬함을 부여합니다.',NULL,NULL);
/*!40000 ALTER TABLE `product_note` ENABLE KEYS */;

--
-- Table structure for table `product_opt`
--

DROP TABLE IF EXISTS `product_opt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_opt` (
  `product_opt_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_volume` varchar(50) NOT NULL,
  `product_upSystem` varchar(255) NOT NULL,
  `product_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_opt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_opt`
--

/*!40000 ALTER TABLE `product_opt` DISABLE KEYS */;
INSERT INTO `product_opt` VALUES
(1,1,110000,'30ml','mandarine_cologne_30ml.jpg','mandarine_cologne_30ml.jpg'),
(2,1,162000,'50ml','mandarine_cologne_50ml.jpg','mandarine_cologne_50ml.jpg'),
(3,1,235000,'100ml','mandarine_cologne_100ml.jpg','mandarine_cologne_100ml.jpg'),
(4,2,110000,'30ml','grapefruit_cologne_30ml.jpg','grapefruit_cologne_100ml.jpg'),
(5,2,235000,'100ml','grapefruit_cologne_100ml.jpg','Earl_cologne_100ml.jpg'),
(6,3,235000,'100ml','earl_cologne_100ml.jpg','earl_cologne_100ml.jpg'),
(11,17,235000,'100ml','woodsage_100ml1733387729353.jpg','woodsage_100ml.jpg'),
(14,21,112000,'200g','basilneroli_candle_200g1733459988486.jpg','basilneroli_candle_200g.jpg'),
(15,22,151000,'165ml','limebasil_diffusser_165ml1733460597286.jpg','limebasil_diffusser_165ml.jpg'),
(16,23,78000,'250ml','grapefurith_body_hand_wash_250ml1733464694758.jpg','grapefurith_body_hand_wash_250ml.jpg'),
(17,24,45000,'50ml','limebasil_bodycream_50ml_jpg1733467186735.avif','limebasil_bodycream_50ml_jpg.avif'),
(18,24,142000,'175ml','limebasil_bodycream_175ml1733467244539.jpg','limebasil_bodycream_175ml.jpg'),
(19,26,55000,'65g','englishpear_candle_65g1733885743103.jpg','englishpear_candle_65g.jpg'),
(20,26,313000,'600g','englishpear_candle_600g1733885796243.jpg','englishpear_candle_600g.jpg'),
(21,26,784000,'2.1kg','englishpear_candle_2.1kg1733886014452.jpg','englishpear_candle_2.1kg.jpg'),
(22,27,55000,'65g','wildbluebell_candle_65g1733886343305.jpg','wildbluebell_candle_65g.jpg'),
(23,27,112000,'200g','wildbluebell_candle_200g1733886359576.jpg','wildbluebell_candle_200g.jpg'),
(29,5,110000,'30ml','wildblue_cologne_30ml1734325647920.jpg','wildblue_cologne_30ml.jpg'),
(30,5,162000,'50ml','wildblue_cologne_50ml1734325666384.jpg','wildblue_cologne_50ml.jpg'),
(31,5,235000,'100ml','wildblue_cologne_100ml1734325867516.jpg','wildblue_cologne_100ml.jpg'),
(34,7,235000,'100ml','pomegranate_cologne_100ml1734326545279.jpg','pomegranate_cologne_100ml.jpg'),
(35,7,110000,'30ml','pomegranate_cologne_30ml1734326581167.jpg','pomegranate_cologne_30ml.jpg'),
(36,6,110000,'30ml','honeysuckle_cologne_30ml1734326915203.jpg','honeysuckle_cologne_30ml.jpg'),
(37,6,235000,'100ml','honeysuckle_cologne_100ml1734326953205.jpg','honeysuckle_cologne_100ml.jpg'),
(38,4,235000,'100ml','englishpear_cologne_100ml1734327083503.jpg','englishpear_cologne_100ml.jpg'),
(39,4,162000,'50ml','englishpear_cologne_50ml1734327131126.jpg','englishpear_cologne_50ml.jpg'),
(40,4,110000,'30ml','englishpear_cologne_30ml1734327155248.jpg','englishpear_cologne_30ml.jpg'),
(41,29,110000,'30ml','peony_cologne_30ml1734403316641.jpg','peony_cologne_30ml.jpg'),
(42,29,162000,'50ml','peony_cologne_50ml1734403332331.jpg','peony_cologne_50ml.jpg'),
(43,29,235000,'100ml','peony_cologne_100ml1734403345667.jpg','peony_cologne_100ml.jpg'),
(44,30,218000,'50ml','hinoki_cologne_50ml1734403797317.avif','hinoki_cologne_50ml.avif'),
(45,30,317000,'100ml','hinoki_cologne_100ml1734403811191.jpg','hinoki_cologne_100ml.jpg');
/*!40000 ALTER TABLE `product_opt` ENABLE KEYS */;

--
-- Table structure for table `review_management`
--

DROP TABLE IF EXISTS `review_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_management` (
  `review_no` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `review_date` datetime NOT NULL,
  `review_rate` int(11) NOT NULL,
  `review_recommend` tinyint(1) NOT NULL,
  `review_nick` text NOT NULL,
  `review_title` varchar(255) NOT NULL,
  `review_detail` longtext NOT NULL,
  `review_region` varchar(255) DEFAULT NULL,
  `review_scent` varchar(255) DEFAULT NULL,
  `review_time` varchar(255) DEFAULT NULL,
  `review_gift` varchar(255) DEFAULT NULL,
  `review_good` int(11) DEFAULT NULL,
  `review_bad` int(11) DEFAULT NULL,
  `review_upload_file` varchar(255) DEFAULT NULL,
  `review_upload_origin` varchar(255) DEFAULT NULL,
  `review_status` tinyint(1) NOT NULL,
  `product_opt_id` int(11) DEFAULT NULL,
  `product_id` int(10) unsigned zerofill DEFAULT NULL,
  `is_visible` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`review_no`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_management`
--

/*!40000 ALTER TABLE `review_management` DISABLE KEYS */;
INSERT INTO `review_management` VALUES
(1,'1','2024-11-19 12:09:20',1,1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,1),
(6,'assa@naver.com','2024-12-03 12:12:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,0),
(7,'juhye@gmail.com','2024-12-03 12:12:38',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(8,'123','2024-12-03 12:19:51',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(9,'123','2024-12-03 13:41:50',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(10,'123','2024-12-03 13:52:16',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(11,'123','2024-12-03 14:03:09',2,0,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(12,'djslkjlk@naver.com','2024-12-06 14:51:00',3,1,'mynameissecret','향이 정말 내 취~향저격','내 취~향 저격','서울','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,1),
(17,'123','2024-12-09 22:11:37',0,0,'아람','만나서반가워요','만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(18,'123','2024-12-09 22:15:27',3,0,'라임이','길라임','길라임만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(19,'123','2024-12-10 09:49:54',3,0,'dkfka','리뷰를 남겨볼게요','정말 향이 너무 좋아요','부산바캉스','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(20,'123','2024-12-10 13:57:37',2,0,'정윤','얼그레이 빠 입니다','얼그레이 사랑해요 너무좋아요','부산','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,1),
(21,'123','2024-12-10 14:00:58',2,0,'세라','저는 만다린 덕후입니다 ','라임 바질 만다린 향수 너무좋ㅇ요','이천','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,1),
(22,'aram@gmail.com','2024-12-10 14:40:51',4,0,'한수연','만다린 쳐돌이','저는 만다린이 너무좋아요','강서','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,15,0000000022,1),
(23,'aram@gmail.com','2024-12-10 15:32:41',3,0,'홍길동','저는 길동입니다','어머니 살려주세요','광주','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(24,'aram@gmail.com','2024-12-10 15:44:29',2,0,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(25,'aram@gmail.com','2024-12-10 15:53:39',2,0,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,0),
(26,'aram@gmail.com','2024-12-10 15:53:52',2,0,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(27,'aram@gmail.com','2024-12-10 16:01:52',2,0,'aka다현','저는 이 상품 재구매 하고싶어요','정말 이 향을 제몸에 덕지덕지 바르고싶네요','당진','프루티','밤',NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(28,'aram@gmail.com','2024-12-10 16:07:07',2,0,'박소현','저는 재구매의사가 있어요','정말 이 향은 평생 뿌리고 싶은 좋은 향입니다','대구','라이트 플로럴','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(29,'aram@gmail.com','2024-12-10 16:12:24',3,0,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(30,'aram@gmail.com','2024-12-10 16:15:36',3,0,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(31,'aram@gmail.com','2024-12-10 16:17:21',3,0,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(32,'aram@gmail.com','2024-12-10 16:18:30',3,0,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(33,'aram@gmail.com','2024-12-10 16:19:18',3,0,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(34,'aram@gmail.com','2024-12-10 16:20:11',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(35,'aram@gmail.com','2024-12-10 16:22:46',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(36,'aram@gmail.com','2024-12-10 16:23:51',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(37,'aram@gmail.com','2024-12-10 16:25:32',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(38,'aram@gmail.com','2024-12-10 16:28:50',1,0,'정윤윤','전 만다린좋아요','만다린이 정말 너무좋아요','잠실종합','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(39,'aram@gmail.com','2024-12-10 16:38:43',5,0,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,0),
(40,'aram@gmail.com','2024-12-10 16:42:26',5,0,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(41,'aram@gmail.com','2024-12-10 16:44:26',5,0,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(42,'aram@gmail.com','2024-12-10 17:09:14',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'hey1733818154682.jpeg',NULL,1,14,0000000021,1),
(43,'aram@gmail.com','2024-12-10 17:11:27',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'sealion1733818287583.jpeg',NULL,1,14,0000000021,1),
(44,'aram@gmail.com','2024-12-10 17:12:45',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'hey1733818365428.jpeg',NULL,1,14,0000000021,1),
(45,'aram@gmail.com','2024-12-10 17:13:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'1733818396774.jpeg',NULL,1,14,0000000021,0),
(46,'aram@gmail.com','2024-12-11 16:38:22',2,0,'뉴진스하니','오마오마갓','향기너무좋아요~','청담','프루티','낮','누군가를 위한',NULL,NULL,'capi.jpeg',NULL,1,6,0000000003,0),
(47,'aram@gmail.com','2024-12-11 16:55:20',2,0,'뉴진스하니','오마오마갓','향기너무좋아요~','청담','플로럴','낮과 밤','나를 위한',NULL,NULL,'hey1733903720284.jpeg',NULL,1,5,0000000002,1),
(48,'aram@gmail.com','2024-12-11 17:14:48',0,0,'뉴진스민지','디토~','세이이런더미로','학동','라이트 플로럴','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,5,0000000002,1),
(49,'aram@gmail.com','2024-12-11 17:56:39',2,0,'다니엘','디퓨저 최고! ','만다린 대퓨저 최고입니다!','잠실나루','시트러스','낮','누군가를 위한',NULL,NULL,'sealion1733907399487.jpeg',NULL,1,15,0000000022,1),
(50,'undefined','2024-12-11 19:38:30',5,0,'고양이해린','바다의 향이 느껴져요','랄랄랄~~~라라라라~라랄라랄~','송파','라이트 플로럴','밤','나를 위한',NULL,NULL,'rock1733913510431.jpeg',NULL,1,11,0000000017,1),
(51,'undefined','2024-12-12 15:34:02',2,0,'나나','나나나','나나나나','나나','시트러스','낮','누군가를 위한',NULL,NULL,'sealion1733985242604.jpeg',NULL,1,11,0000000017,1);
/*!40000 ALTER TABLE `review_management` ENABLE KEYS */;

--
-- Table structure for table `review_reports`
--

DROP TABLE IF EXISTS `review_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review_reports` (
  `report_no` int(11) NOT NULL AUTO_INCREMENT,
  `review_no` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `report_date` datetime NOT NULL,
  `report_detail` longtext NOT NULL,
  `check_detail` text DEFAULT NULL,
  `check_datetime` datetime DEFAULT NULL,
  `check_status` tinyint(1) NOT NULL,
  PRIMARY KEY (`report_no`),
  KEY `fk_review_no` (`review_no`),
  CONSTRAINT `fk_review_no` FOREIGN KEY (`review_no`) REFERENCES `review_management` (`review_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_reports`
--

/*!40000 ALTER TABLE `review_reports` DISABLE KEYS */;
INSERT INTO `review_reports` VALUES
(1,1,'1','2024-11-19 12:09:20','기분이 나빠졌어요',NULL,NULL,0),
(6,6,'jdljaklj@gmail.com','2024-12-05 13:52:00','진짜 욕좀 그만해주세요','비공개 처리됨','2024-12-11 19:34:03',1),
(7,7,'skfjkljdlkjg@naver.com','2024-12-05 13:53:00','너무 선정적인 글입니다',NULL,NULL,1),
(8,1,'aram@gmail.com','2024-12-09 16:01:39','틀린 상품: 틀렸어!',NULL,NULL,0),
(9,1,'aram@gmail.com','2024-12-09 16:04:14','상품리뷰가 아니다: 삼품 리뷰가 아니무니다 잘못됐습니다무',NULL,NULL,0),
(10,1,'aram@gmail.com','2024-12-09 17:03:30','저작권 위반: 일단 저작권 위반으로 정윤님 말씀하지마세요',NULL,NULL,0),
(11,8,'aram@gmail.com','2024-12-09 17:27:02','저작권 위반: 저작권 위반 멈춰',NULL,NULL,0),
(12,17,'aram@gmail.com','2024-12-11 11:36:34','틀린 상품: 이건 만다린 코롱이아니야~','비공개 처리됨','2024-12-13 10:45:56',1),
(13,22,'aram@gmail.com','2024-12-11 15:00:18','틀린 상품: 전 정말 이 상품이 틀렸다고 생각해요. ','비공개 처리됨','2024-12-13 10:51:41',1),
(14,45,'aram@gmail.com','2024-12-11 15:35:58','상품리뷰가 아니다: 캔들의 리뷰가 아니고 향수의 리뷰네요','비공개 처리됨','2024-12-11 19:34:23',1),
(15,39,'aram@gmail.com','2024-12-11 15:38:03','틀린 상품: 이건 우디 상품이 아니에요','비공개 처리됨','2024-12-11 17:55:38',1),
(16,46,'aram@gmail.com','2024-12-11 16:40:19','저속함: 노래가 너무 고급진데 저속하다고 생각하지 않아요','비공개 처리됨','2024-12-11 17:54:44',1),
(17,48,'aram@gmail.com','2024-12-11 17:15:53','고객 이미지: 뉴진스 민지가 아니에요','비공개 처리됨','2024-12-11 17:55:46',1),
(18,49,'aram@gmail.com','2024-12-11 17:57:16','고객 이미지: 해달이 너무 뚱뚱해요','비공개 처리됨','2024-12-11 17:57:59',1),
(19,49,'aram@gmail.com','2024-12-11 18:07:57','틀린 상품: 사진이 알맞지않은 사진잉ㄴ거같아요','비공개 처리됨','2024-12-13 10:42:31',1),
(20,50,'aram@gmail.com','2024-12-11 19:41:19','고객 이미지: 고객의 이미지가 너무 커엽습니다','비공개 처리됨','2024-12-11 20:27:13',1),
(21,50,'aram@gmail.com','2024-12-11 20:09:15','틀린 상품: 사진이랑 실물이 너무 달라요','비공개 처리됨','2024-12-11 20:27:13',1);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-18  9:48:45
