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
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `auth_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`auth_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`email`) REFERENCES `customers` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (1,'aram@gmail.com','123123'),(2,'jeongyun@gmail.com','123123'),(3,'sooyeon@gmail.com','123123'),(4,'sera@gmail.com','123123');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;

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
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `customers` VALUES ('24120633','이아람','aram@gmail.com','010-1111-2222','여자',NULL,1,1,24672,'서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','2024-12-05 17:07:42','2024-12-05 17:07:42','정상'),('24145384','류정윤','jeongyun@gmail.com','010-1212-2121','여자','1993-01-15',1,1,5502,'서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','2022-11-11 06:05:11','2022-12-24 05:07:55','휴면'),('24153894','박세라','sera@gmail.com','010-3232-2323','여자','1991-08-31',1,1,NULL,NULL,NULL,NULL,'2024-12-05 17:09:00','2024-12-05 17:09:00','정상'),('24167929','한수연','sooyeon@gmail.com','010-2323-3434','',NULL,1,0,12345,'서울시 강서구','강서구아파트','122동 1222호','2024-12-05 17:08:37','2024-12-05 17:08:37','정상');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

--
-- Table structure for table `deleted_customers`
--

DROP TABLE IF EXISTS `deleted_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
  `join_date` timestamp NULL DEFAULT current_timestamp(),
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
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `one_to_one`
--

/*!40000 ALTER TABLE `one_to_one` DISABLE KEYS */;
INSERT INTO `one_to_one` VALUES (10,'order','123','2024-12-02 19:41:20','하이','만나서반갑',NULL,NULL,'대기'),(11,'order','123','2024-12-02 20:01:41','왜이러세요','제발 나좀 도와주러ㅏ',NULL,NULL,'대기'),(12,'order','123','2024-12-02 20:10:04','wpqkftkffuwnj','dksl 왜이래',NULL,NULL,'대기'),(13,'product','123','2024-12-02 20:22:16','안녕','하겠냐고!!!!',NULL,NULL,'대기'),(14,'information','123','2024-12-02 20:24:43','이아람','탈퇴시켜줘',NULL,NULL,'대기'),(15,'refund','123','2024-12-02 20:28:43','류정윤','환불하겠습니다',NULL,'2024-12-03 09:55:28','대기');
/*!40000 ALTER TABLE `one_to_one` ENABLE KEYS */;

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
INSERT INTO `orders` VALUES (1,'aram@gmail.com','kakao','이아람','617000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','잘 부탁드려요','주문완료','2024-12-06',NULL),(2,'jeongyun@gmail.com','card','삼아람','235000','010-2222-1121','5502','서울시 송송구 올림픽로 135','(잠실동, 잠실리센츠)','242동 212호',NULL,'주문완료','2023-11-11',NULL),(3,'sera@gmail.com','payco','박세라','220000','010-3232-2323','24672','서울시 송파구 올림픽로 135','(잠실잠실동, 잠실리센츠)','303동 453호','빠르게 부탁드려요','주문완료','2024-12-06',NULL),(4,'sooyeon@gmail.com','naver','한수연','434000','010-2323-3434','5502','서울시 동동문구 고산자로 534','(제기차기동, 제기한신아파트)','222동 1201호',NULL,'주문완료','2024-12-03',NULL),(5,'aram@gmail.com','naver','이아람','1100000','010-1111-2222','24672','서울시 동대문구 고산자로 534','(제기동, 제기한신아파트)','1012동 303호','안녕하이요','주문완료','2024-12-08',NULL),(6,'sooyeon@gmail.com','payco','한수연','1134000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','주문완료','2024-12-08',NULL),(7,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','안녕','주문완료','2024-12-08',NULL),(8,'sooyeon@gmail.com','kakao','한수연','648000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(9,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(10,'sooyeon@gmail.com','card','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(11,'sooyeon@gmail.com','naver','한수연','162000','010-2323-3434','12345','서울시 강서구','강서구아파트','122동 1222호','ㄴㄴ','주문완료','2024-12-08',NULL),(12,'jeongyun@gmail.com','card','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-08',NULL),(13,'jeongyun@gmail.com','naver','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호','dd','주문완료','2024-12-09',NULL),(14,'jeongyun@gmail.com','payco','류정윤','235000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-09',NULL),(15,'jeongyun@gmail.com','kakao','류정윤','470000','010-1212-2121','5502','서울시 송파구 올림픽로 135','(잠실동, 잠실리센츠)','303동 1201호',NULL,'주문완료','2024-12-09',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_detail`
--

/*!40000 ALTER TABLE `orders_detail` DISABLE KEYS */;
INSERT INTO `orders_detail` VALUES (1,1,'1',2,220000),(2,1,'2',1,162000),(3,1,'3',1,235000),(4,2,'3',1,235000),(5,3,'1',2,220000),(6,4,'2',2,324000),(7,4,'1',1,110000),(8,5,'4',8,880000),(9,5,'1',2,220000),(10,6,'2',7,1134000),(11,7,'2',4,648000),(12,8,'2',4,648000),(13,9,'2',1,162000),(14,10,'2',1,162000),(15,11,'2',1,162000),(16,12,'3',1,235000),(17,13,'3',1,235000),(18,14,'3',1,235000),(21,15,'3',2,470000);
/*!40000 ALTER TABLE `orders_detail` ENABLE KEYS */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'라임 바질 앤 만다린 코롱','Lime Basil & Mandarin Cologne','Best Seller',1,'citrus','라임 바질 앤 만다린',1,'조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Amyl Cinnamal, Geraniol, Citronellol, Benzyl Salicylate, Hexyl Cinnamal, Eugenol, Benzyl Benzoate <ILN49337>',1,2,3,'2024-12-02 00:00:00'),(2,'그레이프프루트 코롱','Grapefruit Cologne','New',1,'citrus','그레이프프루트',1,'스페인 해안의 수많은 자몽 과수원. 자몽의 밝고 명랑한 느낌에 로즈마리, 페퍼민트, 피멘토의 톡 쏘는 향을 더했습니다. 산뜻한 느낌, 기분이 좋아지는 향수입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Geraniol, Citral, Eugenol, Alpha-Isomethyl Ionone, Coumarin, Amyl Cinnamal, Citronellol, Bht <ILN49332>',4,5,6,'2024-12-02 00:00:00'),(3,'얼 그레이 앤 큐컴버 코롱','Earl Grey & Cucumber Cologne',NULL,1,'citrus',NULL,1,'영국의 전통인 애프터눈 티. 얼 그레이 티에 프루티 아로마 향을 더욱 강조해주는 베르가못과 시원한 오이의 향을 더했습니다. 비즈왁스와 바닐라의 베이스가 달콤함을 가져다 줍니다.','변성알코올, 정제수, 향료, 리날룰, 리모넨, 이소유제놀, 제라니올, 시트랄 [ILN36747]',7,8,9,'2024-12-04 11:11:37'),(4,'잉글리쉬 페어 앤 프리지아 코롱','English Pear & Freesia Cologne',NULL,1,'fruity',NULL,1,'가을의 정수. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더했습니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Farnesol, Limonene, Geraniol, Linalool, Hexyl Cinnamal, Citronellol, Citral, Bht, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate <ILN98998>',10,11,12,'2024-12-04 12:06:59'),(5,'와일드 블루벨 코롱','Wild Bluebell Cologne',NULL,1,'light-floral',NULL,1,'숲 속 깊은 곳에서 빛나고 있는 사파이어. 이슬 맺힌 블루벨의 은은하고 달콤한 향에 릴리와 들장미 향의 조화가 최면을 걸 듯 마음을 사로잡습니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',13,14,15,'2024-12-04 13:31:40'),(6,'허니서클 앤 다바나 코롱','Honeysuckle & Davana Cologne',NULL,1,'floral',NULL,1,'영국 전원 지대에 물결치듯이 피어 오르는 야생 허니서클은 휘감듯이 피어 오르며 어둠이 깔리면 더욱 매력적으로 빛납니다. 과일 향의 반전을 지닌 다바나의 아로마 향, 여기에 로즈 향이 가미되어 더욱 신선해 집니다. 모스는 향에 우디함을 더해 줍니다. 햇살을 담아 따뜻해진 향. 선명하고 화사한 행복감을 표현하는 향입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015]',16,17,6,'2024-12-04 13:45:06'),(7,'포머그래니트 누와 코롱','Pomegranate Noir Cologne',NULL,1,'woody',NULL,1,'대담한 레드 드레스의 관능미. 석류, 라즈베리, 자두를 섞은 짙은 다홍색 주스에 핑크 페퍼를 넣고 카사블랑카 백합과 숲의 향기를 더했습니다. 어둡고 불가사의한 느낌의 향수입니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',18,19,20,'2024-12-04 13:52:02'),(17,'우드 세이지 앤 씨 솔트 코롱','Wood Sage & Sea Salt Cologne',NULL,1,'woody',NULL,1,'바람부는 해안을 따라 걸으며 일상을 벗어나보세요. 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기. 험준한 절벽에서 느껴지는 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러져 자유롭고 활기찬 에너지와 즐거움이 가득합니다.','변성알코올, 정제수, 향료, 유제놀, 하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨, 신나밀알코올, 리날룰 [ILN29015] ',21,22,23,'2024-12-04 15:55:39'),(18,'라임 바질 앤 만다린 코롱','Lime Basil & Mandarin Cologne',NULL,1,'citrus',NULL,1,'조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한 라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을 만들어 냅니다. 현대적인 감각의 클래식한 향입니다.','Alcohol Denat., Water\\Aqua\\Eau, Fragrance (Parfum), Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Amyl Cinnamal, Geraniol, Citronellol, Benzyl Salicylate, Hexyl Cinnamal, Eugenol, Benzyl Benzoate <ILN49337>',1,2,3,'2024-12-05 15:53:05'),(21,'바질 앤 네롤리 홈 캔들','Basil & Neroli Home Candle',NULL,2,'citrus',NULL,1,'런던의 모습을 그대로 담은 장난스럽고도 사랑스러운 향. 플로럴 향이 풍부한 네롤리에 바질의 기분 좋은 향이 더해져 즐거운 모험이 가득한 영국만의 독특한 향을 냅니다. 기분을 고조시키거나 긴장을 풀기 위해, 또는 단순히 고급스러운 느낌을 더하고 싶을 때 사용해 보세요. 캔들이 타면서 퍼지는 향이 즉각적으로 방 안을 가득 메워 매력적인 분위기를 연출해 줍니다. 홈 캔들은 45시간동안 지속되며 실버 덮개와 함께 판매됩니다. 캔들 용량은 200g입니다.','화장품 아님 / 파라핀, 향초 / 자가검사번호 F-A09B-T025002-A150',NULL,NULL,NULL,'2024-12-06 13:36:04'),(22,'라임 바질 앤 만다린 디퓨저','Lime Basil & Mandarin Diffuser',NULL,3,'citrus',NULL,1,'조 말론 런던의 모던한 클래식 제품으로 공간을 채워보세요. 약 3-4달 동안 지속적으로 향기가 유지되며, 최적의 사용을 위해 10개의 리드를 동시에 사용해 주세요','에톡시디글라이콜,향료(리모넨 등) 자가검사번호: FB20-12-2207 ',NULL,NULL,NULL,'2024-12-06 13:47:35'),(23,'그레이프프루트 바디 앤 핸드 워시','Grapefruit Body & Hand Wash',NULL,4,'citrus',NULL,1,'기분 좋은 그레이프프루트 바디 앤 핸드 워시로 당신의 데일리 루틴을 완성해보세요. 글리세린과 메도우폼 씨드 오일이 함유된 포뮬러가 벨벳처럼 부드러운 거품을 내며, 피부를 클렌징해주고 깨끗하게 만들어 줍니다. 기분 좋은 시트러스 향을 피부에 은은하게 남겨보세요.','ngredients: Water\\Aqua\\Eau, Sodium Laureth Sulfate, Lauramidopropyl Betaine, Peg-7 Glyceryl Cocoate, Fragrance (Parfum), Glycerin, Sucrose, Limnanthes Alba (Meadowfoam) Seed Oil, Caffeine, Ethylhexylglycerin, Caprylyl Glycol, Peg-6 Caprylic/Capric Glycerides, Sodium Chloride, Peg-120 Methyl Glucose Dioleate, Polysorbate 20, Peg-150 Pentaerythrityl Tetrastearate, Pentylene Glycol, Hexylene Glycol, Polyquaternium-7, Magnesium Nitrate, Citric Acid, Geraniol, Limonene, Linalool, Citral, Eugenol, Bht, Sodium Benzoate, Methylchloroisothiazolinone, Methylisothiazolinone, Phenoxyethanol <ILN49499>',NULL,NULL,NULL,'2024-12-06 14:57:02'),(24,'라임 바질 앤 만다린 바디 크림','Lime Basil & Mandarin Body Creme',NULL,7,'citrus',NULL,1,'풍부한 영양을 선사하는 라임 바질 앤 만다린 바디 크림으로 당신의 데일리 루틴을 완성해보세요. 코코아 버터와 스위트 아몬드 오일이 함유되어 부드러운 질감의 포뮬러가 피부에 촉촉한 보습 효과를 선사합니다. 매력적이면서도 풍미 넘치는 향을 피부에 은은하게 남겨보세요.','Ingredients: Water\\Aqua\\Eau, Glycerin, Cetearyl Alcohol, Simmondsia Chinensis (Jojoba) Seed Oil, Glyceryl Stearate, Stearic Acid, Fragrance (Parfum), Triethanolamine, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Theobroma Cacao (Cocoa) Seed Butter, Bisabolol, Caffeine, Dimethicone, Isopropyl Palmitate, Aloe Barbadensis Leaf Juice, Glyceryl Laurate, Cocamidopropyl Pg-Dimonium Chloride Phosphate, Caprylyl Glycol, Hexylene Glycol, Geraniol, Amyl Cinnamal, Benzyl Salicylate, Limonene, Linalool, Hydroxycitronellal, Alpha-Isomethyl Ionone, Evernia Prunastri (Oakmoss) Extract, Citral, Disodium Edta, Phenoxyethanol <ILN49220>',NULL,NULL,NULL,'2024-12-06 15:38:42');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `product_category` VALUES (1,'cologne',NULL,NULL),(2,'home-scents','candle',NULL),(3,'home-scents','diffuser',NULL),(4,'bath-body','bath-shower','body-hand-wash'),(5,'bath-body','bath-shower','shower-gel-oil'),(6,'bath-body','bath-shower','bath-oil'),(7,'bath-body','body-care','body-cream'),(8,'bath-body','body-care','body-hand-lotion'),(9,'bath-body','body-care','hand-cream'),(10,'bath-body','body-care','body-mist');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;

--
-- Table structure for table `product_note`
--

DROP TABLE IF EXISTS `product_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_note` (
  `product_note_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_note_name` varchar(50) NOT NULL,
  `product_note_intro` text NOT NULL,
  `product_note_upSystem` varchar(255) NOT NULL,
  `product_note_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_note_id`),
  UNIQUE KEY `product_note_name` (`product_note_name`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_note`
--

/*!40000 ALTER TABLE `product_note` DISABLE KEYS */;
INSERT INTO `product_note` VALUES (1,'만다린','밝고 새콤한 만다린이 라임의 톡 쏘는 향과 블렌딩되어 탑노트에 명랑한 상쾌함을 더해주는 향','note_mandarin.jpg','note_mandarin.jpg'),(2,'바질','바질 허브의 따스함에 후추향이 스치며 경쾌한 시트러스 노트에 예상치 못한 반전을 주는 향','note_basil.jpg','note_basil.jpg'),(3,'앰버우드','앰버(amber, 호박) 향의 우디 노트로 프레그런스에 계속 파고들게 되는 따뜻함을 더해주는 향','note_amberwood.jpg','note_amberwood.jpg'),(4,'그레이프프루트','반짝이는 청량감으로 향이 전개되며, 약간의 쌉싸름하면서도 활기 넘치는 느낌을 줍니다.','note_grapefruit.jpg','note_grapefruit.jpg'),(5,'로즈마리','라벤더, 캄포, 민트의 상쾌함이 투명한 느낌의 아로마틱 향을 선사합니다.','note_rosemary.jpg','note_rosemary.jpg'),(6,'모스','모스의 파릇함이 향의 베이스에 흙 내음 나는 우디한 따뜻함을 표현해 줍니다.','note_moss.jpg','note_moss.jpg'),(7,'베르가못','베르가못이 얼 그레이 티에 생기를 더해주며, 시트러스의 신선함으로 향을 밝고 환하게 만들어 줍니다.','note_bergamot.jpg','note_bergamot.jpg'),(8,'큐컴버','시원하고 신선하며 살짝 크런치한 노트는 상쾌한 즙을 가득 머금고 있습니다','note_cucumber.jpg','note_cucumber.jpg'),(9,'비즈왁스','깊이 있고 풍부한 애니멀릭 액센트에 토바코의 터치가 가미되어 고급스러운 달콤함을 선사합니다.','note_beeswax.jpg','note_beeswax.jpg'),(10,'킹 윌리엄 페어','잘 영글은 신선한 배의 과즙에서 느껴지는 풍부하고 부드러운 과일향을 담았습니다.','note_kingwilliampear.jpg','note_kingwilliampear.jpg'),(11,'프리지아','전형적인 브리티시 스타일. 새하얀 프리지아에서 느껴지는 섬세하고도 독특한 향이 미들 노트를 가득 채워줍니다.','note_freesia.jpg','note_freesia.jpg'),(12,'파출리','감각적이면서도 깊고 우디한 노트로 잔향을 오래 지속시켜 줍니다.','note_patchouli.jpg','note_patchouli.jpg'),(13,'블루벨','야생화의 향기에 산뜻한 그리너리의 향과 스파이시한 정향 싹의 발사믹한 달큰함, 그리고 스치듯 은은한 이슬의 투명한 향.','note_bluebell.jpg','note_bluebell.jpg'),(14,'감','우윳빛 복숭아 노트에 깨끗하고 크리미한 향','note_persimmon.jpg','note_persimmon.jpg'),(15,'화이트 머스크','파우더리하고 깨끗한 향이 부드러움을 더해 잔향의 지속력을 높여주는 향','note_whitehmusk.jpg','note_whitehmusk.jpg'),(16,'다바나','감초 향을 가미한 푸른 식물 다바나가 향에 생동감을 선사하며 약간의 과일 노트를 더해줍니다.','note_davana.jpg','note_davana.jpg'),(17,'잉글리쉬 허니서클','반짝이는 플로랄 향을 지닌 허니서클은 하트 노트를 꿀 향으로 물들여 풍부한 느낌을 선사합니다.','note_honeysuckle.jpg','note_honeysuckle.jpg'),(18,'포머그래니트','과즙이 많은 붉은 과일의 조합으로 은은한 석류 향이 탑 노트에 감미롭고 상쾌한 느낌을 전해줍니다.','note_pomegranate.jpg','note_pomegranate.jpg'),(19,'카사블랑카 백합','조화로운 플로랄 블렌드가 카사블랑카 백합의 강렬하고 스파이시한 느낌을 연상시킵니다','note_casablancalily.jpg','note_casablancalily.jpg'),(20,'과이액목','매혹적이고 스모키한 나무 향이 스며들어 관능적인 분위기를 자아냅니다','note_guaiacwood.jpg','note_guaiacwood.jpg'),(21,'암브레트 시드','정교한 아우라로 탑 노트를 감싸는 질감의 특징입니다.','note_ambretteseeds.jpg','note_ambretteseeds.jpg'),(22,'씨 솔트','씨 솔트의 바삭바삭함이 질감과 산뜻함을 선사합니다.','note_seasalt.jpg','note_seasalt.jpg'),(23,'세이지','흙 내음과 아로마틱함이 담긴 우디함이 베이스에 자연스러운 깊이를 줍니다.','note_sage.jpg','note_sage.jpg');
/*!40000 ALTER TABLE `product_note` ENABLE KEYS */;

--
-- Table structure for table `product_opt`
--

DROP TABLE IF EXISTS `product_opt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_opt` (
  `product_opt_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_volume` varchar(50) NOT NULL,
  `product_upSystem` varchar(255) NOT NULL,
  `product_upOri` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_opt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_opt`
--

/*!40000 ALTER TABLE `product_opt` DISABLE KEYS */;
INSERT INTO `product_opt` VALUES (1,1,110000,'30ml','mandarine_cologne_30ml.jpg','mandarine_cologne_30ml.jpg'),(2,1,162000,'50ml','mandarine_cologne_50ml.jpg','mandarine_cologne_50ml.jpg'),(3,1,235000,'100ml','mandarine_cologne_100ml.jpg','mandarine_cologne_100ml.jpg'),(4,2,110000,'30ml','grapefruit_cologne_30ml.jpg','grapefruit_cologne_100ml.jpg'),(5,2,235000,'100ml','grapefruit_cologne_100ml.jpg','Earl_cologne_100ml.jpg'),(6,3,235000,'100ml','earl_cologne_100ml.jpg','earl_cologne_100ml.jpg'),(11,17,235000,'100ml','woodsage_100ml1733387729353.jpg','woodsage_100ml.jpg'),(13,20,105000,'100ml','BayLeaves1733401307059.png','BayLeaves.png'),(14,21,112000,'200g','basilneroli_candle_200g1733459988486.jpg','basilneroli_candle_200g.jpg'),(15,22,151000,'165ml','limebasil_diffusser_165ml1733460597286.jpg','limebasil_diffusser_165ml.jpg'),(16,23,78000,'250ml','grapefurith_body_hand_wash_250ml1733464694758.jpg','grapefurith_body_hand_wash_250ml.jpg'),(17,24,45000,'50ml','limebasil_bodycream_50ml_jpg1733467186735.avif','limebasil_bodycream_50ml_jpg.avif'),(18,24,142000,'175ml','limebasil_bodycream_175ml1733467244539.jpg','limebasil_bodycream_175ml.jpg');
/*!40000 ALTER TABLE `product_opt` ENABLE KEYS */;

--
-- Table structure for table `review_management`
--

DROP TABLE IF EXISTS `review_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `review_management` VALUES (1,'1','2024-11-19 12:09:20',1,1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(6,'assa@naver.com','2024-12-03 12:12:16',0,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(7,'juhye@gmail.com','2024-12-03 12:12:38',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(8,'123','2024-12-03 12:19:51',3,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(9,'123','2024-12-03 13:41:50',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(10,'123','2024-12-03 13:52:16',2,0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(11,'123','2024-12-03 14:03:09',2,0,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1),(12,'djslkjlk@naver.com','2024-12-06 14:51:00',3,1,'mynameissecret','향이 정말 내 취~향저격','내 취~향 저격','서울','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `review_management` ENABLE KEYS */;

--
-- Table structure for table `review_reports`
--

DROP TABLE IF EXISTS `review_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
INSERT INTO `review_reports` VALUES (1,1,'1','2024-11-19 12:09:20','기분이 나빠졌어요',NULL,NULL,0),(2,2,'aram1234@naver.com','2024-12-05 10:02:20','넌 내게 모욕감을 줬어',NULL,NULL,1),(3,3,'ajdajd4321@nate.com','2024-12-05 10:03:30','욕설이 써있어요',NULL,NULL,0),(4,4,'sksmsqkqh32@gmail.com','2024-12-05 10:38:30','제발 욕좀그만써주세요',NULL,NULL,0),(6,6,'jdljaklj@gmail.com','2024-12-05 13:52:00','진짜 욕좀 그만해주세요',NULL,NULL,0),(7,7,'skfjkljdlkjg@naver.com','2024-12-05 13:53:00','너무 선정적인 글입니다',NULL,NULL,1);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;

--
-- Temporary view structure for view `view_product_info_opt`
--

DROP TABLE IF EXISTS `view_product_info_opt`;
/*!50001 DROP VIEW IF EXISTS `view_product_info_opt`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_product_info_opt` AS SELECT 
 1 AS `product_opt_id`,
 1 AS `product_id`,
 1 AS `product_name_kor`,
 1 AS `product_name_eng`,
 1 AS `product_price`,
 1 AS `product_volume`,
 1 AS `product_upSystem`,
 1 AS `product_special`,
 1 AS `product_category_id`,
 1 AS `product_category_one`,
 1 AS `product_category_two`,
 1 AS `product_category_thr`,
 1 AS `product_scent`,
 1 AS `product_group_scent`,
 1 AS `product_status`,
 1 AS `product_intro`,
 1 AS `product_ingredient`,
 1 AS `nt_name`,
 1 AS `nt_intro`,
 1 AS `nt_upSystem`,
 1 AS `nh_name`,
 1 AS `nh_intro`,
 1 AS `nh_upSystem`,
 1 AS `nb_name`,
 1 AS `nb_intro`,
 1 AS `nb_upSystem`,
 1 AS `product_reg_date`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'jomalone_db'
--

--
-- Final view structure for view `view_product_info_opt`
--

/*!50001 DROP VIEW IF EXISTS `view_product_info_opt`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jomalone`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_product_info_opt` AS select `product_opt`.`product_opt_id` AS `product_opt_id`,`product`.`product_id` AS `product_id`,`product`.`product_name_kor` AS `product_name_kor`,`product`.`product_name_eng` AS `product_name_eng`,`product_opt`.`product_price` AS `product_price`,`product_opt`.`product_volume` AS `product_volume`,`product_opt`.`product_upSystem` AS `product_upSystem`,`product`.`product_special` AS `product_special`,`product`.`product_category_id` AS `product_category_id`,`product_category`.`product_category_one` AS `product_category_one`,`product_category`.`product_category_two` AS `product_category_two`,`product_category`.`product_category_thr` AS `product_category_thr`,`product`.`product_scent` AS `product_scent`,`product`.`product_group_scent` AS `product_group_scent`,`product`.`product_status` AS `product_status`,`product`.`product_intro` AS `product_intro`,`product`.`product_ingredient` AS `product_ingredient`,`nt`.`product_note_name` AS `nt_name`,`nt`.`product_note_intro` AS `nt_intro`,`nt`.`product_note_upSystem` AS `nt_upSystem`,`nh`.`product_note_name` AS `nh_name`,`nh`.`product_note_intro` AS `nh_intro`,`nh`.`product_note_upSystem` AS `nh_upSystem`,`nb`.`product_note_name` AS `nb_name`,`nb`.`product_note_intro` AS `nb_intro`,`nb`.`product_note_upSystem` AS `nb_upSystem`,`product`.`product_reg_date` AS `product_reg_date` from (((((`product_opt` left join `product` on(`product_opt`.`product_id` = `product`.`product_id`)) left join `product_category` on(`product`.`product_category_id` = `product_category`.`product_category_id`)) left join `product_note` `nt` on(`product`.`product_top` = `nt`.`product_note_id`)) left join `product_note` `nh` on(`product`.`product_heart` = `nh`.`product_note_id`)) left join `product_note` `nb` on(`product`.`product_base` = `nb`.`product_note_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-09 10:38:17
