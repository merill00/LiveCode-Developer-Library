-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 29, 2018 at 12:22 AM
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
-- Table structure for table `boxes`
--

CREATE TABLE `boxes` (
  `ID` int(8) NOT NULL,
  `Category` text NOT NULL,
  `Tags` text NOT NULL,
  `Title` text NOT NULL,
  `Description` text NOT NULL,
  `button_title` text NOT NULL,
  `mainpage` text NOT NULL,
  `detail` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `boxes`
--

INSERT INTO `boxes` (`ID`, `Category`, `Tags`, `Title`, `Description`, `button_title`, `mainpage`, `detail`) VALUES
(1, 'services', '', 'Library', 'Library places and times in Oban and Lochgilphead.\r\n', 'Libraries', 'services', 'library'),
(3, 'services', '', 'Transport', 'Public transport to/from Kilmelford\r\n									', 'Transport', 'services', 'transport'),
(2, 'services', '', 'Banking', 'Banks, addresses and times in Oban and Lochgilphead.', 'Bank', 'services', 'bank'),
(4, 'services', '', 'Blood Transfusion Service', 'Scottish National Blood Transfusion Service\r\n\r\n[Website](https://www.scotblood.co.uk/*) or \r\n[fb](givebloodforscotland)\r\n\r\nTel. for inquiries 0345 30 17 2 70\r\n\r\n \r\nThey will be in Lochgilphead in September 2018.\r\n\r\nCommunity Centre, Manse Brae.\r\n05 Sep 2018 14:30 - 15:45  17:15 - 19:30', '', '', ''),
(5, 'services', '', 'Bin collection', 'Information on bin collection can be found on the\n[Argyll and Bute Council website](\'https://www.argyll-bute.gov.uk/planning-and-environment/bin-collection\' TARGET=\'_blank\')', '', '', ''),
(6, 'community', '', 'Newsletter', 'Kilninford News newsletter.', 'Newsletter', 'community', 'newsletter'),
(7, 'community', '', 'Community Council', 'Info, minutes, meeting reports, etc.', 'Community Council', 'community', 'council'),
(8, 'community', '', 'Kilmelford Village Hall', 'Facilities, committee, meeting minutes, etc.', 'Hall', 'community', 'hall'),
(9, 'community', '', 'Churches', 'Churches schedules, activities, etc.', 'Churches', 'community', 'churches');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boxes`
--
ALTER TABLE `boxes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boxes`
--
ALTER TABLE `boxes`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
