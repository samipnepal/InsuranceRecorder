-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2018 at 03:28 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insurance`
--

-- --------------------------------------------------------

--
-- Table structure for table `insurance`
--

CREATE TABLE `insurance` (
  `id` int(11) NOT NULL,
  `ownerName` varchar(100) NOT NULL,
  `vehicleNumber` varchar(100) NOT NULL,
  `mobileNumber` int(20) NOT NULL,
  `policyNumber` varchar(25) NOT NULL,
  `expiryDate` date NOT NULL,
  `rcImage` varchar(1000) NOT NULL,
  `policyImage` varchar(250) NOT NULL,
  `policyCompany` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insurance`
--

INSERT INTO `insurance` (`id`, `ownerName`, `vehicleNumber`, `mobileNumber`, `policyNumber`, `expiryDate`, `rcImage`, `policyImage`, `policyCompany`) VALUES
(5, 'Vijeesh', 'KA02HK4400', 1231231231, '985475651223', '2018-04-27', '', '', 'Life Insurance'),
(7, 'Vijeesh', 'KA02HK4400', 949596969, '9854756525255', '2018-04-21', 'rc_1523270918.PNG', '', 'Life Insurance'),
(8, 'Vijeesh', 'KA02HK4400', 1231231232, '98547565456', '2018-04-20', 'rc_1523279252.PNG', 'policy_1523279252.PNG', 'Life Insurance'),
(9, 'Vijeesh', 'KA02HK4400', 1231231231, '985475651111', '2018-04-26', 'rc_1523279426.PNG', 'policy_1523279427.PNG', 'Life Insurance'),
(10, 'Vijeesh', 'KA02HK4400', 1231231231, '98547565', '2018-04-30', 'rc_1523279727.PNG', 'policy_1523279727.PNG', 'Life Insurance');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `insurance`
--
ALTER TABLE `insurance`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `insurance`
--
ALTER TABLE `insurance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
