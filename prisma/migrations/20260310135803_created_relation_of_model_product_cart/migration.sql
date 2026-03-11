-- CreateTable
CREATE TABLE "ProductCart" (
    "id" TEXT NOT NULL,
    "id_cart" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_size" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ProductCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductCart" ADD CONSTRAINT "ProductCart_id_cart_fkey" FOREIGN KEY ("id_cart") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCart" ADD CONSTRAINT "ProductCart_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCart" ADD CONSTRAINT "ProductCart_id_size_fkey" FOREIGN KEY ("id_size") REFERENCES "ProductSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
