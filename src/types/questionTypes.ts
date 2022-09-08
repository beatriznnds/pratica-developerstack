import { Questions } from "@prisma/client";

export type IQuestionData = Omit<Questions, "id">;
