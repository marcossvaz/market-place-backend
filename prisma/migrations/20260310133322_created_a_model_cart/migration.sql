-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "id_client" TEXT,
    "id_visitors" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);
