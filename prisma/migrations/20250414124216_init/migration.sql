/*
  Warnings:

  - You are about to drop the column `appointmentAt` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `address` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointmentDate` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appointmentTime` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicalHistory` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousTreatment` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptoms` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsAppNumber` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN "expires_at" INTEGER;
ALTER TABLE "Account" ADD COLUMN "refresh_token" TEXT;
ALTER TABLE "Account" ADD COLUMN "scope" TEXT;
ALTER TABLE "Account" ADD COLUMN "session_state" TEXT;
ALTER TABLE "Account" ADD COLUMN "token_type" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN "emailVerified" DATETIME;

-- CreateTable
CREATE TABLE "Authenticator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "symptoms" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "previousTreatment" TEXT NOT NULL,
    "medicalHistory" TEXT NOT NULL,
    "whatsAppNumber" TEXT NOT NULL,
    "appointmentDate" DATETIME NOT NULL,
    "appointmentTime" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("createdAt", "email", "id", "notes", "patientName", "updatedAt", "userId") SELECT "createdAt", "email", "id", "notes", "patientName", "updatedAt", "userId" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
