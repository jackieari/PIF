CREATE TABLE `Profile` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `bio` VARCHAR(191),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  UNIQUE INDEX `Profile_email_key`(`email`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(191),
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `firstName` VARCHAR(191),
  `lastName` VARCHAR(191),
  `username` VARCHAR(191),
  `walletAddress` VARCHAR(191) NOT NULL,
  UNIQUE INDEX `User_email_key`(`email`),
  UNIQUE INDEX `User_username_key`(`username`),
  UNIQUE INDEX `User_walletAddress_key`(`walletAddress`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `Campaign` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `category` VARCHAR(191) NOT NULL,
  `shortDescription` VARCHAR(191) NOT NULL,
  `fullDescription` VARCHAR(191) NOT NULL,
  `fundingGoal` INTEGER NOT NULL,
  `currentFunding` INTEGER NOT NULL DEFAULT 0,
  `support` VARCHAR(191) NOT NULL,
  `votes` VARCHAR(191) NOT NULL,
  `deadline` DATETIME NOT NULL,
  `location` VARCHAR(191) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);
