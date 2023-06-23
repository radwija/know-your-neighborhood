-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: localhost    Database: API_summative_023
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `message` longtext,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'naruto@email.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur ultrices sapien, a sollicitudin augue fringilla et. Nam rhoncus massa et magna aliquam euismod. Vivamus eu imperdiet sem. Sed tortor diam, mollis non ligula et, tempor convallis sapien. Cras sed metus nec risus varius placerat a sed enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper consectetur urna at vulputate. Duis hendrerit, libero placerat varius mattis, magna est pretium nunc, vestibulum elementum lectus sem id magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n','Naruto Uzumaki','0812345678'),(2,'sasuke@email.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur ultrices sapien, a sollicitudin augue fringilla et. Nam rhoncus massa et magna aliquam euismod. Vivamus eu imperdiet sem. Sed tortor diam, mollis non ligula et, tempor convallis sapien. Cras sed metus nec risus varius placerat a sed enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper consectetur urna at vulputate. Duis hendrerit, libero placerat varius mattis, magna est pretium nunc, vestibulum elementum lectus sem id magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n','Sasuke Uchiha','0812345678'),(3,'spongebob@email.com','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur ultrices sapien, a sollicitudin augue fringilla et. Nam rhoncus massa et magna aliquam euismod. Vivamus eu imperdiet sem. Sed tortor diam, mollis non ligula et, tempor convallis sapien. Cras sed metus nec risus varius placerat a sed enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper consectetur urna at vulputate. Duis hendrerit, libero placerat varius mattis, magna est pretium nunc, vestibulum elementum lectus sem id magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Spongebob Squarepants','0812345678'),(4,'patrick@email.com','Hello, world!','Patrick Star','0812345678');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn82wpcqrb21yddap4s3ttwnxj` (`user_id`),
  CONSTRAINT `FKn82wpcqrb21yddap4s3ttwnxj` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (2,'Jakarta','Indonesia','0812345678','Pande Store 2',2),(3,'Konoha','Japan','0812345678','Naruto Store 1',4),(5,'Bikini Bottom','Unknown Country','0812345678','Krusty Crab',5);
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` bit(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jakarta','Indonesia','admin@email.com',_binary '\0','Admin Admin','$2a$10$b5TsdJZ851U5mjgVSNMFxusucAR0/o4N95bfZ7GeMhqAFPJkt5fLm','0812345678','local',NULL,'ROLE_ADMIN','admin'),(2,'Jakarta','Indonesia','panderadwija@gmail.com',_binary '\0','Pande Radwija',NULL,'0812345678','facebook','3409589049352118','ROLE_USER','pande'),(4,NULL,NULL,'naruto@email.com',_binary '\0','Naruto Uzumaki','$2a$10$wwD2euei5s9V9IQP1peGvOseC0V4liZgTJR7jlHQH774fMgqRyQoG',NULL,'local',NULL,'ROLE_USER','naruto'),(5,NULL,NULL,'crabs@email.com',_binary '\0','Eugene Crabs','$2a$10$SETcgV5go3YhdubHS8Mi3e/r22lmYdKyk1usXk39/Xkk.aUi6QAeq',NULL,'local',NULL,'ROLE_USER','crabs'),(6,NULL,NULL,'sasuke@email.com',_binary '\0','Sasuke Uchiha','$2a$10$2pMBzSNCMmcder0eEptWkuZprqBdDbShWyY.aZXW9XIdeWYDW23d.',NULL,'local',NULL,'ROLE_USER','sasuke');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-07  1:28:25
