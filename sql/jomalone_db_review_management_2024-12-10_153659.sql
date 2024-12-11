/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.6.2-MariaDB, for osx10.18 (x86_64)
--
-- Host: 127.0.0.1    Database: jomalone_db
-- ------------------------------------------------------
-- Server version	11.6.2-MariaDB

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
  PRIMARY KEY (`post_no`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `one_to_one`
--

/*!40000 ALTER TABLE `one_to_one` DISABLE KEYS */;
INSERT INTO `one_to_one` VALUES
(10,'order','123','2024-12-02 19:41:20','하이','만나서반갑',NULL,NULL,'대기'),
(11,'order','123','2024-12-02 20:01:41','왜이러세요','제발 나좀 도와주러ㅏ',NULL,NULL,'대기'),
(12,'order','123','2024-12-02 20:10:04','wpqkftkffuwnj','dksl 왜이래',NULL,NULL,'대기'),
(13,'product','123','2024-12-02 20:22:16','안녕','하겠냐고!!!!',NULL,NULL,'대기'),
(14,'information','123','2024-12-02 20:24:43','이아람','탈퇴시켜줘',NULL,NULL,'대기'),
(15,'refund','123','2024-12-02 20:28:43','류정윤','환불하겠습니다',NULL,'2024-12-03 09:55:28','대기'),
(17,'refund','aram@gmail.com','2024-12-09 10:45:24','저기요 ','화나게 하지마세요',NULL,NULL,'대기'),
(18,'refund','aram@gmail.com','2024-12-09 10:49:20','월요병 퇴치해주세요','월요병 퇴치방법 좀 전수해주세요',NULL,NULL,'대기'),
(19,'information','aram@gmail.com','2024-12-09 10:52:22','이름을 개명했습니다','이름을 개명해서 정보도 수정하고 싶습니다. ',NULL,NULL,'대기'),
(20,'order','aram@gmail.com','2024-12-09 10:56:25','저는 정말 조말론을 사랑하는데','왜 도대체 제가 좋아하는 향수를 품절시키신거죠? ',NULL,NULL,'대기'),
(21,'order','aram@gmail.com','2024-12-09 11:07:01','왜냐면','집에가고싶거든요',NULL,NULL,'대기'),
(22,'refund','aram@gmail.com','2024-12-09 16:24:29','당신을 반품하고싶어요','당신을 반품하고싶으니 다시 가져가주세요',NULL,NULL,'대기'),
(23,'etc','aram@gmail.com','2024-12-09 16:34:10','집에가고싶어요','집에 너무너무 가고싶어요\n',NULL,NULL,'대기');
/*!40000 ALTER TABLE `one_to_one` ENABLE KEYS */;

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
  `review_time` int(11) DEFAULT NULL,
  `review_gift` int(11) DEFAULT NULL,
  `review_good` int(11) DEFAULT NULL,
  `review_bad` int(11) DEFAULT NULL,
  `review_upload_file` varchar(255) DEFAULT NULL,
  `review_upload_origin` varchar(255) DEFAULT NULL,
  `review_status` tinyint(1) NOT NULL,
  `product_opt_id` int(11) DEFAULT NULL,
  `product_id` int(10) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`review_no`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_management`
--

/*!40000 ALTER TABLE `review_management` DISABLE KEYS */;
INSERT INTO `review_management` VALUES
(1,'1','2024-11-19 12:09:20',1,1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL),
(6,'assa@naver.com','2024-12-03 12:12:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(7,'juhye@gmail.com','2024-12-03 12:12:38',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(8,'123','2024-12-03 12:19:51',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(9,'123','2024-12-03 13:41:50',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(10,'123','2024-12-03 13:52:16',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(11,'123','2024-12-03 14:03:09',2,0,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL),
(12,'djslkjlk@naver.com','2024-12-06 14:51:00',3,1,'mynameissecret','향이 정말 내 취~향저격','내 취~향 저격','서울','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL),
(17,'123','2024-12-09 22:11:37',0,0,'아람','만나서반가워요','만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001),
(18,'123','2024-12-09 22:15:27',3,0,'라임이','길라임','길라임만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001),
(19,'123','2024-12-10 09:49:54',3,0,'dkfka','리뷰를 남겨볼게요','정말 향이 너무 좋아요','부산바캉스','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001),
(20,'123','2024-12-10 13:57:37',2,0,'정윤','얼그레이 빠 입니다','얼그레이 사랑해요 너무좋아요','부산','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),
(21,'123','2024-12-10 14:00:58',2,0,'세라','저는 만다린 덕후입니다 ','라임 바질 만다린 향수 너무좋ㅇ요','이천','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL),
(22,'aram@gmail.com','2024-12-10 14:40:51',4,0,'한수연','만다린 쳐돌이','저는 만다린이 너무좋아요','강서','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,15,0000000022),
(23,'aram@gmail.com','2024-12-10 15:32:41',3,0,'홍길동','저는 길동입니다','어머니 살려주세요','광주','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021);
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
  PRIMARY KEY (`report_no`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_reports`
--

/*!40000 ALTER TABLE `review_reports` DISABLE KEYS */;
INSERT INTO `review_reports` VALUES
(1,1,'1','2024-11-19 12:09:20','기분이 나빠졌어요',NULL,NULL,0),
(2,2,'aram1234@naver.com','2024-12-05 10:02:20','넌 내게 모욕감을 줬어',NULL,NULL,1),
(3,3,'ajdajd4321@nate.com','2024-12-05 10:03:30','욕설이 써있어요',NULL,NULL,0),
(4,4,'sksmsqkqh32@gmail.com','2024-12-05 10:38:30','제발 욕좀그만써주세요',NULL,NULL,0),
(6,6,'jdljaklj@gmail.com','2024-12-05 13:52:00','진짜 욕좀 그만해주세요',NULL,NULL,0),
(7,7,'skfjkljdlkjg@naver.com','2024-12-05 13:53:00','너무 선정적인 글입니다',NULL,NULL,1),
(8,1,'aram@gmail.com','2024-12-09 16:01:39','틀린 상품: 틀렸어!',NULL,NULL,0),
(9,1,'aram@gmail.com','2024-12-09 16:04:14','상품리뷰가 아니다: 삼품 리뷰가 아니무니다 잘못됐습니다무',NULL,NULL,0),
(10,1,'aram@gmail.com','2024-12-09 17:03:30','저작권 위반: 일단 저작권 위반으로 정윤님 말씀하지마세요',NULL,NULL,0),
(11,8,'aram@gmail.com','2024-12-09 17:27:02','저작권 위반: 저작권 위반 멈춰',NULL,NULL,0);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-10 15:37:04
