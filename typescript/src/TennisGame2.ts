import { TennisGame } from "./TennisGame";

export class TennisGame2 implements TennisGame {
  player1Score: number = 0;
  player2Score: number = 0;

  constructor(player1Name: string, player2Name: string) {}

  getScore(): string {
    const isSameScore = this.player1Score === this.player2Score;
    if (isSameScore) {
      return this.sameScoreButNotWinCase();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
      return this.advantageOrWinnerCase();
    }
    
    return this.getScoreBoard(this.player1Score, this.player2Score);
  }

  private advantageOrWinnerCase() {
    const minusResult = this.player1Score - this.player2Score;
    if (minusResult === 1 && this.player2Score >= 3) {
      return "Advantage player1";
    }
    else if (minusResult === -1 && this.player1Score >= 3) {
      return "Advantage player2";
    }
    else if (minusResult >= 2 && this.player1Score >= 3) {
      return "Win for player1";
    }
    else if (minusResult <= -2 && this.player2Score >= 3) {
      return "Win for player2";
    }
  }

  private getScoreBoard(player1Score: number, player2Score: number) {
    return this.getScoreText(player1Score) + "-" + this.getScoreText(player2Score);
  }

  private getScoreText(score: number) {
    if (score === 1) return "Fifteen";
    if (score === 2) return "Thirty";
    if (score === 3) return "Forty";
    if (score === 0) return "Love";
  }

  private sameScoreButNotWinCase() {
    switch (this.player1Score) {
      case 0:
        return "Love-All";
      case 1:
        return "Fifteen-All";
      case 2:
        return "Thirty-All";
      default:
        return "Deuce";
    }
  }

  public wonPoint(player: string): void {
    if (player === "player1") this.player1Score++;
    else this.player2Score++;
  }
}
