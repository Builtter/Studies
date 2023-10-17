-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: universidade_u
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno` (
  `idaluno` int NOT NULL AUTO_INCREMENT,
  `sexo` char(1) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `nome` varchar(25) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `ativo_sn` int DEFAULT '1',
  PRIMARY KEY (`idaluno`),
  UNIQUE KEY `uc_aluno_cpf` (`cpf`),
  UNIQUE KEY `uc_aluno_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
INSERT INTO `aluno` VALUES (1,'M','jose@teste.com.br','José','222.222.222-22','1985-06-01',1),(2,'F','maria@teste.com.br','Maria','111.111.111-11','1979-12-10',1),(3,'F','rosa@teste.com.br','Rosa','333.333.333-33','1990-12-22',1),(4,'M','joao@teste.com.br','João','444.444.444-44','1970-08-05',1),(5,'M','pedro@teste.com.br','Pedro','555.555.555-55','1967-07-02',1),(6,'F','bianca@teste.com.br','Bianca','666.666.666-66','1995-11-22',1),(7,'M','jorge@teste.com.br','Jorge','777.777.777-77','1989-01-06',1),(8,'F','mariana@teste.com.br','Mariana','888.888.888-88','1980-01-30',1),(9,'M','antonio@teste.com.br','Antônio','999.999.999-99','1991-12-03',1),(10,'F','Flavia.flavia@gmial.com','Flavia','702.978.888-88','1987-12-09',0),(11,'M','Ripa@gmail.com','João','222.252.658-11','1995-08-25',1);
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluno_curso`
--

DROP TABLE IF EXISTS `aluno_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno_curso` (
  `fk_idaluno` int NOT NULL,
  `fk_idcurso` int NOT NULL,
  `data_inscricao_curso` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fk_idaluno`,`fk_idcurso`,`data_inscricao_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno_curso`
--

LOCK TABLES `aluno_curso` WRITE;
/*!40000 ALTER TABLE `aluno_curso` DISABLE KEYS */;
INSERT INTO `aluno_curso` VALUES (1,2,'2019-01-07 12:00:00'),(2,3,'2019-01-12 17:30:00'),(3,1,'2019-01-09 09:45:00'),(4,4,'2019-02-01 13:20:00'),(6,1,'2021-08-24 19:30:47'),(9,4,'2021-03-06 00:00:00'),(10,1,'2021-03-06 00:00:00'),(11,3,'2021-08-24 19:30:20');
/*!40000 ALTER TABLE `aluno_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boleto`
--

DROP TABLE IF EXISTS `boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boleto` (
  `idboleto` int NOT NULL AUTO_INCREMENT,
  `fk_idcontrato` int DEFAULT NULL,
  `data_vencimento` date NOT NULL,
  `valor` float(8,2) NOT NULL,
  `numero_parcela` int NOT NULL,
  PRIMARY KEY (`idboleto`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boleto`
--

LOCK TABLES `boleto` WRITE;
/*!40000 ALTER TABLE `boleto` DISABLE KEYS */;
INSERT INTO `boleto` VALUES (1,1,'2019-02-07',125.00,1),(2,1,'2019-03-07',125.00,2),(3,1,'2019-04-07',125.00,3),(4,1,'2019-05-07',125.00,4),(5,1,'2019-06-07',125.00,5),(6,1,'2019-07-07',125.00,6),(7,1,'2019-08-07',125.00,7),(8,1,'2019-09-07',125.00,8),(9,1,'2019-10-07',125.00,9),(10,1,'2019-11-07',125.00,10),(11,1,'2019-12-07',125.00,11),(12,1,'2020-01-07',125.00,12),(13,2,'2019-02-12',108.33,1),(14,2,'2019-03-12',108.33,2),(15,2,'2019-04-12',108.33,3),(16,2,'2019-05-12',108.33,4),(17,2,'2019-06-12',108.33,5),(18,2,'2019-07-12',108.33,6),(19,2,'2019-08-12',108.33,7),(20,2,'2019-09-12',108.33,8),(21,2,'2019-10-12',108.33,9),(22,2,'2019-11-12',108.33,10),(23,2,'2019-12-12',108.33,11),(24,2,'2020-01-12',108.33,12),(25,3,'2019-02-09',90.00,1),(26,3,'2019-03-09',90.00,2),(27,3,'2019-04-09',90.00,3),(28,3,'2019-05-09',90.00,4),(29,3,'2019-06-09',90.00,5),(30,3,'2019-07-09',90.00,6),(31,3,'2019-08-09',90.00,7),(32,3,'2019-09-09',90.00,8),(33,3,'2019-10-09',90.00,9),(34,3,'2019-11-09',90.00,10),(35,4,'2019-03-01',200.00,1),(36,4,'2019-04-01',200.00,2),(37,4,'2019-05-01',200.00,3),(38,4,'2019-06-01',200.00,4),(39,4,'2019-07-01',200.00,5),(40,4,'2019-08-01',200.00,6),(41,4,'2019-09-01',200.00,7),(42,4,'2019-10-01',200.00,8),(43,4,'2019-11-01',200.00,9),(44,4,'2019-12-01',200.00,10);
/*!40000 ALTER TABLE `boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendario`
--

DROP TABLE IF EXISTS `calendario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendario` (
  `idcalendario` int NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `dia` int NOT NULL,
  `mes` int NOT NULL,
  `ano` int NOT NULL,
  `feriado` enum('S','N') DEFAULT NULL,
  `nome_feriado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idcalendario`)
) ENGINE=InnoDB AUTO_INCREMENT=366 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario`
--

LOCK TABLES `calendario` WRITE;
/*!40000 ALTER TABLE `calendario` DISABLE KEYS */;
INSERT INTO `calendario` VALUES (1,'2021-01-01',1,1,2021,'S','Confraternização universal'),(2,'2021-01-02',2,1,2021,'N',NULL),(3,'2021-01-03',3,1,2021,'N',NULL),(4,'2021-01-04',4,1,2021,'N',NULL),(5,'2021-01-05',5,1,2021,'N',NULL),(6,'2021-01-06',6,1,2021,'N',NULL),(7,'2021-01-07',7,1,2021,'N',NULL),(8,'2021-01-08',8,1,2021,'N',NULL),(9,'2021-01-09',9,1,2021,'N',NULL),(10,'2021-01-10',10,1,2021,'N',NULL),(11,'2021-01-11',11,1,2021,'N',NULL),(12,'2021-01-12',12,1,2021,'N',NULL),(13,'2021-01-13',13,1,2021,'N',NULL),(14,'2021-01-14',14,1,2021,'N',NULL),(15,'2021-01-15',15,1,2021,'N',NULL),(16,'2021-01-16',16,1,2021,'N',NULL),(17,'2021-01-17',17,1,2021,'N',NULL),(18,'2021-01-18',18,1,2021,'N',NULL),(19,'2021-01-19',19,1,2021,'N',NULL),(20,'2021-01-20',20,1,2021,'N',NULL),(21,'2021-01-21',21,1,2021,'N',NULL),(22,'2021-01-22',22,1,2021,'N',NULL),(23,'2021-01-23',23,1,2021,'N',NULL),(24,'2021-01-24',24,1,2021,'N',NULL),(25,'2021-01-25',25,1,2021,'N',NULL),(26,'2021-01-26',26,1,2021,'N',NULL),(27,'2021-01-27',27,1,2021,'N',NULL),(28,'2021-01-28',28,1,2021,'N',NULL),(29,'2021-01-29',29,1,2021,'N',NULL),(30,'2021-01-30',30,1,2021,'N',NULL),(31,'2021-01-31',31,1,2021,'N',NULL),(32,'2021-02-01',1,2,2021,'N',NULL),(33,'2021-02-02',2,2,2021,'N',NULL),(34,'2021-02-03',3,2,2021,'N',NULL),(35,'2021-02-04',4,2,2021,'N',NULL),(36,'2021-02-05',5,2,2021,'N',NULL),(37,'2021-02-06',6,2,2021,'N',NULL),(38,'2021-02-07',7,2,2021,'N',NULL),(39,'2021-02-08',8,2,2021,'N',NULL),(40,'2021-02-09',9,2,2021,'N',NULL),(41,'2021-02-10',10,2,2021,'N',NULL),(42,'2021-02-11',11,2,2021,'N',NULL),(43,'2021-02-12',12,2,2021,'N',NULL),(44,'2021-02-13',13,2,2021,'N',NULL),(45,'2021-02-14',14,2,2021,'N',NULL),(46,'2021-02-15',15,2,2021,'N',NULL),(47,'2021-02-16',16,2,2021,'N',NULL),(48,'2021-02-17',17,2,2021,'N',NULL),(49,'2021-02-18',18,2,2021,'N',NULL),(50,'2021-02-19',19,2,2021,'N',NULL),(51,'2021-02-20',20,2,2021,'N',NULL),(52,'2021-02-21',21,2,2021,'N',NULL),(53,'2021-02-22',22,2,2021,'N',NULL),(54,'2021-02-23',23,2,2021,'N',NULL),(55,'2021-02-24',24,2,2021,'N',NULL),(56,'2021-02-25',25,2,2021,'N',NULL),(57,'2021-02-26',26,2,2021,'N',NULL),(58,'2021-02-27',27,2,2021,'N',NULL),(59,'2021-02-28',28,2,2021,'N',NULL),(60,'2021-03-01',1,3,2021,'N',NULL),(61,'2021-03-02',2,3,2021,'N',NULL),(62,'2021-03-03',3,3,2021,'N',NULL),(63,'2021-03-04',4,3,2021,'N',NULL),(64,'2021-03-05',5,3,2021,'N',NULL),(65,'2021-03-06',6,3,2021,'N',NULL),(66,'2021-03-07',7,3,2021,'N',NULL),(67,'2021-03-08',8,3,2021,'N',NULL),(68,'2021-03-09',9,3,2021,'N',NULL),(69,'2021-03-10',10,3,2021,'N',NULL),(70,'2021-03-11',11,3,2021,'N',NULL),(71,'2021-03-12',12,3,2021,'N',NULL),(72,'2021-03-13',13,3,2021,'N',NULL),(73,'2021-03-14',14,3,2021,'N',NULL),(74,'2021-03-15',15,3,2021,'N',NULL),(75,'2021-03-16',16,3,2021,'N',NULL),(76,'2021-03-17',17,3,2021,'N',NULL),(77,'2021-03-18',18,3,2021,'N',NULL),(78,'2021-03-19',19,3,2021,'N',NULL),(79,'2021-03-20',20,3,2021,'N',NULL),(80,'2021-03-21',21,3,2021,'N',NULL),(81,'2021-03-22',22,3,2021,'N',NULL),(82,'2021-03-23',23,3,2021,'N',NULL),(83,'2021-03-24',24,3,2021,'N',NULL),(84,'2021-03-25',25,3,2021,'N',NULL),(85,'2021-03-26',26,3,2021,'N',NULL),(86,'2021-03-27',27,3,2021,'N',NULL),(87,'2021-03-28',28,3,2021,'N',NULL),(88,'2021-03-29',29,3,2021,'N',NULL),(89,'2021-03-30',30,3,2021,'N',NULL),(90,'2021-03-31',31,3,2021,'N',NULL),(91,'2021-04-01',1,4,2021,'N',NULL),(92,'2021-04-02',2,4,2021,'N',NULL),(93,'2021-04-03',3,4,2021,'N',NULL),(94,'2021-04-04',4,4,2021,'N',NULL),(95,'2021-04-05',5,4,2021,'N',NULL),(96,'2021-04-06',6,4,2021,'N',NULL),(97,'2021-04-07',7,4,2021,'N',NULL),(98,'2021-04-08',8,4,2021,'N',NULL),(99,'2021-04-09',9,4,2021,'N',NULL),(100,'2021-04-10',10,4,2021,'N',NULL),(101,'2021-04-11',11,4,2021,'N',NULL),(102,'2021-04-12',12,4,2021,'N',NULL),(103,'2021-04-13',13,4,2021,'N',NULL),(104,'2021-04-14',14,4,2021,'N',NULL),(105,'2021-04-15',15,4,2021,'N',NULL),(106,'2021-04-16',16,4,2021,'N',NULL),(107,'2021-04-17',17,4,2021,'N',NULL),(108,'2021-04-18',18,4,2021,'N',NULL),(109,'2021-04-19',19,4,2021,'N',NULL),(110,'2021-04-20',20,4,2021,'N',NULL),(111,'2021-04-21',21,4,2021,'N',NULL),(112,'2021-04-22',22,4,2021,'N',NULL),(113,'2021-04-23',23,4,2021,'N',NULL),(114,'2021-04-24',24,4,2021,'N',NULL),(115,'2021-04-25',25,4,2021,'N',NULL),(116,'2021-04-26',26,4,2021,'N',NULL),(117,'2021-04-27',27,4,2021,'N',NULL),(118,'2021-04-28',28,4,2021,'N',NULL),(119,'2021-04-29',29,4,2021,'N',NULL),(120,'2021-04-30',30,4,2021,'N',NULL),(121,'2021-05-01',1,5,2021,'S','Dia do Trabalho'),(122,'2021-05-02',2,5,2021,'N',NULL),(123,'2021-05-03',3,5,2021,'N',NULL),(124,'2021-05-04',4,5,2021,'N',NULL),(125,'2021-05-05',5,5,2021,'N',NULL),(126,'2021-05-06',6,5,2021,'N',NULL),(127,'2021-05-07',7,5,2021,'N',NULL),(128,'2021-05-08',8,5,2021,'N',NULL),(129,'2021-05-09',9,5,2021,'N',NULL),(130,'2021-05-10',10,5,2021,'N',NULL),(131,'2021-05-11',11,5,2021,'N',NULL),(132,'2021-05-12',12,5,2021,'N',NULL),(133,'2021-05-13',13,5,2021,'N',NULL),(134,'2021-05-14',14,5,2021,'N',NULL),(135,'2021-05-15',15,5,2021,'N',NULL),(136,'2021-05-16',16,5,2021,'N',NULL),(137,'2021-05-17',17,5,2021,'N',NULL),(138,'2021-05-18',18,5,2021,'N',NULL),(139,'2021-05-19',19,5,2021,'N',NULL),(140,'2021-05-20',20,5,2021,'N',NULL),(141,'2021-05-21',21,5,2021,'N',NULL),(142,'2021-05-22',22,5,2021,'N',NULL),(143,'2021-05-23',23,5,2021,'N',NULL),(144,'2021-05-24',24,5,2021,'N',NULL),(145,'2021-05-25',25,5,2021,'N',NULL),(146,'2021-05-26',26,5,2021,'N',NULL),(147,'2021-05-27',27,5,2021,'N',NULL),(148,'2021-05-28',28,5,2021,'N',NULL),(149,'2021-05-29',29,5,2021,'N',NULL),(150,'2021-05-30',30,5,2021,'N',NULL),(151,'2021-05-31',31,5,2021,'N',NULL),(152,'2021-06-01',1,6,2021,'N',NULL),(153,'2021-06-02',2,6,2021,'N',NULL),(154,'2021-06-03',3,6,2021,'N',NULL),(155,'2021-06-04',4,6,2021,'N',NULL),(156,'2021-06-05',5,6,2021,'N',NULL),(157,'2021-06-06',6,6,2021,'N',NULL),(158,'2021-06-07',7,6,2021,'N',NULL),(159,'2021-06-08',8,6,2021,'N',NULL),(160,'2021-06-09',9,6,2021,'N',NULL),(161,'2021-06-10',10,6,2021,'N',NULL),(162,'2021-06-11',11,6,2021,'N',NULL),(163,'2021-06-12',12,6,2021,'N',NULL),(164,'2021-06-13',13,6,2021,'N',NULL),(165,'2021-06-14',14,6,2021,'N',NULL),(166,'2021-06-15',15,6,2021,'N',NULL),(167,'2021-06-16',16,6,2021,'N',NULL),(168,'2021-06-17',17,6,2021,'N',NULL),(169,'2021-06-18',18,6,2021,'N',NULL),(170,'2021-06-19',19,6,2021,'N',NULL),(171,'2021-06-20',20,6,2021,'N',NULL),(172,'2021-06-21',21,6,2021,'N',NULL),(173,'2021-06-22',22,6,2021,'N',NULL),(174,'2021-06-23',23,6,2021,'N',NULL),(175,'2021-06-24',24,6,2021,'N',NULL),(176,'2021-06-25',25,6,2021,'N',NULL),(177,'2021-06-26',26,6,2021,'N',NULL),(178,'2021-06-27',27,6,2021,'N',NULL),(179,'2021-06-28',28,6,2021,'N',NULL),(180,'2021-06-29',29,6,2021,'N',NULL),(181,'2021-06-30',30,6,2021,'N',NULL),(182,'2021-07-01',1,7,2021,'N',NULL),(183,'2021-07-02',2,7,2021,'N',NULL),(184,'2021-07-03',3,7,2021,'N',NULL),(185,'2021-07-04',4,7,2021,'N',NULL),(186,'2021-07-05',5,7,2021,'N',NULL),(187,'2021-07-06',6,7,2021,'N',NULL),(188,'2021-07-07',7,7,2021,'N',NULL),(189,'2021-07-08',8,7,2021,'N',NULL),(190,'2021-07-09',9,7,2021,'N',NULL),(191,'2021-07-10',10,7,2021,'N',NULL),(192,'2021-07-11',11,7,2021,'N',NULL),(193,'2021-07-12',12,7,2021,'N',NULL),(194,'2021-07-13',13,7,2021,'N',NULL),(195,'2021-07-14',14,7,2021,'N',NULL),(196,'2021-07-15',15,7,2021,'N',NULL),(197,'2021-07-16',16,7,2021,'N',NULL),(198,'2021-07-17',17,7,2021,'N',NULL),(199,'2021-07-18',18,7,2021,'N',NULL),(200,'2021-07-19',19,7,2021,'N',NULL),(201,'2021-07-20',20,7,2021,'N',NULL),(202,'2021-07-21',21,7,2021,'N',NULL),(203,'2021-07-22',22,7,2021,'N',NULL),(204,'2021-07-23',23,7,2021,'N',NULL),(205,'2021-07-24',24,7,2021,'N',NULL),(206,'2021-07-25',25,7,2021,'N',NULL),(207,'2021-07-26',26,7,2021,'N',NULL),(208,'2021-07-27',27,7,2021,'N',NULL),(209,'2021-07-28',28,7,2021,'N',NULL),(210,'2021-07-29',29,7,2021,'N',NULL),(211,'2021-07-30',30,7,2021,'N',NULL),(212,'2021-07-31',31,7,2021,'N',NULL),(213,'2021-08-01',1,8,2021,'N',NULL),(214,'2021-08-02',2,8,2021,'N',NULL),(215,'2021-08-03',3,8,2021,'N',NULL),(216,'2021-08-04',4,8,2021,'N',NULL),(217,'2021-08-05',5,8,2021,'N',NULL),(218,'2021-08-06',6,8,2021,'N',NULL),(219,'2021-08-07',7,8,2021,'N',NULL),(220,'2021-08-08',8,8,2021,'N',NULL),(221,'2021-08-09',9,8,2021,'N',NULL),(222,'2021-08-10',10,8,2021,'N',NULL),(223,'2021-08-11',11,8,2021,'N',NULL),(224,'2021-08-12',12,8,2021,'N',NULL),(225,'2021-08-13',13,8,2021,'N',NULL),(226,'2021-08-14',14,8,2021,'N',NULL),(227,'2021-08-15',15,8,2021,'N',NULL),(228,'2021-08-16',16,8,2021,'N',NULL),(229,'2021-08-17',17,8,2021,'N',NULL),(230,'2021-08-18',18,8,2021,'N',NULL),(231,'2021-08-19',19,8,2021,'N',NULL),(232,'2021-08-20',20,8,2021,'N',NULL),(233,'2021-08-21',21,8,2021,'N',NULL),(234,'2021-08-22',22,8,2021,'N',NULL),(235,'2021-08-23',23,8,2021,'N',NULL),(236,'2021-08-24',24,8,2021,'N',NULL),(237,'2021-08-25',25,8,2021,'N',NULL),(238,'2021-08-26',26,8,2021,'N',NULL),(239,'2021-08-27',27,8,2021,'N',NULL),(240,'2021-08-28',28,8,2021,'N',NULL),(241,'2021-08-29',29,8,2021,'N',NULL),(242,'2021-08-30',30,8,2021,'N',NULL),(243,'2021-08-31',31,8,2021,'N',NULL),(244,'2021-09-01',1,9,2021,'N',NULL),(245,'2021-09-02',2,9,2021,'N',NULL),(246,'2021-09-03',3,9,2021,'N',NULL),(247,'2021-09-04',4,9,2021,'N',NULL),(248,'2021-09-05',5,9,2021,'N',NULL),(249,'2021-09-06',6,9,2021,'N',NULL),(250,'2021-09-07',7,9,2021,'S','Independência'),(251,'2021-09-08',8,9,2021,'N',NULL),(252,'2021-09-09',9,9,2021,'N',NULL),(253,'2021-09-10',10,9,2021,'N',NULL),(254,'2021-09-11',11,9,2021,'N',NULL),(255,'2021-09-12',12,9,2021,'N',NULL),(256,'2021-09-13',13,9,2021,'N',NULL),(257,'2021-09-14',14,9,2021,'N',NULL),(258,'2021-09-15',15,9,2021,'N',NULL),(259,'2021-09-16',16,9,2021,'N',NULL),(260,'2021-09-17',17,9,2021,'N',NULL),(261,'2021-09-18',18,9,2021,'N',NULL),(262,'2021-09-19',19,9,2021,'N',NULL),(263,'2021-09-20',20,9,2021,'N',NULL),(264,'2021-09-21',21,9,2021,'N',NULL),(265,'2021-09-22',22,9,2021,'N',NULL),(266,'2021-09-23',23,9,2021,'N',NULL),(267,'2021-09-24',24,9,2021,'N',NULL),(268,'2021-09-25',25,9,2021,'N',NULL),(269,'2021-09-26',26,9,2021,'N',NULL),(270,'2021-09-27',27,9,2021,'N',NULL),(271,'2021-09-28',28,9,2021,'N',NULL),(272,'2021-09-29',29,9,2021,'N',NULL),(273,'2021-09-30',30,9,2021,'N',NULL),(274,'2021-10-01',1,10,2021,'N',NULL),(275,'2021-10-02',2,10,2021,'N',NULL),(276,'2021-10-03',3,10,2021,'N',NULL),(277,'2021-10-04',4,10,2021,'N',NULL),(278,'2021-10-05',5,10,2021,'N',NULL),(279,'2021-10-06',6,10,2021,'N',NULL),(280,'2021-10-07',7,10,2021,'N',NULL),(281,'2021-10-08',8,10,2021,'N',NULL),(282,'2021-10-09',9,10,2021,'N',NULL),(283,'2021-10-10',10,10,2021,'N',NULL),(284,'2021-10-11',11,10,2021,'N',NULL),(285,'2021-10-12',12,10,2021,'N',NULL),(286,'2021-10-13',13,10,2021,'N',NULL),(287,'2021-10-14',14,10,2021,'N',NULL),(288,'2021-10-15',15,10,2021,'N',NULL),(289,'2021-10-16',16,10,2021,'N',NULL),(290,'2021-10-17',17,10,2021,'N',NULL),(291,'2021-10-18',18,10,2021,'N',NULL),(292,'2021-10-19',19,10,2021,'N',NULL),(293,'2021-10-20',20,10,2021,'N',NULL),(294,'2021-10-21',21,10,2021,'N',NULL),(295,'2021-10-22',22,10,2021,'N',NULL),(296,'2021-10-23',23,10,2021,'N',NULL),(297,'2021-10-24',24,10,2021,'N',NULL),(298,'2021-10-25',25,10,2021,'N',NULL),(299,'2021-10-26',26,10,2021,'N',NULL),(300,'2021-10-27',27,10,2021,'N',NULL),(301,'2021-10-28',28,10,2021,'N',NULL),(302,'2021-10-29',29,10,2021,'N',NULL),(303,'2021-10-30',30,10,2021,'N',NULL),(304,'2021-10-31',31,10,2021,'N',NULL),(305,'2021-11-01',1,11,2021,'N',NULL),(306,'2021-11-02',2,11,2021,'N',NULL),(307,'2021-11-03',3,11,2021,'N',NULL),(308,'2021-11-04',4,11,2021,'N',NULL),(309,'2021-11-05',5,11,2021,'N',NULL),(310,'2021-11-06',6,11,2021,'N',NULL),(311,'2021-11-07',7,11,2021,'N',NULL),(312,'2021-11-08',8,11,2021,'N',NULL),(313,'2021-11-09',9,11,2021,'N',NULL),(314,'2021-11-10',10,11,2021,'N',NULL),(315,'2021-11-11',11,11,2021,'N',NULL),(316,'2021-11-12',12,11,2021,'N',NULL),(317,'2021-11-13',13,11,2021,'N',NULL),(318,'2021-11-14',14,11,2021,'N',NULL),(319,'2021-11-15',15,11,2021,'N',NULL),(320,'2021-11-16',16,11,2021,'N',NULL),(321,'2021-11-17',17,11,2021,'N',NULL),(322,'2021-11-18',18,11,2021,'N',NULL),(323,'2021-11-19',19,11,2021,'N',NULL),(324,'2021-11-20',20,11,2021,'N',NULL),(325,'2021-11-21',21,11,2021,'N',NULL),(326,'2021-11-22',22,11,2021,'N',NULL),(327,'2021-11-23',23,11,2021,'N',NULL),(328,'2021-11-24',24,11,2021,'N',NULL),(329,'2021-11-25',25,11,2021,'N',NULL),(330,'2021-11-26',26,11,2021,'N',NULL),(331,'2021-11-27',27,11,2021,'N',NULL),(332,'2021-11-28',28,11,2021,'N',NULL),(333,'2021-11-29',29,11,2021,'N',NULL),(334,'2021-11-30',30,11,2021,'N',NULL),(335,'2021-12-01',1,12,2021,'N',NULL),(336,'2021-12-02',2,12,2021,'N',NULL),(337,'2021-12-03',3,12,2021,'N',NULL),(338,'2021-12-04',4,12,2021,'N',NULL),(339,'2021-12-05',5,12,2021,'N',NULL),(340,'2021-12-06',6,12,2021,'N',NULL),(341,'2021-12-07',7,12,2021,'N',NULL),(342,'2021-12-08',8,12,2021,'N',NULL),(343,'2021-12-09',9,12,2021,'N',NULL),(344,'2021-12-10',10,12,2021,'N',NULL),(345,'2021-12-11',11,12,2021,'N',NULL),(346,'2021-12-12',12,12,2021,'N',NULL),(347,'2021-12-13',13,12,2021,'N',NULL),(348,'2021-12-14',14,12,2021,'N',NULL),(349,'2021-12-15',15,12,2021,'N',NULL),(350,'2021-12-16',16,12,2021,'N',NULL),(351,'2021-12-17',17,12,2021,'N',NULL),(352,'2021-12-18',18,12,2021,'N',NULL),(353,'2021-12-19',19,12,2021,'N',NULL),(354,'2021-12-20',20,12,2021,'N',NULL),(355,'2021-12-21',21,12,2021,'N',NULL),(356,'2021-12-22',22,12,2021,'N',NULL),(357,'2021-12-23',23,12,2021,'N',NULL),(358,'2021-12-24',24,12,2021,'N',NULL),(359,'2021-12-25',25,12,2021,'S','Natal'),(360,'2021-12-26',26,12,2021,'N',NULL),(361,'2021-12-27',27,12,2021,'N',NULL),(362,'2021-12-28',28,12,2021,'N',NULL),(363,'2021-12-29',29,12,2021,'N',NULL),(364,'2021-12-30',30,12,2021,'N',NULL),(365,'2021-12-31',31,12,2021,'N',NULL);
/*!40000 ALTER TABLE `calendario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrato`
--

DROP TABLE IF EXISTS `contrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contrato` (
  `idcontrato` int NOT NULL AUTO_INCREMENT,
  `fk_idaluno` int NOT NULL,
  `fk_idcurso` int NOT NULL,
  `fk_data_inscricao_curso` datetime NOT NULL,
  `valor_total_curso` float(8,2) NOT NULL,
  `desconto` float(4,1) NOT NULL DEFAULT '0.0',
  `numero_parcelas` int NOT NULL,
  `processado` enum('n','s') DEFAULT 'n',
  PRIMARY KEY (`idcontrato`),
  KEY `fk_contrato_aluno_curso` (`fk_idaluno`,`fk_idcurso`,`fk_data_inscricao_curso`),
  CONSTRAINT `fk_contrato_aluno_curso` FOREIGN KEY (`fk_idaluno`, `fk_idcurso`, `fk_data_inscricao_curso`) REFERENCES `aluno_curso` (`fk_idaluno`, `fk_idcurso`, `data_inscricao_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrato`
--

LOCK TABLES `contrato` WRITE;
/*!40000 ALTER TABLE `contrato` DISABLE KEYS */;
INSERT INTO `contrato` VALUES (1,1,2,'2019-01-07 12:00:00',1500.00,0.0,12,'s'),(2,2,3,'2019-01-12 17:30:00',1300.00,0.0,12,'s'),(3,3,1,'2019-01-09 09:45:00',900.00,0.0,10,'s'),(4,4,4,'2019-02-01 13:20:00',2000.00,0.0,10,'s');
/*!40000 ALTER TABLE `contrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idcurso` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idcurso`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'NodeJS e MongoDB'),(2,'Web Completo 2019'),(3,'ES6, TypeScript e Angular'),(4,'React Native'),(5,'Bancos de Dados Relacionais');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplina`
--

DROP TABLE IF EXISTS `disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disciplina` (
  `iddisciplina` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `carga_horaria` int DEFAULT NULL,
  `fk_idprofessor` int DEFAULT NULL,
  `fk_idcurso` int DEFAULT NULL,
  PRIMARY KEY (`iddisciplina`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplina`
--

LOCK TABLES `disciplina` WRITE;
/*!40000 ALTER TABLE `disciplina` DISABLE KEYS */;
INSERT INTO `disciplina` VALUES (1,'HTML',4,5,2),(2,'CSS',3,NULL,2),(3,'Bootstrap',5,5,2),(4,'JavaScript',10,NULL,2),(5,'PHP',15,NULL,2),(6,'NodeJS',8,3,1),(7,'MongoDB',6,3,1),(8,'Express',4,3,NULL),(9,'ES6',7,3,3),(10,'TypeScript',4,3,3),(11,'Orientada a Objetos',5,NULL,3),(12,'Angular',20,4,3),(13,'ES6',7,3,NULL),(14,'Ract Native',7,8,4),(15,'Redux',4,8,4),(16,'MySQL',7,NULL,5);
/*!40000 ALTER TABLE `disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `idendereco` int NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `complemento` varchar(20) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` char(2) DEFAULT NULL,
  `fk_idaluno` int DEFAULT NULL,
  PRIMARY KEY (`idendereco`),
  UNIQUE KEY `uc_endereco_fkidaluno` (`fk_idaluno`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'Rua 9','nº 9',NULL,'Bairro 9','São Paulo','SP',9),(2,'Rua 5','nº 5',NULL,'Bairro 5','Belo Horizonte','MG',5),(3,'Rua 3','nº 3',NULL,'Bairro 3','Natal','RN',3),(4,'Rua 8','nº 8',NULL,'Bairro 8','Rio de Janeiro','RJ',8),(5,'Rua 4','nº 4',NULL,'Bairro 4','Fortaleza','CE',4),(6,'Rua 1','nº 1',NULL,'Bairro 1','Manaus','AM',1),(7,'Rua 7','nº 7',NULL,'Bairro 7','Goiânia','GO',7),(8,'Rua 2','nº 2',NULL,'Bairro 2','Florianópolis','SC',2),(9,'Rua 6','nº 6',NULL,'Bairro 6','Vitória','ES',6);
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `idmatricula` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `funcao` varchar(50) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `fk_idmatricula_supervisor` int DEFAULT NULL,
  PRIMARY KEY (`idmatricula`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES (1,'Pedro','Gerente de TI','55 98585-5542',NULL);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gasto`
--

DROP TABLE IF EXISTS `gasto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gasto` (
  `idgasto` int NOT NULL AUTO_INCREMENT,
  `ano` int NOT NULL,
  `tipo` enum('previsto','realizado') NOT NULL,
  `jan` float(10,2) DEFAULT NULL,
  `fev` float(10,2) DEFAULT NULL,
  `mar` float(10,2) DEFAULT NULL,
  `abr` float(10,2) DEFAULT NULL,
  `mai` float(10,2) DEFAULT NULL,
  `jun` float(10,2) DEFAULT NULL,
  `jul` float(10,2) DEFAULT NULL,
  `ago` float(10,2) DEFAULT NULL,
  `set` float(10,2) DEFAULT NULL,
  `out` float(10,2) DEFAULT NULL,
  `nov` float(10,2) DEFAULT NULL,
  `dez` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`idgasto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gasto`
--

LOCK TABLES `gasto` WRITE;
/*!40000 ALTER TABLE `gasto` DISABLE KEYS */;
INSERT INTO `gasto` VALUES (1,2019,'previsto',18000.00,17000.00,19000.00,20000.00,17000.00,18000.00,18500.00,18500.00,1800.00,17500.00,18000.00,17000.00),(2,2019,'realizado',18353.20,17555.55,19435.73,22753.12,16198.12,17451.88,18975.40,19163.84,18132.56,17667.91,17936.33,17125.88);
/*!40000 ALTER TABLE `gasto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `IDLOG` int NOT NULL AUTO_INCREMENT,
  `LOG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IDLOG`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` VALUES (1,'0 *** 1 - 1 - 2 - 2019-01-07 12:00:00 - 1500.00 - 0.0 - 12 - n'),(2,'0 *** 2 - 2 - 3 - 2019-01-12 17:30:00 - 1300.00 - 0.0 - 12 - n'),(3,'0 *** 3 - 3 - 1 - 2019-01-09 09:45:00 - 900.00 - 0.0 - 10 - n'),(4,'0 *** 4 - 4 - 4 - 2019-02-01 13:20:00 - 2000.00 - 0.0 - 10 - n');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professor`
--

DROP TABLE IF EXISTS `professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professor` (
  `idprofessor` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idprofessor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professor`
--

LOCK TABLES `professor` WRITE;
/*!40000 ALTER TABLE `professor` DISABLE KEYS */;
INSERT INTO `professor` VALUES (1,'Laura','laura@teste.com.br'),(2,'Miguel','miguel@teste.com.br'),(3,'Sofia','sofia@teste.com.br'),(4,'Patrícia','patricia@teste.com.br'),(5,'Arthur','arthur@teste.com.br'),(6,'Breno','breno@teste.com.br'),(7,'Raquel','raquel@teste.com.br'),(8,'Hugo','hugo@teste.com.br'),(9,'Alex','alex@teste.com.br');
/*!40000 ALTER TABLE `professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto`
--

DROP TABLE IF EXISTS `projeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto` (
  `idcodigo` int NOT NULL AUTO_INCREMENT,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`idcodigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto`
--

LOCK TABLES `projeto` WRITE;
/*!40000 ALTER TABLE `projeto` DISABLE KEYS */;
/*!40000 ALTER TABLE `projeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projeto_funcionario`
--

DROP TABLE IF EXISTS `projeto_funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projeto_funcionario` (
  `fk_idcodigo` int NOT NULL,
  `fk_idmatricula` int NOT NULL,
  `horas_estimadas` int NOT NULL,
  `horas_realizadas` int DEFAULT NULL,
  PRIMARY KEY (`fk_idcodigo`,`fk_idmatricula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projeto_funcionario`
--

LOCK TABLES `projeto_funcionario` WRITE;
/*!40000 ALTER TABLE `projeto_funcionario` DISABLE KEYS */;
/*!40000 ALTER TABLE `projeto_funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefone`
--

DROP TABLE IF EXISTS `telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefone` (
  `idtelefone` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(20) NOT NULL,
  `fk_idaluno` int NOT NULL,
  `tipo` enum('res','com','cel') NOT NULL,
  PRIMARY KEY (`idtelefone`),
  KEY `fk_aluno_telefone` (`fk_idaluno`),
  CONSTRAINT `fk_aluno_telefone` FOREIGN KEY (`fk_idaluno`) REFERENCES `aluno` (`idaluno`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefone`
--

LOCK TABLES `telefone` WRITE;
/*!40000 ALTER TABLE `telefone` DISABLE KEYS */;
INSERT INTO `telefone` VALUES (1,'11 92222-2222',9,'cel'),(2,'11 3333-2222',9,'com'),(3,'31 5555-2222',5,'res'),(4,'21 4444-1111',8,'res'),(5,'21 91111-2222',9,'cel'),(6,'62 98888-7777',7,'cel'),(7,'62 4444-4444',7,'com'),(8,'62 6666-9999',7,'res'),(9,'27 95555-0000',6,'cel');
/*!40000 ALTER TABLE `telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'universidade_u'
--

--
-- Dumping routines for database 'universidade_u'
--
/*!50003 DROP FUNCTION IF EXISTS `func_data_ptbr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `func_data_ptbr`(p_data datetime) RETURNS char(10) CHARSET utf8mb4
    DETERMINISTIC
    COMMENT 'Retorna datas no formato dd/mm/yy'
begin
	return date_format(p_data, '%d/%m/%y');
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_boleto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_boleto`()
    COMMENT 'Procedure para processamento dos contratos e geração dos registros de boletos'
begin
	declare v_fim_loop int default 0;
    declare v_log text;
	declare v_idcontrato, v_fk_idaluno, v_fk_idcurso int;
    declare v_fk_data_inscricao_curso datetime;
    declare v_valor_total_curso float(8,2);
	declare v_desconto float(4,1);
    declare v_numero_parcelas int;
    declare v_processado char(1);
	
    declare v_boleto_loop_parcelas int;
    declare v_boleto_valor_parcela float(8,2);
	declare v_boleto_data_vencimento datetime;
    
	declare c_contratos cursor for(	
		select 
			idcontrato, fk_idaluno, fk_idcurso, fk_data_inscricao_curso,
			valor_total_curso, desconto, numero_parcelas, processado
		from 
			contrato
		where
			processado = 'n'
	);
    
    /*manipulador (hangler) de continuidade do laço*/
    declare continue handler for not found set v_fim_loop = 1;
    
    open c_contratos;/*abrir o curso*/
    repeat 
		fetch c_contratos into v_idcontrato, v_fk_idaluno, v_fk_idcurso, v_fk_data_inscricao_curso,
		v_valor_total_curso, v_desconto, v_numero_parcelas, v_processado;
		
	if v_fim_loop = 0 then
        set v_log = concat(
			v_fim_loop, ' *** ', v_idcontrato, ' - ', v_fk_idaluno, ' - ',
            v_fk_idcurso, ' - ', v_fk_data_inscricao_curso, ' - ', 
            v_valor_total_curso, ' - ', v_desconto, ' - ', v_numero_parcelas,' - ',
            v_processado
		);
        
        insert into log(log)value(v_log);
    
		/* estrutura de repetição */
        set v_boleto_loop_parcelas = 1;
        while v_boleto_loop_parcelas <= v_numero_parcelas do
        
			set v_boleto_valor_parcela = v_valor_total_curso / v_numero_parcelas;
			set v_boleto_data_vencimento = date_add(v_fk_data_inscricao_curso, interval v_boleto_loop_parcelas month);
            
            
			insert into boleto(fk_idcontrato, data_vencimento, valor, numero_parcela)
            values(v_idcontrato, v_boleto_data_vencimento, v_boleto_valor_parcela, v_boleto_loop_parcelas);
	
			set v_boleto_loop_parcelas = v_boleto_loop_parcelas + 1;
        end while;
    
		update contrato set processado = 's' where idcontrato = v_idcontrato;
    end if;
    
	until v_fim_loop > 0 end repeat; /* (quando a condição for verdadeira o laço será interrompido) */
    
    close c_contratos; /*fechar o cursor*/
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_calendario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_calendario`(in p_data_inicio date, in p_data_fim date)
    COMMENT 'incrementando informações com while'
begin
	declare v_dia, v_mes int(2);
    declare v_ano int(4);
    declare v_feriado char(1);
    declare v_nome_feriado varchar(50);
	
	while p_data_inicio <= p_data_fim do /*'2021-01-01' <= '2021-12-31'*/
		
        set v_dia = extract(day from p_data_inicio);
        set v_mes = extract(month from p_data_inicio);
        set v_ano = extract(year from p_data_inicio);
        
        if v_dia = 1 and v_mes = 1 then
			set v_feriado = 's';
            set v_nome_feriado = 'Confraternização universal';
            
		elseif v_dia = 1 and v_mes = 5 then
			set v_feriado = 's';
            set v_nome_feriado = 'Dia do Trabalho';
            
		elseif v_dia = 7 and v_mes = 9 then
			set v_feriado = 's';
            set v_nome_feriado = 'Independência';
		
        elseif v_dia = 25 and v_mes = 12 then
			set v_feriado = 's';
            set v_nome_feriado = 'Natal';
            
        else
			set v_feriado = 'n';
            set v_nome_feriado = null;
		end if;
    
		insert into calendario(`data`, dia, mes, ano, feriado, nome_feriado)
        values(p_data_inicio, v_dia, v_mes, v_ano, v_feriado, v_nome_feriado);
    
    set p_data_inicio = date_add(p_data_inicio, interval 1 day);
    end while;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_case` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_case`()
    COMMENT 'Brincando com case'
begin

declare opcao int default 5.9;

/*Estrutura alternativa*/

case 
	when opcao > 1 and opcao <= 5 then select 'Opção 1';
    when opcao > 5 and opcao <= 10 then select 'Opção 2';
	else
		select 'Nenhuma das escolhidas';
    end case;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_case_alternativa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_case_alternativa`()
    COMMENT 'Brincando com case'
begin

declare opcao int default 20;

/*Estrutura alternativa*/

case 
	when opcao = 1 then select 'Opção 1';
    when opcao = 2 then select 'Opção 2';
	when opcao = 3 then select 'Opção 3';
	when opcao = 4 then select 'Opção 4';
	else
		select 'Nenhuma das escolhidas';
    end case;

end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_date` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_date`()
    COMMENT 'Verificação de tarda'
begin

	declare data_teste date;
    
    set data_teste = curdate() -1;
    
    case
		when data_teste = curdate() then select curdate() as data_atual, data_teste, 'Presente';
        when data_teste < curdate() then select curdate() as data_atual, data_teste, 'Passado';
        when data_teste > curdate() then select curdate() as data_atual, data_teste, 'Futuro';
        else
			select 'Nenhuma das anteriores';
	end case;
    end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_EXEMPLO_PARAMETRO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_EXEMPLO_PARAMETRO`(IN PARAM1 INT, 
										OUT PARAM2 VARCHAR(50), 
										INOUT PARAM3 FLOAT(3,1))
    COMMENT 'TESTANDO OS TIPOS DE PARAMETROS IN - OUT -INOUT'
BEGIN
		SELECT PARAM1, PARAM2, PARAM3;
		
        SET PARAM2 = 'PARÂMETRO 2 FOI MODIFICADO';
        SET PARAM3 = '35.9';
	  /*PARAM1 - IN - SERÁ EXIBIDO(SEU VALOR) POIS É UM PARÂMETRO DE ENTRADA 
        PARAM2 - OUT - SERÁ EXIBIDO NULL, POIS O VALOR NÃO É PASSADO, É PASSADO SOMENTE SUA REFERÊNCIA
        PARAM3 - INOUT - SERÁ EXIBIDO 70.5, POIS É UM PARÂMETRO DE ENTRADA E VAI PERMITIR O VALOR DA VARIÁVEL DE SESSÃO
        				POIS TAMBÉM É UMA REFERÊNCIA*/

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_if_else` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_if_else`()
    COMMENT 'Testando estrutura if else'
begin
 	
     declare idade int default 12;
     declare sexo char(1) default 'F';
     
     if idade >= 18 and sexo = 'M' then
 		select 'Homem maior de idade';
 	end if;
     
     if idade < 18 and sexo = 'M' then
 		select 'Homem maior de idade';
 	end if;
     
     if idade >= 18 and sexo = 'F' then
 		select 'Mulher maior de idade';
 	end if;
     
     if idade < 18 and sexo = 'F' then
 		select 'Mulher menor de idade';
 	end if;
    
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_if_else2` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_if_else2`()
    COMMENT 'Testando estrutura if else'
begin
 	
if (Select nome from professor where email = 'breno@teste.com.br') = 'Breno' then
	select 'Este email corresponde ao professor Breno';
else
	select 'Nâo corresponde ao professor desejado';
end if;
	
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_LOOP` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_LOOP`()
    COMMENT 'LOOPANDO COM LOOP'
BEGIN

	declare z int default 1;
    declare resultado varchar (20);

	loop_tabuada: loop
    
		set resultado = concat('2 x ', z, ' = ', (2*z));
        insert into log(log) value (resultado);
        
        set z = z + 1;
        
        if z > 10 then
			leave loop_tabuada;
		end if;
    
    end loop loop_tabuada;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_MEDIA_PONDERADA` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_MEDIA_PONDERADA`(IN NOME VARCHAR(100), 
									  IN N1 FLOAT(3,1), -- NOTAS DE CADA ATIVIDADE AVALIATIVA
                                      IN N2 FLOAT(3,1),
                                      IN N3 FLOAT(3,1),
                                      IN N4 FLOAT(3,1),
                                      IN P1 FLOAT(3,1), -- PESOS DE CADA PROVA
                                      IN P2 FLOAT(3,1),
                                      IN P3 FLOAT(3,1),
                                      IN P4 FLOAT(3,1)
                                      )
    COMMENT 'EFETUA CÁLCULO DE MÉDIA PONDERADA: ((N1*P1)+(N2*P2)+(N3*P3)+(N4*P4)) /10'
BEGIN

	/*NOEM DO ALUNO + MÁDIA PONDERADA*/
    SELECT NOME, 
		   ROUND((((N1*P1)+(N2*P2)+(N3*P3)+(N4*P4))/10),1) AS MEDIA_PONDERADA;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_OI` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_OI`()
BEGIN
 		
 	SELECT 'SURPRISE MOTHER FUCKER, HELLO CASADA' AS MSG;
 
 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_repeat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_repeat`()
    COMMENT 'Brincando com REPEAT'
begin
	
    declare z int default 1;
    declare resultado varchar (20);
   
   repeat
    
        set resultado = concat('2 x ', z, ' = ', (2*z));
        insert into log(log)value (resultado);
        set z = z + 1;
    
    until z > 20 end repeat;
	
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_RESUMO` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_RESUMO`(OUT TOTAL_PROFESSOR INT, 
							 OUT TOTLA_ALUNOS INT)
    COMMENT 'RESUMO DE TOTAL DE PROFESSORES'
BEGIN

	/*TOTAL DE PROFESSORES*/
    SELECT COUNT(*) INTO TOTAL_PROFESSOR FROM PROFESSOR;
    
    /*TOTAL DE ALUNOS*/
    SELECT COUNT(*) INTO TOTLA_ALUNOS FROM ALUNO;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `PROC_VARIAVEIS_ESCOPO_LOCAL` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `PROC_VARIAVEIS_ESCOPO_LOCAL`()
BEGIN

	DECLARE TOTAL_PROFESSORES INT;
    
    SELECT COUNT(*) INTO TOTAL_PROFESSORES FROM PROFESSOR;
    SELECT TOTAL_PROFESSORES AS TOTAL_P;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `proc_while` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `proc_while`()
    COMMENT 'EXEMPLO DE USO DO WHILE'
BEGIN
	
    DECLARE CONTADOR INT DEFAULT 1;
    
    /*OPERADORES DE COMPARAÇÃO, PODEM SER CONECTADOS POR OPERADORES LÓGICOS*/
    WHILE CONTADOR < 10 DO  
    
		INSERT INTO LOG(LOG)VALUES(CONTADOR);
	
    /*LÓGICA DE PARADA DO LOOP*/
		SET CONTADOR = CONTADOR + 1;
    
    END WHILE;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-10 16:08:36
