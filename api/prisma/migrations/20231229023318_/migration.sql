/*
  Warnings:

  - You are about to alter the column `createdAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `message` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `messages` ADD COLUMN `message` VARCHAR(3000) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updateAt` DATETIME NOT NULL;
