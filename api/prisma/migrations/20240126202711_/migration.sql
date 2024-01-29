/*
  Warnings:

  - You are about to drop the column `receivedById` on the `messages` table. All the data in the column will be lost.
  - You are about to alter the column `createdAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `Messages_receivedById_fkey`;

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `receivedById`;

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updateAt` DATETIME NOT NULL;
