-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 29, 2018 at 12:23 AM
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
-- Table structure for table `contact_emails`
--

CREATE TABLE `contact_emails` (
  `ID` int(11) NOT NULL,
  `user_email` text NOT NULL,
  `user_name` text NOT NULL,
  `initial_date` datetime NOT NULL,
  `status` text NOT NULL,
  `status_date` datetime NOT NULL,
  `content` text NOT NULL,
  `owner` text NOT NULL,
  `response_log` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_emails`
--

INSERT INTO `contact_emails` (`ID`, `user_email`, `user_name`, `initial_date`, `status`, `status_date`, `content`, `owner`, `response_log`) VALUES
(1, 'alex@tweedly.net', '', '2016-11-30 05:00:00', 'Closed', '0000-00-00 00:00:00', 'THis is just a test message', 'Alex', 'Nothing yet ...'),
(2, 'a@cee', '', '2016-12-01 05:03:59', 'Closed', '0000-00-00 00:00:00', 'Alex third', '', ''),
(3, 'fraser@graememassie.com', '', '2016-11-30 00:00:00', 'Closed', '0000-00-00 00:00:00', 'Request for info re. Hogmanay events/ceilidhs.', 'Alex', 'Answered him with the info provided by Astrid, including suggestion to check back on web site nearer the time.'),
(4, 'yvonne250@yahoo.co.uk', 'Yvonne Fletcher', '2016-12-03 12:57:12', 'Initial', '0000-00-00 00:00:00', 'Great new website.', '', ''),
(11, 'seileachan@aol.com', 'Philip Coyle', '2016-12-30 04:46:17', 'Initial', '0000-00-00 00:00:00', 'Hi,  great website!\nI\'m helping to run the Hogmanay Party this year and I noticed you\'ve put £8 instead of £5 at the door. I\'m sorry if I had given you duff info., can it be changed at this late stage? and could you put my name and contact tel. No. 01852  200202. \nCheers\nPhil', '', ''),
(12, 'kscaife@btinternet.com', 'Diane Scaife', '2017-01-19 13:08:14', 'Initial', '0000-00-00 00:00:00', 'Hi Alex\nPlease would you add a category on the Village Hall page to allow me to post the Hall AGM minutes.  At the present time I am unable to do this.\nMany Thanks, Diane', '', ''),
(13, 'kasiahendren@hotmail.com', '', '2017-01-25 04:00:55', 'Closed', '0000-00-00 00:00:00', 'Dear Sir/Madame, we have just moved in to Klmelfort and taken over The Shower of Herring. Would the be a hance of meeting before next printed magazine comes out? Kindest regards, Kat', '', 'Emailed Kat and will go and see her to discuss advert / article before deadline for Easter issue.\n\nastrid'),
(14, 'emmanuelcann122@gmail.com', 'hello', '2017-07-21 22:13:52', 'Initial', '0000-00-00 00:00:00', 'hello', '', ''),
(15, 'david.garner@argyll-bute.gov.uk', 'David Garner', '2017-08-15 09:39:01', 'Initial', '0000-00-00 00:00:00', 'Hello, looking to hire a smallish space for Rock band rehearsals, maybe once a month, please send a number that I can contact to discuss, many thanks, David', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_emails`
--
ALTER TABLE `contact_emails`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
