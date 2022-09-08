import { Request, Response } from "express";
import { IQuestionData } from "../types/questionTypes";
import { IAnswerRepoData } from "../types/answerTypes";
import * as questionServ from "../services/questionService";
import * as answerServ from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body;
  await questionServ.createQuestion(question);
  return res.status(201).send({ message: `Question created!` });
}

export async function createAnswer(req: Request, res: Response) {
  const answer: IAnswerRepoData = req.body;
  const id = Number(req.params.id);
  await answerServ.createAnswer(answer, id);
  return res.status(201).send({ message: `Answer created!` });
}

export async function get(req: Request, res: Response) {
  const result = await questionServ.findQuestions();
  return res.status(200).send({ questions: { result } });
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const result = await questionServ.findQandA(id);
  return res.status(200).send({ questions: { result } });
}
