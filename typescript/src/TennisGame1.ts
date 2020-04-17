import { TennisGame } from "./TennisGame";

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
      return this.sameScoreCase(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.advantageOrWinCase();
    }

    return this.normalCase();
  }

  private advantageOrWinCase() {
    let score: string = null;
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for player1";
    else score = "Win for player2";
    return score;
  }

  private normalCase() {
    return this.getScoreText(this.m_score1) + "-" + this.getScoreText(this.m_score2);
  }

  private sameScoreCase(playerScore: number) {
    switch (playerScore) {
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

  private getScoreText(playerScore: number) {
    switch (playerScore) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
    }
  }
}
