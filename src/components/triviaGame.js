import React, { Component } from 'react';
import TriviaQuestions from '../questions'

class TriviaGame extends Component {

  state = {
    triviaStart: false,
    triviaReset: false,
    totalCorrect: 0,
    questionNumber: 0,
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
        answerOne: Questions[this.state.questionNum].answerOne,
        answerTwo: Questions[this.state.questionNum].answerTwo,
        answerThree: Questions[this.state.questionNum].answerThree,
        answerFour: Questions[this.state.questionNum].answerFour,
        correct: Questions[this.state.questionNum].correct,
        totalQuestions: Questions.length
      })
    }
  };

  triviaGameStart = () => {
    this.setState({
      triviaStart: true,
      questionNumber: this.state.questionNumber + 1
    })
    this.newQuestion()
  };
};

export default TriviaGame;
