-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Janvier 2023 à 14:52
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `eko`
--
CREATE DATABASE IF NOT EXISTS `eko` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `eko`;

-- --------------------------------------------------------

--
-- Structure de la table `action`
--

CREATE TABLE `action` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `analytics`
--

CREATE TABLE `analytics` (
  `id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `product_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL DEFAULT 'icons-user.jpg',
  `activity` text NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `business_email` varchar(100) NOT NULL,
  `business_phone` varchar(100) NOT NULL,
  `business_password` varchar(100) NOT NULL,
  `business_adress` varchar(100) NOT NULL,
  `business_name` varchar(100) NOT NULL,
  `business_banking_informations` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `condition`
--

CREATE TABLE `condition` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `desc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `envy_list`
--

CREATE TABLE `envy_list` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `label_name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `labels`
--

INSERT INTO `labels` (`id`, `label_name`, `link_name`, `img`) VALUES
(1, 'Le meilleur des produits', 'le-meilleur-des-produits', ''),
(2, 'Les nouveautés', 'les-nouveautes', ''),
(3, 'Les offres', 'les-offres', ''),
(4, 'Mode et beauté', 'mode-et-beaute', ''),
(5, 'Informatique', 'informatique', ''),
(6, 'Maison et bricolage', 'maison-et-bricolage', ''),
(7, 'Electroménager', 'electromenager', ''),
(8, 'Livres et multimédia', 'livres-et-multimedia', ''),
(9, 'Enfants', 'enfants', ''),
(10, 'Sport', 'sport', ''),
(11, 'Auto-moto', 'auto-moto', ''),
(12, 'Fournitures de bureau', 'fournitures-de-bureau', ''),
(13, 'Jardin et animalerie', 'jardin-et-animalerie', ''),
(14, 'Abonnement Eko-save', 'abonnement-eko-save', ''),
(15, 'Produits recommandés pour vous', 'produits-recommandes-pour-vous', '');

-- --------------------------------------------------------

--
-- Structure de la table `parainnage`
--

CREATE TABLE `parainnage` (
  `id` int(11) NOT NULL,
  `parain_id` int(11) NOT NULL,
  `parainated_id` int(11) NOT NULL,
  `link_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` float NOT NULL,
  `seller_name` varchar(100) NOT NULL,
  `eko_score` float NOT NULL,
  `desc` text,
  `label_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `product_label`
--

CREATE TABLE `product_label` (
  `product_id` int(11) NOT NULL,
  `labels_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL DEFAULT 'icons-user.jpg',
  `nickname` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `banking_informations` varchar(200) DEFAULT NULL,
  `acceptance_of_the_gtcu` tinyint(1) NOT NULL DEFAULT '0',
  `stay_connect` tinyint(1) NOT NULL DEFAULT '0',
  `newsletter` tinyint(1) NOT NULL DEFAULT '0',
  `eko_experience` float NOT NULL,
  `badges` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `seller` tinyint(1) NOT NULL DEFAULT '0',
  `eko_save` tinyint(1) NOT NULL DEFAULT '0',
  `envy_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `analytics`
--
ALTER TABLE `analytics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`,`action_id`,`user_id`);

--
-- Index pour la table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Index pour la table `condition`
--
ALTER TABLE `condition`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `envy_list`
--
ALTER TABLE `envy_list`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`product_id`);

--
-- Index pour la table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `parainnage`
--
ALTER TABLE `parainnage`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `parain_id` (`parain_id`),
  ADD UNIQUE KEY `parainated_id` (`parainated_id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `labbel_name` (`label_name`);

--
-- Index pour la table `product_label`
--
ALTER TABLE `product_label`
  ADD PRIMARY KEY (`product_id`,`labels_id`),
  ADD UNIQUE KEY `product_id` (`product_id`,`labels_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `envy_id` (`envy_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `action`
--
ALTER TABLE `action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `analytics`
--
ALTER TABLE `analytics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `condition`
--
ALTER TABLE `condition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `parainnage`
--
ALTER TABLE `parainnage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
