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
-- Table structure for table `objects_spec`
--

CREATE TABLE `objects_spec` (
  `ID` int(11) NOT NULL,
  `TableName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Type` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Summary` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SortOrder` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Spec` varchar(4096) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `objects_spec`
--

INSERT INTO `objects_spec` (`ID`, `TableName`, `Type`, `Summary`, `SortOrder`, `Spec`) VALUES
(1, 'samples', 'Custom', 'Title', '', 'Category,Input,20\r\nTitle,Input,40\r\nCaption,Input,90\r\nYear,Input,20\r\nBreed,Input,40\r\nCost,Input,20\r\nMedium,Input,40\r\nDescription,Area,60,20\r\nPhotoName,Input,50\r\nOrientation,Input,20\r\n'),
(3, 'articles', 'Custom', 'Category,Headline', '', 'Headline,Input,120\r\nAuthor,Input,80\r\nDate,Input,20\r\nExpires,Input,20\r\nSummary,Input,100\r\nContent,Area,100,20\r\nCategory,Input,20\r\nTags,Input,20\r\n'),
(4, 'businesses', 'Custom', 'Category,Name', '', 'Name,Input,120\nCategory,Input,32\nPhone,Input,20\nAddress,Area,64,4\nEmail,Input,100\nWebsite,Input,100\nFacebook,input,100\nPhoto,Input,100\nLocation,Input,20\nDescription,Area,100,20\n'),
(5, 'TPLS', 'LCMS', 'Title', '', 'Title,Input,64\r\nCount,Input,32\r\nContent,Area,100,20\r\n'),
(6, 'events', 'Custom', 'Category,Headline', 'Category asc,Date desc, Headline asc', 'Headline,Input,120\r\nCategory,Input,32\r\nDate,Input,20\r\nContact,Input,100\r\nBody,Area,64,4'),
(8, 'boxes', 'Custom', 'Category,Title', '', 'Title,Input,120\nCategory,Input,20\nTags,Input,40\nDescription,Area,100,10\nbutton_title,Input,32\nmainpage,Input,32\ndetail,Input,32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objects_spec`
--
ALTER TABLE `objects_spec`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
