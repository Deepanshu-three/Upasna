/*
  Warnings:

  - You are about to drop the column `notes` on the `Appointment` table. All the data in the column will be lost.

*/
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("address", "age", "appointmentDate", "appointmentTime", "createdAt", "email", "gender", "id", "medicalHistory", "patientName", "previousTreatment", "symptoms", "updatedAt", "userId", "whatsAppNumber") SELECT "address", "age", "appointmentDate", "appointmentTime", "createdAt", "email", "gender", "id", "medicalHistory", "patientName", "previousTreatment", "symptoms", "updatedAt", "userId", "whatsAppNumber" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
