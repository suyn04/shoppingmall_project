-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: jomalone_db
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `basket`
--

DROP TABLE IF EXISTS `basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `basket` VALUES (9,'sera@gmail.com',4),(10,'sera@gmail.com',5),(11,'sooyeon@gmail.com',2),(12,'aram@gmail.com',4),(13,'aram@gmail.com',1);
/*!40000 ALTER TABLE `basket` ENABLE KEYS */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
  `order_date` date NOT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'aram@gmail.com','kakao','이아람','617000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','잘 부탁드려요','주문완료','2024-12-06',NULL),(2,'jeongyun@gmail.com','card','삼아람','235000','010-2222-1121','5502','서울시 송송구 올림픽로 135','(잠실동, 잠실리센츠)','242동 212호',NULL,'주문완료','2023-11-11',NULL),(3,'sera@gmail.com','payco','박세라','220000','010-3232-2323','24672','서울시 송파구 올림픽로 135','(잠실잠실동, 잠실리센츠)','303동 453호','빠르게 부탁드려요','주문완료','2024-12-06',NULL),(4,'sooyeon@gmail.com','naver','한수연','434000','010-2323-3434','5502','서울시 동동문구 고산자로 534','(제기차기동, 제기한신아파트)','222동 1201호',NULL,'주문완료','2024-12-03',NULL),(5,'aram@gmail.com','naver','이아람','1100000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','안녕하이요','주문완료','2024-12-08',NULL),(6,'sooyeon@gmail.com','payco','한수연','1134000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','주문완료','2024-12-08',NULL),(7,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','주문완료','2024-12-08',NULL),(8,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(9,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(10,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(11,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(12,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-08',NULL),(13,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','주문완료','2024-12-09',NULL),(14,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-09',NULL),(15,'jeongyun@gmail.com','naver','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-09',NULL),(16,'jeongyun@gmail.com','payco','류정윤','940000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-09',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

--
-- Table structure for table `orders_detail`
--

DROP TABLE IF EXISTS `orders_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_detail` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `order_cnt` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_detail`
--

/*!40000 ALTER TABLE `orders_detail` DISABLE KEYS */;
INSERT INTO `orders_detail` VALUES (1,1,'1',2,220000),(2,1,'2',1,162000),(3,1,'3',1,235000),(4,2,'3',1,235000),(5,3,'1',2,220000),(6,4,'2',2,324000),(7,4,'1',1,110000),(8,5,'4',8,880000),(9,5,'1',2,220000),(10,6,'2',7,1134000),(11,7,'2',4,648000),(12,8,'2',4,648000),(13,9,'2',1,162000),(14,10,'2',1,162000),(15,11,'2',1,162000),(16,12,'3',1,235000),(17,13,'3',1,235000),(18,14,'3',1,235000),(19,15,'3',2,470000),(20,16,'3',4,940000);
/*!40000 ALTER TABLE `orders_detail` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09  9:40:28
