/*
  Warnings:

  - You are about to alter the column `createdAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `messages` ADD COLUMN `createdAt` DATETIME NULL,
    ADD COLUMN `updateAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updateAt` DATETIME NOT NULL;
