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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_management`
--

/*!40000 ALTER TABLE `review_management` DISABLE KEYS */;
INSERT INTO `review_management` VALUES
(1,'1','2024-11-19 12:09:20',1,'aram','hi','좋긴한데 재구매 까지 이어지진 않을거같아요',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,1),
(6,'assa@naver.com','2024-12-03 12:12:16',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,0),
(7,'juhye@gmail.com','2024-12-03 12:12:38',3,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(8,'123','2024-12-03 12:19:51',3,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(9,'123','2024-12-03 13:41:50',2,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(10,'123','2024-12-03 13:52:16',2,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(11,'123','2024-12-03 14:03:09',2,'나는 아람','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,1),
(12,'djslkjlk@naver.com','2024-12-06 14:51:00',3,'mynameissecret','향이 정말 내 취~향저격','내 취~향 저격','서울','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,0,0,NULL,1),
(17,'123','2024-12-09 22:11:37',0,'아람','만나서반가워요','만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(18,'123','2024-12-09 22:15:27',3,'라임이','길라임','길라임만다린 코롱최고입니다','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(19,'123','2024-12-10 09:49:54',3,'dkfka','리뷰를 남겨볼게요','정말 향이 너무 좋아요','부산바캉스','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,0000000001,1),
(20,'123','2024-12-10 13:57:37',2,'정윤','얼그레이 빠 입니다','얼그레이 사랑해요 너무좋아요','부산','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,1),
(21,'123','2024-12-10 14:00:58',2,'세라','저는 만다린 덕후입니다 ','라임 바질 만다린 향수 너무좋ㅇ요','이천','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,1),
(22,'aram@gmail.com','2024-12-10 14:40:51',4,'한수연','만다린 쳐돌이','저는 만다린이 너무좋아요','강서','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,15,0000000022,1),
(23,'aram@gmail.com','2024-12-10 15:32:41',3,'홍길동','저는 길동입니다','어머니 살려주세요','광주','플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(24,'aram@gmail.com','2024-12-10 15:44:29',2,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(25,'aram@gmail.com','2024-12-10 15:53:39',2,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,0),
(26,'aram@gmail.com','2024-12-10 15:53:52',2,'수정','크리스탈','나에게 어울리는 최고의 캔들','대전','라이트 플로럴',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(27,'aram@gmail.com','2024-12-10 16:01:52',2,'aka다현','저는 이 상품 재구매 하고싶어요','정말 이 향을 제몸에 덕지덕지 바르고싶네요','당진','프루티','밤',NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(28,'aram@gmail.com','2024-12-10 16:07:07',2,'박소현','저는 재구매의사가 있어요','정말 이 향은 평생 뿌리고 싶은 좋은 향입니다','대구','라이트 플로럴','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(29,'aram@gmail.com','2024-12-10 16:12:24',3,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(30,'aram@gmail.com','2024-12-10 16:15:36',3,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(31,'aram@gmail.com','2024-12-10 16:17:21',3,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(32,'aram@gmail.com','2024-12-10 16:18:30',3,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(33,'aram@gmail.com','2024-12-10 16:19:18',3,'홍길동','저는 이 상품 재구매의향있','싦헝요','잠실','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(34,'aram@gmail.com','2024-12-10 16:20:11',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(35,'aram@gmail.com','2024-12-10 16:22:46',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(36,'aram@gmail.com','2024-12-10 16:23:51',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(37,'aram@gmail.com','2024-12-10 16:25:32',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정',NULL,NULL,NULL,NULL,NULL,NULL,1,14,0000000021,1),
(38,'aram@gmail.com','2024-12-10 16:28:50',1,'정윤윤','전 만다린좋아요','만다린이 정말 너무좋아요','잠실종합','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(39,'aram@gmail.com','2024-12-10 16:38:43',5,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,0),
(40,'aram@gmail.com','2024-12-10 16:42:26',5,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(41,'aram@gmail.com','2024-12-10 16:44:26',5,'세라','저는 우디좋아요','우디향은 아니라서 별로에요','봉천','우디','낮과 밤','나를 위한',NULL,NULL,NULL,NULL,1,14,0000000021,1),
(42,'aram@gmail.com','2024-12-10 17:09:14',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'hey1733818154682.jpeg',NULL,1,14,0000000021,1),
(43,'aram@gmail.com','2024-12-10 17:11:27',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'sealion1733818287583.jpeg',NULL,1,14,0000000021,1),
(44,'aram@gmail.com','2024-12-10 17:12:45',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'hey1733818365428.jpeg',NULL,1,14,0000000021,1),
(45,'aram@gmail.com','2024-12-10 17:13:16',0,'익명','제목 없음','내용 없음','지역 미지정','향 미지정','null','null',NULL,NULL,'1733818396774.jpeg',NULL,1,14,0000000021,0),
(46,'aram@gmail.com','2024-12-11 16:38:22',2,'뉴진스하니','오마오마갓','향기너무좋아요~','청담','프루티','낮','누군가를 위한',NULL,NULL,'capi.jpeg',NULL,1,6,0000000003,0),
(47,'aram@gmail.com','2024-12-11 16:55:20',2,'뉴진스하니','오마오마갓','향기너무좋아요~','청담','플로럴','낮과 밤','나를 위한',NULL,NULL,'hey1733903720284.jpeg',NULL,1,5,0000000002,1),
(48,'aram@gmail.com','2024-12-11 17:14:48',0,'뉴진스민지','디토~','세이이런더미로','학동','라이트 플로럴','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,5,0000000002,1),
(49,'aram@gmail.com','2024-12-11 17:56:39',2,'다니엘','디퓨저 최고! ','만다린 대퓨저 최고입니다!','잠실나루','시트러스','낮','누군가를 위한',NULL,NULL,'sealion1733907399487.jpeg',NULL,1,15,0000000022,1),
(50,'undefined','2024-12-11 19:38:30',5,'고양이해린','바다의 향이 느껴져요','랄랄랄~~~라라라라~라랄라랄~','송파','라이트 플로럴','밤','나를 위한',NULL,NULL,'rock1733913510431.jpeg',NULL,1,11,0000000017,1),
(51,'undefined','2024-12-12 15:34:02',2,'나나','나나나','나나나나','나나','시트러스','낮','누군가를 위한',NULL,NULL,'sealion1733985242604.jpeg',NULL,1,11,0000000017,1),
(52,'jh@naver.com','2024-12-18 15:03:42',4,'석지원','히노키덕후입니다','히노키는 왜이렇게 좋은걸까요 ','청담','시트러스','낮','누군가를 위한',NULL,NULL,'jh1734501822421.jpg',NULL,1,45,0000000030,1);
/*!40000 ALTER TABLE `review_management` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-18 15:04:04
