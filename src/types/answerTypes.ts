import { Answers } from "@prisma/client";

export type IAnswerData = Omit<Answers, "id" | "questionId">;
export type IAnswerRepoData = Omit<Answers, "id">;
