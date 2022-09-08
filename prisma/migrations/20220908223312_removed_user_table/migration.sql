/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_answeredBy_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_askedBy_fkey";

-- AlterTable
ALTER TABLE "answers" ALTER COLUMN "answeredBy" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "questions" ALTER COLUMN "askedBy" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "users";
