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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(7,7,'skfjkljdlkjg@naver.com','2024-12-05 13:53:00','너무 선정적인 글입니다',NULL,NULL,1);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-06 16:43:44
