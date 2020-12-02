-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 29, 2018 at 12:25 AM
-- Server version: 10.0.33-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ua886128_tweedcouk`
--

-- --------------------------------------------------------

--
-- Table structure for table `TagsCategories`
--

CREATE TABLE `TagsCategories` (
  `ID` int(11) NOT NULL,
  `TagOrCat` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `TagsCategories`
--

INSERT INTO `TagsCategories` (`ID`, `TagOrCat`, `Name`) VALUES
(2, 'Category', 'Banner'),
(3, 'Category', 'Profile Picture'),
(4, 'Category', 'Business'),
(5, 'Tag', 'Kilmelford'),
(6, 'Tag', 'Kilninver'),
(7, 'Tag', 'Arduaine');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TagsCategories`
--
ALTER TABLE `TagsCategories`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `TagsCategories`
--
ALTER TABLE `TagsCategories`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
