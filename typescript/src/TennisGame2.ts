import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  player1Score: number = 0;
  player2Score: number = 0;

  player1ScoreText: string = '';
  player2ScoreText: string = '';

  constructor(player1Name: string, player2Name: string) {
  }

  getScore(): string {
    let score: string = '';
    if (this.player1Score === this.player2Score && this.player1Score < 4) {
      if (this.player1Score === 0)
        score = 'Love';
      if (this.player1Score === 1)
        score = 'Fifteen';
      if (this.player1Score === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.player1Score === this.player2Score && this.player1Score >= 3)
      score = 'Deuce';

    if (this.player1Score > 0 && this.player2Score === 0) {
      if (this.player1Score === 1)
        this.player1ScoreText = 'Fifteen';
      if (this.player1Score === 2)
        this.player1ScoreText = 'Thirty';
      if (this.player1Score === 3)
        this.player1ScoreText = 'Forty';

      this.player2ScoreText = 'Love';
      score = this.player1ScoreText + '-' + this.player2ScoreText;
    }
    if (this.player2Score > 0 && this.player1Score === 0) {
      if (this.player2Score === 1)
        this.player2ScoreText = 'Fifteen';
      if (this.player2Score === 2)
        this.player2ScoreText = 'Thirty';
      if (this.player2Score === 3)
        this.player2ScoreText = 'Forty';

      this.player1ScoreText = 'Love';
      score = this.player1ScoreText + '-' + this.player2ScoreText;
    }

    if (this.player1Score > this.player2Score && this.player1Score < 4) {
      if (this.player1Score === 2)
        this.player1ScoreText = 'Thirty';
      if (this.player1Score === 3)
        this.player1ScoreText = 'Forty';
      if (this.player2Score === 1)
        this.player2ScoreText = 'Fifteen';
      if (this.player2Score === 2)
        this.player2ScoreText = 'Thirty';
      score = this.player1ScoreText + '-' + this.player2ScoreText;
    }
    if (this.player2Score > this.player1Score && this.player2Score < 4) {
      if (this.player2Score === 2)
        this.player2ScoreText = 'Thirty';
      if (this.player2Score === 3)
        this.player2ScoreText = 'Forty';
      if (this.player1Score === 1)
        this.player1ScoreText = 'Fifteen';
      if (this.player1Score === 2)
        this.player1ScoreText = 'Thirty';
      score = this.player1ScoreText + '-' + this.player2ScoreText;
    }

    if (this.player1Score > this.player2Score && this.player2Score >= 3) {
      score = 'Advantage player1';
    }

    if (this.player2Score > this.player1Score && this.player1Score >= 3) {
      score = 'Advantage player2';
    }

    if (this.player1Score >= 4 && this.player2Score >= 0 && (this.player1Score - this.player2Score) >= 2) {
      score = 'Win for player1';
    }
    if (this.player2Score >= 4 && this.player1Score >= 0 && (this.player2Score - this.player1Score) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  private updatePlayer1Score(): void {
    this.player1Score++;
  }

  private updatePlayer2Score(): void {
    this.player2Score++;
  }

  public wonPoint(player: string): void {
    if (player === 'player1')
      this.updatePlayer1Score();
    else
      this.updatePlayer2Score();
  }
}
