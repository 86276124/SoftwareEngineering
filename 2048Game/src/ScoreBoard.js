import React, { Component } from 'react';
import './ScoreBoard.css';

class ScoreBox extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.score !== nextProps.score || this.props.children !== nextProps.children;
  }

  render () {
    let { label, score, children } = this.props;
    return (
      <div className="score-box">
        <div className="score-label">{label}</div>
        <div className="score-content">{score}</div>
        {children}
      </div>
    );
  }
}

export default class ScoreBoard extends Component {
  shouldComponentUpdate ({score, bestScore, additionScores}) {
    let props = this.props;
    return props.score !== score ||
      props.bestScore !== bestScore ||
      props.additionScores !== additionScores;
  }

  render () {
    let props = this.props;
    return (
      <div className="ScoreBoard">
        <h1 className="title">2048</h1>
        <ScoreBox score={props.score} label="SCORE">
        {
          props.additionScores.map((score, i) =>
            <div className="addition-score" key={score.key}
              onAnimationEnd={(e) => props.onAdditionScoreAnimationEnd(e, score, i)}
            >+{score.score}</div>
          )
        }
        </ScoreBox>
        <ScoreBox score={props.bestScore} label="BEST" />
        <div className="desc-txt">
          <span className="bold">Welcome to my 2048 Game</span><br/>
          I hope you will have a fun in this game！
        </div>
        <button className="new-game-btn" onClick={props.onNewGame}>New Game</button>
      </div>
    );
  }
}
