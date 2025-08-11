/*
  Warnings:

  - A unique constraint covering the columns `[categoryDate]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryDate` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" ADD COLUMN     "categoryDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryDate_key" ON "public"."Category"("categoryDate");
