import { prisma } from "../config/database";
import { IQuestionData } from "../types/questionTypes";

export async function createQuestion(question: IQuestionData) {
  return await prisma.questions.create({ data: question });
}

export async function findQuestions() {
  return await prisma.questions.findMany();
}

export async function findAnswer(questionId: number) {
  return await prisma.questions.findFirst({
    where: { id: questionId },
    select: {
      id: true,
      question: true,
      askedBy: true,
      answers: { select: { answer: true, answeredBy: true } },
    },
  });
}
