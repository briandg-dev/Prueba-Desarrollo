/*
  Warnings:

  - Made the column `mail` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Users" ADD COLUMN     "codigoEmpresa" INTEGER,
ADD COLUMN     "codigoSector" INTEGER,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "rolUser" INTEGER,
ALTER COLUMN "mail" SET NOT NULL;
