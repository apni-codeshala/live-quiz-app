import { IoManager } from "./IoManager";
import { Quiz } from "./Quiz";

export class QuizManager {
  private quizzes: Quiz[];
  constructor() {
    this.quizzes = [];
  }

  public start(roomId: string) {
    const io = IoManager.getIo();
    const quiz = this.quizzes.find((x) => x.rommId === roomId);
    quiz.start();
  }
}
