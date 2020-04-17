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
    if (this.p1Score < 4 && this.p2Score < 4 && !(this.p1Score + this.p2Score === 6)) {
      const scoreText: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      const score = scoreText[this.p1Score];
      return (this.p1Score === this.p2Score) ? score + '-All' : score + '-' + scoreText[this.p2Score];
    } else {
      if (this.p1Score === this.p2Score)
        return 'Deuce';
      const playerName = this.p1Score > this.p2Score ? this.p1Name : this.p2Name;
      return (((this.p1Score - this.p2Score) * (this.p1Score - this.p2Score)) === 1) ? 'Advantage ' + playerName : 'Win for ' + playerName;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1Score += 1;
    else
      this.p2Score += 1;

  }
}
