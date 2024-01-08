const questionList = [
  {
    question: 'Who creates the Definition of Done?',
    answers: [
      `The Product Owner since they are responsible for the product's success.`,
      'If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.',
      'The Scrum Master since they are responsible for the productivity of the Developers.',
      `The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions.`
    ],
    correctAnswer: 2
  },
  {
    question: 'When does the next Sprint begin?',
    answers: [
      'When the Product Owner is ready.',
      'Next Monday.',
      'Immediately after the conclusion of the previous Sprint.',
      'Immediately following the next Sprint Planning.'
    ],
    correctAnswer: 4
  },
  {
    question:
      'You have just been hired by a company new to Scrum. Your management has assigned you to be the Scrum Master of six new Scrum Teams. These teams will build one product. Select two conditions you should strive for in this scenario.',
    answers: [
      'There should be six Product Owners, one for each Scrum Team.',
      'There should be six Product Owners, reporting to a chief Product Owner.',
      'The product has one Product Backlog.',
      'Each Scrum Team should have a separate Product Backlog.',
      'There should be only one Product Owner.'
    ],
    correctAnswer: [3, 5]
  }
]

const quiz = {
  quizTitle: 'PSM1 Quiz',
  quizSynopsis: 'Good Luck!',
  nrOfQuestions: questionList.length,
  questions: questionList.map((q) => {
    return {
      question: q.question,
      questionType: 'text',
      answerSelectionType: Array.isArray(q.correctAnswer)
        ? 'multiple'
        : 'single',
      answers: q.answers,
      correctAnswer: q.correctAnswer,
      point: 1
    }
  })
}

export default quiz
