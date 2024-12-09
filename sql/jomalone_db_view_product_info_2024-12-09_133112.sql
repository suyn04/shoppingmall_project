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
-- Temporary table structure for view `view_product_info`
--

DROP TABLE IF EXISTS `view_product_info`;
/*!50001 DROP VIEW IF EXISTS `view_product_info`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `view_product_info` AS SELECT
 1 AS `product_id`,
  1 AS `product_name_kor`,
  1 AS `product_name_eng`,
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
  1 AS `product_top`,
  1 AS `nt_name`,
  1 AS `nt_intro`,
  1 AS `nt_upSystem`,
  1 AS `product_heart`,
  1 AS `nh_name`,
  1 AS `nh_intro`,
  1 AS `nh_upSystem`,
  1 AS `product_base`,
  1 AS `nb_name`,
  1 AS `nb_intro`,
  1 AS `nb_upSystem`,
  1 AS `product_reg_date` */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `view_product_info_opt`
--

DROP TABLE IF EXISTS `view_product_info_opt`;
/*!50001 DROP VIEW IF EXISTS `view_product_info_opt`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
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
  1 AS `product_top`,
  1 AS `nt_name`,
  1 AS `nt_intro`,
  1 AS `nt_upSystem`,
  1 AS `product_heart`,
  1 AS `nh_name`,
  1 AS `nh_intro`,
  1 AS `nh_upSystem`,
  1 AS `product_base`,
  1 AS `nb_name`,
  1 AS `nb_intro`,
  1 AS `nb_upSystem`,
  1 AS `product_reg_date` */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_product_info`
--

/*!50001 DROP VIEW IF EXISTS `view_product_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`jomalone`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_product_info` AS select `product`.`product_id` AS `product_id`,`product`.`product_name_kor` AS `product_name_kor`,`product`.`product_name_eng` AS `product_name_eng`,`product`.`product_special` AS `product_special`,`product`.`product_category_id` AS `product_category_id`,`product_category`.`product_category_one` AS `product_category_one`,`product_category`.`product_category_two` AS `product_category_two`,`product_category`.`product_category_thr` AS `product_category_thr`,`product`.`product_scent` AS `product_scent`,`product`.`product_group_scent` AS `product_group_scent`,`product`.`product_status` AS `product_status`,`product`.`product_intro` AS `product_intro`,`product`.`product_ingredient` AS `product_ingredient`,`product`.`product_top` AS `product_top`,`nt`.`product_note_name` AS `nt_name`,`nt`.`product_note_intro` AS `nt_intro`,`nt`.`product_note_upSystem` AS `nt_upSystem`,`product`.`product_heart` AS `product_heart`,`nh`.`product_note_name` AS `nh_name`,`nh`.`product_note_intro` AS `nh_intro`,`nh`.`product_note_upSystem` AS `nh_upSystem`,`product`.`product_base` AS `product_base`,`nb`.`product_note_name` AS `nb_name`,`nb`.`product_note_intro` AS `nb_intro`,`nb`.`product_note_upSystem` AS `nb_upSystem`,`product`.`product_reg_date` AS `product_reg_date` from ((((`product` left join `product_category` on(`product`.`product_category_id` = `product_category`.`product_category_id`)) left join `product_note` `nt` on(`product`.`product_top` = `nt`.`product_note_id`)) left join `product_note` `nh` on(`product`.`product_heart` = `nh`.`product_note_id`)) left join `product_note` `nb` on(`product`.`product_base` = `nb`.`product_note_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

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
/*!50001 VIEW `view_product_info_opt` AS select `product_opt`.`product_opt_id` AS `product_opt_id`,`product`.`product_id` AS `product_id`,`product`.`product_name_kor` AS `product_name_kor`,`product`.`product_name_eng` AS `product_name_eng`,`product_opt`.`product_price` AS `product_price`,`product_opt`.`product_volume` AS `product_volume`,`product_opt`.`product_upSystem` AS `product_upSystem`,`product`.`product_special` AS `product_special`,`product`.`product_category_id` AS `product_category_id`,`product_category`.`product_category_one` AS `product_category_one`,`product_category`.`product_category_two` AS `product_category_two`,`product_category`.`product_category_thr` AS `product_category_thr`,`product`.`product_scent` AS `product_scent`,`product`.`product_group_scent` AS `product_group_scent`,`product`.`product_status` AS `product_status`,`product`.`product_intro` AS `product_intro`,`product`.`product_ingredient` AS `product_ingredient`,`product`.`product_top` AS `product_top`,`nt`.`product_note_name` AS `nt_name`,`nt`.`product_note_intro` AS `nt_intro`,`nt`.`product_note_upSystem` AS `nt_upSystem`,`product`.`product_heart` AS `product_heart`,`nh`.`product_note_name` AS `nh_name`,`nh`.`product_note_intro` AS `nh_intro`,`nh`.`product_note_upSystem` AS `nh_upSystem`,`product`.`product_base` AS `product_base`,`nb`.`product_note_name` AS `nb_name`,`nb`.`product_note_intro` AS `nb_intro`,`nb`.`product_note_upSystem` AS `nb_upSystem`,`product`.`product_reg_date` AS `product_reg_date` from (((((`product_opt` left join `product` on(`product_opt`.`product_id` = `product`.`product_id`)) left join `product_category` on(`product`.`product_category_id` = `product_category`.`product_category_id`)) left join `product_note` `nt` on(`product`.`product_top` = `nt`.`product_note_id`)) left join `product_note` `nh` on(`product`.`product_heart` = `nh`.`product_note_id`)) left join `product_note` `nb` on(`product`.`product_base` = `nb`.`product_note_id`)) */;
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
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-12-09 13:31:30
