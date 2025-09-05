/*
  Warnings:

  - You are about to drop the column `mail` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Users" DROP COLUMN "mail",
ADD COLUMN     "email" TEXT NOT NULL DEFAULT 'sin_email@default.com';
