import React, { Component } from 'react';
import Questions from '../data.json'

class TriviaGame extends Component {

      state = {
        triviaStart: false,
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
      if (this.state.triviaStart === true) {
        this.setState({
          question: Questions[this.state.questionNumber].question,
          answerOne: Questions[this.state.questionNumber].answerOne,
          answerTwo: Questions[this.state.questionNumber].answerTwo,
          answerThree: Questions[this.state.questionNumber].answerThree,
          answerFour: Questions[this.state.questionNumber].answerFour,
          correct: Questions[this.state.questionNumber].correct,
        });
      }
    };

    triviaGameStart = () => {
      this.setState({
        triviaStart: true,
      })
      this.newQuestion();
    };

    checkAnswer = e => {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      });
      this.otherCheck(e);
    };

    otherCheck = e => {
      let id = e.target.getAttribute('dataId');
        if (id === this.state.correct) {
          this.setState({
            totalCorrect: this.state.totalCorrect + 1
          });
        }
          console.log('questionNumber', this.state.questionNumber);
        if (this.state.questionNumber < this.state.totalQuestions) {
          this.newQuestion();
        } else {
          // game over
        }
      };

  render() {
    return(
      <div>
      <header>
        Score: {this.state.totalCorrect}
      </header>
        <button className="button" onClick={this.triviaGameStart}>
          Play
        </button>
        <h3 className='question-number'>
          Question {this.state.totalQuestions}
        </h3>
        <h2 className='trivia-question'>
          {this.state.question}
        </h2>
          <ul className="answers">
            <button
              className="answer-one"
              onClick={this.checkAnswer}
              dataId='1'>
                {this.state.answerOne}
            </button>
            <button
              className="answer-two"
              onClick={this.checkAnswer}
              dataId="2">
                {this.state.answerTwo}
            </button>
            <button
              className="answer-three"
              onClick={this.checkAnswer}
              dataId="3">
                {this.state.answerThree}
            </button>
            <button
              className="answer-four"
              onClick={this.checkAnswer}
              dataId="4">
                {this.state.answerFour}
            </button>
          </ul>
      </div>
    )
  }
};

export default TriviaGame;
