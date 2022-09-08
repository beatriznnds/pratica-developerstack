import { prisma } from "../config/database";
import { IAnswerRepoData } from "../types/answerTypes";

export async function createAnswer(answer: IAnswerRepoData) {
  return await prisma.answers.create({ data: answer });
}
