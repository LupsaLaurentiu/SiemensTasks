let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let userScore = 0; 
let totalQuizzes = 5;
let questions = [];
let userAnswered = false;

const questionPool = [
  {
    "id": 1,
    "question": "What is the capital of France?",
    "choices": ["Berlin", "Madrid", "Paris", "Rome"],
    "correctAnswer": "Paris",
    "asked": false
  },
  {
    "id": 2,
    "question": "What is the capital of Japan?",
    "choices": ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    "correctAnswer": "Tokyo",
    "asked": false
  },
  {
    "id": 3,
    "question": "Who discovered penicillin?",
    "choices": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Thomas Edison"],
    "correctAnswer": "Alexander Fleming",
    "asked": false
  },
  {
    "id": 4,
    "question": "What is the largest mammal in the world?",
    "choices": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "correctAnswer": "Blue Whale",
    "asked": false
  },
  {
    "id": 5,
    "question": "In which year did World War II end?",
    "choices": ["1943", "1945", "1950", "1939"],
    "correctAnswer": "1945",
    "asked": false
  },
  {
    "id": 6,
    "question": "What is the formula for the area of a circle?",
    "choices": ["πr^2", "2πr", "πd", "2πd"],
    "correctAnswer": "πr^2",
    "asked": false
  },
  {
    "id": 7,
    "question": "Who painted the Mona Lisa?",
    "choices": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    "correctAnswer": "Leonardo da Vinci",
    "asked": false
  },
  {
    "id": 8,
    "question": "What is the powerhouse of the cell?",
    "choices": ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Golgi apparatus"],
    "correctAnswer": "Mitochondria",
    "asked": false
  },
  {
    "id": 9,
    "question": "Which planet is known as the 'Red Planet'?",
    "choices": ["Mars", "Venus", "Jupiter", "Mercury"],
    "correctAnswer": "Mars",
    "asked": false
  },
  {
    "id": 10,
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "choices": ["J.K. Rowling", "Harper Lee", "Ernest Hemingway", "George Orwell"],
    "correctAnswer": "Harper Lee",
    "asked": false
  },
  {
    "id": 11,
    "question": "What is the largest planet in our solar system?",
    "choices": ["Mars", "Jupiter", "Venus", "Saturn"],
    "correctAnswer": "Jupiter",
    "asked": false
  },
  {
    "id": 12,
    "question": "Who wrote 'Romeo and Juliet'?",
    "choices": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "correctAnswer": "William Shakespeare",
    "asked": false
  },
  {
    "id": 13,
    "question": "What is the square root of 144?",
    "choices": ["12", "10", "8", "15"],
    "correctAnswer": "12",
    "asked": false
  },
  {
    "id": 14,
    "question": "Which gas is responsible for the greenhouse effect?",
    "choices": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "correctAnswer": "Carbon Dioxide",
    "asked": false
  },
  {
    "id": 15,
    "question": "Who developed the theory of relativity?",
    "choices": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    "correctAnswer": "Albert Einstein",
    "asked": false
  },
  {
    "id": 16,
    "question": "What is the chemical symbol for gold?",
    "choices": ["Au", "Ag", "Fe", "Cu"],
    "correctAnswer": "Au",
    "asked": false
  },
  {
    "id": 17,
    "question": "Which planet is known as the 'Blue Planet'?",
    "choices": ["Earth", "Neptune", "Uranus", "Saturn"],
    "correctAnswer": "Earth",
    "asked": false
  },
  {
    "id": 18,
    "question": "In what year did the Titanic sink?",
    "choices": ["1910", "1912", "1915", "1917"],
    "correctAnswer": "1912",
    "asked": false
  },
  {
    "id": 19,
    "question": "Who is the author of '1984'?",
    "choices": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    "correctAnswer": "George Orwell",
    "asked": false
  },
  {
    "id": 20,
    "question": "What is the speed of light?",
    "choices": ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
    "correctAnswer": "300,000 km/s",
    "asked": false
  },
  {
    "id": 21,
    "question": "Who is known as the 'Father of Computer Science'?",
    "choices": ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Bill Gates"],
    "correctAnswer": "Alan Turing",
    "asked": false
  },
  {
    "id": 22,
    "question": "What is the largest ocean on Earth?",
    "choices": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    "correctAnswer": "Pacific Ocean",
    "asked": false
  },
  {
    "id": 23,
    "question": "Which element has the chemical symbol 'H'?",
    "choices": ["Helium", "Hydrogen", "Hassium", "Hafnium"],
    "correctAnswer": "Hydrogen",
    "asked": false
  },
  {
    "id": 24,
    "question": "Who discovered electricity?",
    "choices": ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla", "Michael Faraday"],
    "correctAnswer": "Benjamin Franklin",
    "asked": false
  },
  {
    "id": 25,
    "question": "What is the capital of Brazil?",
    "choices": ["Buenos Aires", "Rio de Janeiro", "Brasília", "São Paulo"],
    "correctAnswer": "Brasília",
    "asked": false
  },
  {
    "id": 26,
    "question": "Which planet is known as the 'Morning Star'?",
    "choices": ["Venus", "Mars", "Mercury", "Jupiter"],
    "correctAnswer": "Venus",
    "asked": false
  },
  {
    "id": 27,
    "question": "Who wrote 'The Great Gatsby'?",
    "choices": ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "Jane Austen"],
    "correctAnswer": "F. Scott Fitzgerald",
    "asked": false
  },
  {
    "id": 28,
    "question": "What is the currency of Japan?",
    "choices": ["Yuan", "Won", "Yen", "Ringgit"],
    "correctAnswer": "Yen",
    "asked": false
  },
  {
    "id": 29,
    "question": "Which gas do plants absorb during photosynthesis?",
    "choices": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "correctAnswer": "Carbon Dioxide",
    "asked": false
  },
  {
    "id": 30,
    "question": "In which year did the Berlin Wall fall?",
    "choices": ["1985", "1989", "1991", "1995"],
    "correctAnswer": "1989",
    "asked": false
  },
  {
    "id": 31,
    "question": "Who is the author of 'Pride and Prejudice'?",
    "choices": ["Charles Dickens", "Jane Austen", "Charlotte Brontë", "Emily Brontë"],
    "correctAnswer": "Jane Austen",
    "asked": false
  },
  {
    "id": 32,
    "question": "What is the smallest prime number?",
    "choices": ["1", "2", "3", "5"],
    "correctAnswer": "2",
    "asked": false
  },
  {
    "id": 33,
    "question": "Who invented the telephone?",
    "choices": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Galileo Galilei"],
    "correctAnswer": "Alexander Graham Bell",
    "asked": false
  },
  {
    "id": 34,
    "question": "What is the capital of Australia?",
    "choices": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "correctAnswer": "Canberra",
    "asked": false
  },
  {
    "id": 35,
    "question": "Which animal is known as the 'King of the Jungle'?",
    "choices": ["Lion", "Tiger", "Elephant", "Giraffe"],
    "correctAnswer": "Lion",
    "asked": false
  },
  {
    "id": 36,
    "question": "Who wrote 'The Catcher in the Rye'?",
    "choices": ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
    "correctAnswer": "J.D. Salinger",
    "asked": false
  },
  {
    "id": 37,
    "question": "What is the largest desert in the world?",
    "choices": ["Sahara Desert", "Arctic Desert", "Antarctic Desert", "Gobi Desert"],
    "correctAnswer": "Antarctic Desert",
    "asked": false
  },
  {
    "id": 38,
    "question": "Who developed the first polio vaccine?",
    "choices": ["Marie Curie", "Jonas Salk", "Albert Sabin", "Edward Jenner"],
    "correctAnswer": "Jonas Salk",
    "asked": false
  },
  {
    "id": 39,
    "question": "What is the smallest bone in the human body?",
    "choices": ["Femur", "Stapes", "Radius", "Tibia"],
    "correctAnswer": "Stapes",
    "asked": false
  },
  {
    "id": 40,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "choices": ["China", "South Korea", "Japan", "Vietnam"],
    "correctAnswer": "Japan",
    "asked": false
  },
  {
    "id": 41,
    "question": "Who discovered the law of gravity?",
    "choices": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
    "correctAnswer": "Isaac Newton",
    "asked": false
  },
  {
    "id": 42,
    "question": "Who was the Emperor of the French and led the French army during the Waterloo Battle?",
    "choices": ["Louis XIV", "Napoleon Bonaparte", "Charlemagne", "Philip II"],
    "correctAnswer": "Napoleon Bonaparte",
    "asked": false
  },
  {
    "id": 43,
    "question": "What is the chemical symbol for water?",
    "choices": ["H2O", "CO2", "O2", "N2"],
    "correctAnswer": "H2O",
    "asked": false
  },
  {
    "id": 44,
    "question": "Who wrote 'The Odyssey'?",
    "choices": ["Homer", "Virgil", "Sophocles", "Aristotle"],
    "correctAnswer": "Homer",
    "asked": false
  },
  {
    "id": 45,
    "question": "What is the largest moon in our solar system?",
    "choices": ["Titan", "Ganymede", "Europa", "Io"],
    "correctAnswer": "Ganymede",
    "asked": false
  },
  {
    "id": 46,
    "question": "Which element is essential for human bones?",
    "choices": ["Calcium", "Iron", "Sodium", "Potassium"],
    "correctAnswer": "Calcium",
    "asked": false
  },
  {
    "id": 47,
    "question": "What is the capital of South Korea?",
    "choices": ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    "correctAnswer": "Seoul",
    "asked": false
  },
  {
    "id": 48,
    "question": "Who painted 'Starry Night'?",
    "choices": ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Georgia O'Keeffe"],
    "correctAnswer": "Vincent van Gogh",
    "asked": false
  },
  {
    "id": 49,
    "question": "What is the largest bird in the world?",
    "choices": ["Eagle", "Ostrich", "Penguin", "Albatross"],
    "correctAnswer": "Ostrich",
    "asked": false
  },
  {
    "id": 50,
    "question": "Who is the author of 'The Hobbit'?",
    "choices": ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
    "correctAnswer": "J.R.R. Tolkien",
    "asked": false
  }
];

const shuffledQuestions = shuffleArray(questionPool);

async function fetchQuestions() {
  try {
    // Use the shuffled question pool for the current quiz
    questions = shuffledQuestions.slice(currentQuizIndex * 10, (currentQuizIndex + 1) * 10);

    if (!questions || questions.length === 0) {
      console.error('Error: Questions array is empty or undefined.');
      return;
    }

    questions.forEach((question) => {
      question.asked = true;
    });

    startQuiz();
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

function startQuiz() {
  const quizHeader = document.getElementById('quiz-header');
  if (quizHeader) {
    quizHeader.innerText = `Quiz ${currentQuizIndex + 1} - Score: ${userScore}/${questions.length * totalQuizzes}`;
  }

  displayQuestion();
}

function isAllQuizzesCompleted() {
  return currentQuizIndex === totalQuizzes;
}

function resetEntireQuestionnaire() {
  //reset all variables to their initial state
  currentQuizIndex = 0;
  currentQuestionIndex = 0;
  userScore = 0;
  userAnswered = false;
  const reshuffledQuestions = shuffleArray(questionPool);

  const scoreModal = document.getElementById('score-modal');
  scoreModal.style.display = 'none';

  //start the quiz again
  fetchQuestions();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayQuestion() {
  const questionContainer = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');

  if (!questionContainer || !answerButtons) {
    console.error('Error: Unable to find question container or answer buttons.');
    return;
  }

  questionContainer.innerText = questions[currentQuestionIndex].question;
  answerButtons.innerHTML = '';

  questions[currentQuestionIndex].choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.classList.add('btn');
    button.addEventListener('click', () => checkAnswer(choice));
    answerButtons.appendChild(button);
  });

  userAnswered = false;
}

function checkAnswer(userChoice) {
  if (userAnswered) {
    return;
  }

  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.innerText === correctAnswer) {
      button.classList.add('correct');
    } else if (button.innerText === userChoice) {
      button.classList.add('incorrect');
    }
  });

  if (userChoice === correctAnswer) {
    userScore++;
  }

  userAnswered = true;
  showNextButton();
}

function showNextButton() {
  const nextButton = document.getElementById('next-btn');
  nextButton.style.display = 'block';
}

function nextQuestion() {
  if (userAnswered) {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      resetButtonStyles();
      displayQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert('Please answer the question before moving to the next one.');
  }
}

function endQuiz() {
  const scoreModal = document.getElementById('score-modal');
  const scoreText = document.getElementById('score-text');
  const closeBtn = document.getElementById('close-btn');

  currentQuizIndex++;

  if (isAllQuizzesCompleted()) {
    scoreText.innerText = `Quiz ${currentQuizIndex} completed! Your score: ${userScore}/${questions.length} Your total score: ${userScore}/${questions.length * totalQuizzes}`;
  } else {
    scoreText.innerText = `Quiz ${currentQuizIndex} completed! Your score: ${userScore}/${questions.length}`;
  }

  scoreModal.style.display = 'block';

  closeBtn.addEventListener('click', () => {
    scoreModal.style.display = 'none';
    if (isAllQuizzesCompleted()) {
      resetEntireQuestionnaire();
    } else {
      resetQuiz();
      fetchQuestions();
    }
  });
}


function resetQuiz() {
  const questionContainer = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');

  if (!questionContainer || !answerButtons) {
    console.error('Error: Unable to find question container or answer buttons.');
    return;
  }

  currentQuestionIndex = 0;
  userScore = 0;
  displayQuestion();
  hideNextButton();
}


function resetButtonStyles() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove('correct', 'incorrect');
  });

  hideNextButton();
}

function hideNextButton() {
  const nextButton = document.getElementById('next-btn');
  nextButton.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  fetchQuestions();
});
