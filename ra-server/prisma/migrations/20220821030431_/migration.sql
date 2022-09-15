-- CreateTable
CREATE TABLE "Supervisor" (
    "s_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Supervisor_pkey" PRIMARY KEY ("s_id")
);

-- CreateTable
CREATE TABLE "User" (
    "u_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("u_id")
);

-- CreateTable
CREATE TABLE "Client" (
    "c_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("c_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supervisor_email_key" ON "Supervisor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
