/*
  Warnings:

  - You are about to alter the column `createdAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updateAt` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `name` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `room` ADD COLUMN `name` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` DATETIME NOT NULL,
    MODIFY `updateAt` DATETIME NOT NULL;
