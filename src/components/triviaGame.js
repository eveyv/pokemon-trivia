import React, { Component } from 'react';
import Questions from '../data.json'

class TriviaGame extends Component {

      state = {
        triviaStart: false,
        triviaReset: false,
        totalCorrect: 0,
        questionNumber: '',
        totalQuestions: 0,
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
          totalQuestions: Questions.length
        });
      }
    };

    triviaGameStart = () => {
      this.setState({
        triviaStart: true,
        questionNumber: this.state.questionNumber = 1,
      })
      this.newQuestion();
    };

      render() {
        return(
          <div>
            <button className="play-buttom" onClick={this.triviaGameStart}>
              Play
            </button>
            <h3 className='question-number'>
              Question {this.state.questionNumber}
            </h3>
            <h2 className='trivia-question'>
              {this.state.question}
            </h2>

          </div>
        )
      }
};

export default TriviaGame;
