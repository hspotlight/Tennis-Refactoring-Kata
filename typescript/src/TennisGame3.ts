import { TennisGame } from './TennisGame';


export class TennisGame3 implements TennisGame {
  private p2Score: number = 0;
  private p1Score: number = 0;
  private p1Name: string;
  private p2Name: string;

  constructor(p1Name: string, p2Name: string) {
    this.p1Name = p1Name;
    this.p2Name = p2Name;
  }

  getScore(): string {
    if (this.p1Score === this.p2Score) {
      return this.p1Score >= 3 ? 'Deuce' : this.getScoreText(this.p1Score) + '-All';
    }
    else if (this.p1Score < 4 && this.p2Score < 4) {
      return this.getScoreText(this.p1Score) + '-' + this.getScoreText(this.p2Score);
    }
    else {
      const playerName: string = this.p1Score > this.p2Score ? this.p1Name : this.p2Name;
      const diffResult = Math.abs(this.p1Score - this.p2Score);
      return (diffResult === 1 ? 'Advantage '  : 'Win for ') + playerName;
    }
  }

  private getScoreText(score: number) {
    const scoreText: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return scoreText[score];
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1Score += 1;
    else
      this.p2Score += 1;

  }
}
