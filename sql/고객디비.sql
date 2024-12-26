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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(27,'24142033','jinmak@gmail.com','!wlsakrdlek12'),
(28,'24170021','goku5124@gmail.com','!Rlaehddnr123'),
(29,'24110419','nhbank@gmail.com','shdguqdmsgod!123'),
(30,'24159549','nonghyup@gmail.com','shdguqdmsgod!123'),
(31,'24127897','cartaetyun@gmail.com','!ckxogus123!'),
(32,'24179416','daeho2@gmail.com','!dleogh!1234'),
(33,'24165047','2yun@gmail.com','!rkddldbs!123'),
(34,'24115854','hanga@gmail.com','!gksrkdls!123'),
(35,'24132697','1hyoju@gmail.com','!gksgywn!123');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;

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
('24110419','이신협','nhbank@gmail.com','010-1011-2023','남자','1973-08-01',1,0,12121,'서울특별시 강남구 강남대로','송림빌딩','13층 더조은아카데미','2024-12-23 01:20:14','2024-12-23 01:20:14','정상'),
('24115002','차은우','eunwoo@gmail.com','010-8787-4678','남자',NULL,1,0,13312,'서울시 강남구 테헤란로','은우빌딩','30층 은우네','2024-12-11 05:17:20','2024-12-23 06:47:43','정상'),
('24115347','박세아','seah@gmail.com','010-7777-2222','여자','1993-03-03',1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:28:31','2024-12-11 05:28:31','정상'),
('24115854','한가인','hanga@gmail.com','010-2929-1212','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-23 05:57:53','2024-12-23 05:57:53','정상'),
('24118486','한예슬','yeseul@gmail.com','010-3525-3252','여자',NULL,1,0,33323,'강원도 강릉시 선수촌로 79-14','(유천동, 강릉유천유승한내들더퍼스트)','202동 606호','2024-12-11 05:29:13','2024-12-11 05:29:13','정상'),
('24121025','정해인','haein@gmail.com','010-1231-2342','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 03:14:02','2024-12-16 03:14:02','정상'),
('24126192','손재훈','jaehoon@gmail.com','010-8888-7777','',NULL,0,0,22221,'경기도 안양시 만안구 안양천서로 249','(안양동, 안양역푸르지오더샵)','108호 902호','2024-12-10 08:51:23','2024-12-10 08:51:23','정상'),
('24127432','위하준','hajoon@gmail.com','010-5353-2525','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:25:33','2024-12-11 05:25:33','정상'),
('24127897','차태현','cartaetyun@gmail.com','010-2324-3432','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-23 03:00:47','2024-12-23 03:00:47','정상'),
('24132697','한효주','1hyoju@gmail.com','010-1122-3342','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-23 06:02:27','2024-12-23 06:54:59','정상'),
('24142033','진막','jinmak@gmail.com','010-2323-3435','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-19 07:30:02','2024-12-19 07:30:02','정상'),
('24142986','박정민','jungmin@gmail.com','010-5645-5689','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2022-12-11 05:07:32','2023-12-11 05:07:32','휴면'),
('24144168','변우석','wooseok@gmail.com','010-2345-3235','남자','1991-10-31',1,0,12345,'서울특별시 강남구 테헤란로 123','테헤란빌딩','A동 테슬라사무실','2024-12-11 05:07:32','2024-12-11 05:07:32','정상'),
('24150697','김수훈','soohoon@gmail.com','010-2342-3452','',NULL,0,0,NULL,NULL,NULL,NULL,'2024-12-10 08:57:44','2024-12-10 08:57:44','휴면'),
('24153442','임시완','siwan@gmail.com','010-8989-9797','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:24:12','2024-12-11 05:24:12','정상'),
('24159549','이농협','nonghyup@gmail.com','010-9191-2727','',NULL,1,1,NULL,NULL,NULL,NULL,'2024-12-23 02:00:33','2024-12-23 02:00:33','정상'),
('24161220','손주혜','juhye@gmail.com','010-3332-2234','여자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10 08:50:27','2024-12-10 08:50:27','휴면'),
('24165047','강이윤','2yun@gmail.com','010-2626-2626','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-23 05:54:22','2024-12-23 05:54:22','정상'),
('24165558','임세훈','sehoon@gmail.com','010-2345-6666','',NULL,0,0,15631,'인천시 연수구 송도국제대로 261','(송도동, 송도더샵센트럴시티)','1102동 404호','2024-12-10 08:56:35','2024-12-10 08:56:35','정상'),
('24166115','한치명','chimyeong@gmail.com','010-4343-7878','여자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:27:24','2024-12-11 05:27:24','정상'),
('24166865','강동원','chamchi@gmail.com','010-1010-2121','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:24:45','2024-12-11 05:24:45','정상'),
('24167929','한수연','sooyeon@gmail.com','010-2323-3434','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-05 08:08:37','2024-12-05 08:08:37','정상'),
('24167985','이규만','gyuman@gmail.com','010-5555-4444','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10 08:52:35','2024-12-10 08:52:35','정상'),
('24170021','김동욱','goku5124@gmail.com','010-9950-0479','남자','1991-06-03',1,0,12312,'서울시 관악구 양녕로','동욱이하우스','302호','2024-12-20 05:59:55','2024-12-20 05:59:55','정상'),
('24174206','구교환','9trade@gmail.com','010-1010-2020','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16 03:09:34','2024-12-16 03:09:34','정상'),
('24176691','관리자','admin@jomalone.kr','02-123-4567','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11 05:36:01','2024-12-23 07:19:14','정상'),
('24179416','이대호','daeho2@gmail.com','010-9292-9292','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-23 05:52:23','2024-12-23 05:52:23','정상'),
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
('24108447','유재석','meddok@gmail.com','010-1212-4433','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16','2024-12-23','탈퇴'),
('24109941','우수정','soojung@gmail.com','010-2323-1212','',NULL,0,0,NULL,NULL,NULL,NULL,'2024-12-10','2024-12-11','탈퇴'),
('24120633','이아람','aram@gmail.com','010-1111-2222','여자',NULL,1,1,2467,'서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','101동 303호','2024-12-06','2024-12-10','탈퇴'),
('24121067','강호동','hodong2@gmail.com','010-8282-9595','남자',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-16','2024-12-23','탈퇴'),
('24128106','이동근','donggeun@gmail.com','010-4646-3232','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-11','2024-12-13','탈퇴'),
('24145384','류정윤','jeongyun@gmail.com','010-1122-3344','여자','1993-01-15',1,0,5502,'서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','2022-11-11','2024-12-10','탈퇴'),
('24153894','박세라','sera@gmail.com','010-3232-2323','여자','1991-08-31',1,1,NULL,NULL,NULL,NULL,'2024-12-05','2024-12-10','탈퇴'),
('24178933','김소희','sohee@gmail.com','010-9898-2235','',NULL,1,0,NULL,NULL,NULL,NULL,'2024-12-10','2024-12-12','탈퇴');
/*!40000 ALTER TABLE `deleted_customers` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-23 17:58:10
