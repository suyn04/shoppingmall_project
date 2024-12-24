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
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(52,'jh@naver.com','2024-12-18 15:03:42',4,'석지원','히노키덕후입니다','히노키는 왜이렇게 좋은걸까요 ','청담','시트러스','낮','누군가를 위한',NULL,NULL,'jh1734501822421.jpg',NULL,1,45,0000000030,1),
(53,'jh@naver.com','2024-12-19 13:27:00',0,'!ㅓㄹ','제목 없음','내용 없음','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,45,0000000030,0),
(54,'jh@naver.com','2024-12-19 13:31:40',3,'!@U@*@U)(jkldjlkfjlkdsjjflkjdfsfdfs','제목 없음','내용 없음','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,45,0000000030,0),
(55,'jh@naver.com','2024-12-19 13:58:17',0,'가가','오마오마갓','df','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,45,0000000030,1),
(56,'yeseul@gmail.com','2024-12-20 13:46:05',4,'지훈주','그거슨 안됩니다','제발 저리 가주세용~~~','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,'capi1734669965203.jpeg',NULL,1,45,0000000030,0),
(57,'yeseul@gmail.com','2024-12-20 14:18:50',3,'만다린처돌이','전 이것만 써요','이 상품은 정말 너무너무 향이 좋아요 길라임바질만다린','강서','플로럴','낮과 밤','나를 위한',NULL,NULL,'sealion1734671930553.jpeg',NULL,1,17,0000000024,1),
(58,'yeseul@gmail.com','2024-12-23 11:39:51',3,'예스리','전 디퓨저 매니아입니다','우드세이지 향수도, 캔들도 맘에들어서 디퓨저도 구매했는데 정말 마음에 들어요','지역 미지정','프루티','낮과 밤','나를 위한',NULL,NULL,'가나디1734921591428.jpeg',NULL,1,49,0000000033,1),
(59,'mh@gamil.com','2024-12-23 12:04:20',2,'민하','저는 민하입니다','민하링~~인데 정말 스웨이드 디퓨저가 정말 맘에들어요','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,51,0000000035,1),
(60,'admin@jomalone.kr','2024-12-23 17:02:11',2,'뉴진스하니','오마오마갓','glalkgdjsgjlksdllkxlz','지역 미지정','시트러스','낮','누군가를 위한',NULL,NULL,NULL,NULL,1,45,0000000030,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(21,50,'aram@gmail.com','2024-12-11 20:09:15','틀린 상품: 사진이랑 실물이 너무 달라요','비공개 처리됨','2024-12-11 20:27:13',1),
(22,53,'jh@naver.com','2024-12-19 13:27:24','스팸: 내용이 이상해요','비공개 처리됨','2024-12-19 13:28:15',1),
(23,54,'jh@naver.com','2024-12-19 15:09:02','상품리뷰가 아니다: 신고할게요','비공개 처리됨','2024-12-19 15:09:21',1),
(24,56,'yeseul@gmail.com','2024-12-20 13:46:29','저속함: 저속합니다 정말','비공개 처리됨','2024-12-20 13:47:02',1);
/*!40000 ALTER TABLE `review_reports` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
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
(30,'refund','admin@jomalone.kr','2024-12-11 23:18:14','세라님 ','관리자 페이지 환불해주세요',NULL,NULL,'대기','1733926694188.jpeg'),
(31,'information','jh@gmail.com','2024-12-18 11:01:43','전 주지훈입니다','제가 박정민 보다 더 잘생겼다구요!!!',NULL,NULL,'대기','1734487303147.jpg'),
(32,'product','jh@naver.com','2024-12-18 16:00:59','히노끼 또 비슷하게 내주세요','히노키 향 너ㅇ어어어무 좋아요\r\n저랑 어울리는 사진 첨부합니다',NULL,NULL,'대기','1734505259174.jpg'),
(33,'information','jh@naver.com','2024-12-18 17:01:41','내가 주지훈이다','나는 석지원이다',NULL,NULL,'대기','1734508901185.jpg'),
(34,'refund','yeseul@gmail.com','2024-12-18 17:07:52','반품할래잉','한예슬 반품!!!',NULL,NULL,'답변완료',NULL),
(35,'information','yeseul@gmail.com','2024-12-20 14:20:27','한예슬인데요','저 제품 진짜 많이샀는데 다음부터 뭐 혜택좀 주세요',NULL,NULL,'답변완료',NULL),
(36,'order','mh@gamil.com','2024-12-23 17:57:23','안녕하세요','저는 김민하입니다 이제 앞으로 잘해볼게요',NULL,NULL,'대기','1734944243250.jpeg');
/*!40000 ALTER TABLE `one_to_one` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-23 17:59:44
