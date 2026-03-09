/*
  Warnings:

  - Added the required column `active` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_for` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_of` to the `ProductSize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity_stock` to the `ProductSize` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductSize" ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "main" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price_for" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "price_of" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity_stock" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3);
