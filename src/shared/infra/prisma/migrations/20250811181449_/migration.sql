/*
  Warnings:

  - You are about to drop the column `date` on the `Income` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Income" DROP COLUMN "date",
ADD COLUMN     "incomeDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
