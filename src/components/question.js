import React, { Component } from 'react';
import Questions from '../data.json'

class Question extends Component {

  state = {
    triviaReset: false,
    totalCorrect: 0,
    questionNumber: 0,
    totalQuestions: 10,
    question: '',
    answerOne: '',
    answerTwo: '',
    answerThree: '',
    answerFour: '',
    correct: '',
  };

  newQuestion = () => {
      this.setState({
        question: Questions[this.state.questionNumber].question,
        answerOne: Questions[this.state.questionNumber].answerOne,
        answerTwo: Questions[this.state.questionNumber].answerTwo,
        answerThree: Questions[this.state.questionNumber].answerThree,
        answerFour: Questions[this.state.questionNumber].answerFour,
        correct: Questions[this.state.questionNumber].correct,
      });
  };

  triviaGameStart = () => {
    this.newQuestion();
    this.setState({
      questionNumber: this.state.questionNumber = 1,
    })
  };

  grabNext = e => {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
    this.checkAnswer(e);
  };

  checkAnswer = e => {
    let id = e.target.getAttribute('dataid');
      if (id === this.state.correct) {
        this.setState({
          totalCorrect: this.state.totalCorrect + 1
        });
      }
      if (this.state.questionNumber < this.state.totalQuestions) {
        this.newQuestion();
      } else {
        this.gameOver()
      }
    };

    gameOver = e => {
        //final calculation needed + display needed
        if(this.state.questionNumber > this.state.totalQuestions) { alert(`THANKS FOR PLAYING! YOU ANSWERED ${this.state.totalCorrect}/${this.state.totalQuestions} QUESTIONS RIGHT.`) }
        this.reset()
    }

    reset = () => {
      this.setState({
        triviaReset: false,
        totalCorrect: 0,
        questionNumber: 0,
        totalQuestions: 10,
        question: '',
        answerOne: '',
        answerTwo: '',
        answerThree: '',
        answerFour: '',
        correct: '',
      })
    }

  render() {
    return(
      <div>
          <button
            className="play-button"
            onClick={this.triviaGameStart}>
            Play
          </button>
          <h3 className='question-number'>
            Question {this.state.questionNumber}
          </h3>
          <h2 className='trivia-question'>
            {this.state.question}
          </h2>
          <div className="answer-column">
            <button
              className="button answer-one"
              onClick={this.grabNext}
              dataid='1'>
                {this.state.answerOne}
            </button>
            <button
              className="button answer-two"
              onClick={this.grabNext}
              dataid="2">
                {this.state.answerTwo}
            </button>
            <button
              className="button answer-three"
              onClick={this.grabNext}
              dataid="3">
                {this.state.answerThree}
            </button>
            <button
              className="button answer-four"
              onClick={this.grabNext}
              dataid="4">
                {this.state.answerFour}
            </button>
          </div>
          <footer className="scoreboard">
            Score: {this.state.totalCorrect}
          </footer>
      </div>
    )
  }
}

export default Question;
