-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 01 Février 2023 à 10:42
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

--
-- Contenu de la table `action`
--

INSERT INTO `action` (`id`, `name`, `link_name`, `img`) VALUES
(1, 'Achat', 'achat', NULL),
(2, 'Vente', 'vente', NULL),
(3, 'Recherche', 'recherche', NULL),
(4, 'Modification du profil', 'modification-du-profil', NULL),
(5, 'Modification de l\'entreprise', 'modification-de-l\'entreprise', NULL),
(6, 'Nouveau vendeur', 'nouveau-vendeur', NULL),
(7, 'Remove vendeur', 'remove-vendeur', NULL),
(8, 'Ban', 'ban', NULL),
(9, 'Abonnement Eko-save', 'abonnement-eko-save', NULL),
(10, 'Amélioration du badge', 'amelioration-du-badge', NULL);

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

--
-- Contenu de la table `business`
--

INSERT INTO `business` (`id`, `name`, `img`, `activity`, `creation_date`, `business_email`, `business_phone`, `business_password`, `business_adress`, `business_name`, `business_banking_informations`, `user_id`) VALUES
(1, 'Eko', 'icons-user.jpg', 'E-commerce', '2023-02-01 09:44:12', 'contacteko.pro@gmail.com', '0676967586', 'GwendalChefProjetEko1#', '11 Rue de Marseille Lyon', 'Eko', '', 1);

-- --------------------------------------------------------

--
-- Structure de la table `condition`
--

CREATE TABLE `condition` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `desc` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `condition`
--

INSERT INTO `condition` (`id`, `name`, `link_name`, `desc`) VALUES
(1, 'utilisation', 'utilisation', 'En acceptant les conditions générales d\'utilisation, l\'utilisateur accepte que : eko récupère et conserve les ses coordonnées bancaire et leurs utilisations. Il accepte aussi que eko utilise ses données comme bon luii semble. L\'utilisateur accepte que eko puisse voler ses biens matériels grâce à leur adresse'),
(2, 'vente', 'vente', 'En acceptant les conditions générales de ventes, l\'utilisateur accepte de ne pas être remboursé dans le cas où sont achat n\'est jamais arrivé à destination. Il accepte de donner l\'entièreté de ses gains fait sur eko en faisant un don à l\'entreprise eko.'),
(3, 'rétractation', 'retractation', 'En acceptant les générales de rétractations l\'utilisateur accepte de ne pas pouvoir se rétracter lors des achats.'),
(4, 'Mention l\'égale', 'mention-l\'egale', 'En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site https:/eko.com/ l’identité des différents intervenant dans le cadre de sa réalisation et de son suivi. L\'utilisateur accepte de fournir tout ses biens moraux et matériels et virtuels à Eko.');

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
-- Structure de la table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `faq`
--

INSERT INTO `faq` (`id`, `name`, `desc`) VALUES
(1, 'Qu\'est ce que Eko ?', 'Eko est un site de vente de biens eko-responable.'),
(2, 'Depuis quand Eko existe-t\'il ?', 'Eko existe depuis le 6 août 2021'),
(3, 'Quel est l\'obejectif de Eko ?', 'Nous cherchons à révolutionner l’e-commerce en prenant\r\ncompte des problématiques sociétales actuelles à savoir la\r\npollution de la planète et la défavorisation du commerce local.');

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
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `news`
--

INSERT INTO `news` (`id`, `name`, `link_name`, `desc`, `img`) VALUES
(1, 'Nouveau nombre d\'utilisateur', 'nouveau-nombre-d\'utilisateur ', 'Merci à vous, grâce à vous nous venons de comptabilisé nombre premier visiteur sur notre site.', NULL),
(2, 'Arnaque', 'arnaque', 'Nous n\'arnaquons pas nos utilisateurs, bienvenue sur Eko', NULL),
(3, 'On a choisi l\'e-commerce', 'on-a-choisi-l\'e-commerce', 'Pourquoi, feur', NULL);

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

--
-- Contenu de la table `parainnage`
--

INSERT INTO `parainnage` (`id`, `parain_id`, `parainated_id`, `link_name`) VALUES
(1, 1, 2, 'ewen-Gwendal');

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
  `name` varchar(100) DEFAULT NULL,
  `img` varchar(1000) NOT NULL DEFAULT 'icons-user.jpg',
  `nickname` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `apartment` varchar(100) DEFAULT NULL,
  `code_postal` varchar(10) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `banking_informations` varchar(200) DEFAULT NULL,
  `acceptance_of_the_gtcu` tinyint(1) NOT NULL DEFAULT '0',
  `stay_connect` tinyint(1) NOT NULL DEFAULT '0',
  `newsletter` tinyint(1) NOT NULL DEFAULT '0',
  `eko_experience` float DEFAULT NULL,
  `badges` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `seller` tinyint(1) NOT NULL DEFAULT '0',
  `eko_save` tinyint(1) NOT NULL DEFAULT '0',
  `envy_id` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `name`, `img`, `nickname`, `mail`, `phone_number`, `adress`, `apartment`, `code_postal`, `city`, `password`, `banking_informations`, `acceptance_of_the_gtcu`, `stay_connect`, `newsletter`, `eko_experience`, `badges`, `admin`, `seller`, `eko_save`, `envy_id`) VALUES
(1, 'ewen', 'icons-user.jpg', 'Keltulsan', 'ebeaufils@gaming.tech', '0676967586', '11 rue d\'Hanoï', '102', '69100', 'Lyon', 'ewen', NULL, 1, 1, 1, NULL, NULL, 1, 1, 1, NULL),
(2, 'Gwendal', 'icons-user.jpg', 'Gwenitora', 'gacquart-reylans@gaming.tech', NULL, NULL, NULL, NULL, NULL, '', NULL, 0, 0, 0, NULL, NULL, 1, 1, 1, 0);

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
-- Index pour la table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
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
  ADD KEY `envy_id` (`envy_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `action`
--
ALTER TABLE `action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `analytics`
--
ALTER TABLE `analytics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `condition`
--
ALTER TABLE `condition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `parainnage`
--
ALTER TABLE `parainnage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
