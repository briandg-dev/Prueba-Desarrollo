-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT,
    "apellido" TEXT,
    "mail" TEXT,
    "numeroDocumento" DECIMAL(65,30) NOT NULL,
    "tipoDocumento" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
