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
  PRIMARY KEY (`review_no`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_management`
--

/*!40000 ALTER TABLE `review_management` DISABLE KEYS */;
INSERT INTO `review_management` VALUES
(1,'1','2024-11-19 12:09:20',1,1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),
(6,'assa@naver.com','2024-12-03 12:12:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(7,'juhye@gmail.com','2024-12-03 12:12:38',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(8,'123','2024-12-03 12:19:51',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(9,'123','2024-12-03 13:41:50',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(10,'123','2024-12-03 13:52:16',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),
(11,'123','2024-12-03 14:03:09',2,0,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `review_management` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-05 17:25:36
