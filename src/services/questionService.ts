import * as questionRepo from "../repositories/questionRepository";
import { IQuestionData } from "../types/questionTypes";

export async function createQuestion(question: IQuestionData) {
  await questionRepo.createQuestion({ ...question });
}

export async function findQuestions() {
  const result = await questionRepo.findQuestions();
  return result;
}

export async function findQandA(questionId: number) {
  const result = await questionRepo.findAnswer(questionId);
  return result;
}
