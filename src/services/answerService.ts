import * as answerRepo from "../repositories/answerRepository";
import { IAnswerRepoData } from "../types/answerTypes";

export async function createAnswer(
  answer: IAnswerRepoData,
  questionId: number
) {
  const newAnswer = { ...answer, questionId };
  await answerRepo.createAnswer(newAnswer);
}
