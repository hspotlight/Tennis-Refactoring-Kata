import { TennisGame } from "./TennisGame";

export class TennisGame2 implements TennisGame {
  player1Score: number = 0;
  player2Score: number = 0;

  constructor(player1Name: string, player2Name: string) {}

  getScore(): string {
    let score: string = "";
    // TODO I: order is important
    const isSameScore = this.player1Score === this.player2Score;
    if (isSameScore) {
      score = this.sameScoreButNotWinCase();
    } else {
      score = this.getScoreBoard(this.player1Score, this.player2Score);
    }
    if (this.player1Score >= this.player2Score + 2 && this.player1Score >= 4) {
      score = "Win for player1";
    }
    else if (this.player2Score >= this.player1Score + 2 && this.player2Score >= 4) {
      score = "Win for player2";
    }
    else if (this.player1Score === this.player2Score + 1 && this.player2Score >= 3) {
      score = "Advantage player1";
    }
    else if (this.player2Score === this.player1Score + 1 && this.player1Score >= 3) {
      score = "Advantage player2";
    } else if (this.player1Score > this.player2Score && this.player1Score < 4) {
      score = this.getScoreBoard(this.player1Score, this.player2Score);
    } else if (this.player2Score > this.player1Score && this.player2Score < 4) {
      score = this.getScoreBoard(this.player1Score, this.player2Score);
    }

    return score;
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

  private updatePlayer1Score(): void {
    this.player1Score++;
  }

  private updatePlayer2Score(): void {
    this.player2Score++;
  }

  public wonPoint(player: string): void {
    if (player === "player1") this.updatePlayer1Score();
    else this.updatePlayer2Score();
  }
}
