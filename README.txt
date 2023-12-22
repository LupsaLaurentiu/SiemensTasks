PROBLEM 1

1.Class Diagram:

+-------------------+          +-------------------+          +-------------------+
|       Book        |          |      Patron       |          |    Borrowing      |
+-------------------+          +-------------------+          +-------------------+
| - Title           |          | - Name            |          | - BorrowDate       |
| - Author          |          | - ID              |          | - ReturnDate       |
| - ISBN            |          | - ContactInfo     |          | - FineAmount       |
| - Quantity        |          | - MaxBooksAllowed |          +-------------------+
|                   |          | - CurrentBooks    |
|                   |          | - Fines           |
+-------------------+          +-------------------+

a.Explanation:

The Book class has attributes such as Title, Author, ISBN, and Quantity.
The Patron class has attributes like Name, ID, ContactInfo, MaxBooksAllowed, CurrentBooks, and Fines.
The Borrowing class has attributes BorrowDate, ReturnDate, and FineAmount.

b.Relationships:

A Book can be borrowed by multiple Patrons, and a Patron can borrow multiple Books.
The Borrowing class mediates the relationship between Book and Patron, holding information 
about when a book is borrowed and returned, along with any fines incurred.


2.Database Diagram:

+-------------------+       +-------------------+       +-------------------+
|       Book        |       |      Patron       |       |    Borrowing      |
+-------------------+       +-------------------+       +-------------------+
| - BookID (PK)     |       | - PatronID (PK)   |       | - BorrowingID (PK)|
| - Title           |       | - Name            |       | - BookID (FK)      |
| - Author          |       | - ID              |       | - PatronID (FK)    |
| - ISBN            |       | - ContactInfo     |       | - BorrowDate       |
| - Quantity        |       | - MaxBooksAllowed |       | - ReturnDate       |
+-------------------+       | - CurrentBooks    |       | - FineAmount       |
                            | - Fines           |       +-------------------+
                            +-------------------+


Explanation:

Each table has a primary key (BookID, PatronID, BorrowingID).
Foreign keys (BookID, PatronID) establish relationships between tables.
The Borrowing table links Book and Patron by referencing their primary keys.
Attributes in each table correspond to those in the class diagram.



PROBLEM 2

!!!!In a larger project, it's better to decouple the quiz 
content from the application logic. Storing questions in an external file, database, or content 
management system allows for more flexibility, easier updates, and better scalability.
However, considering the fact that this is a small project with a small number of questions and 
it won't be scalled to a bigger one and the number of questions won't be growing, I decided to not
separate them in a different file. 


1. Logical Design:

Plan for Organizing Questions, thei structure and User's Progress:
    a.Question Organization:
    -Questions are organized in a question pool, each with an ID, the actual question, choices, 
     correct answer, and a flag indicating whether it has been asked.
    -The question pool are shuffled at the start to randomize the order.

    b.User's Progress:
    -Keep track of the user's progress using variables like currentQuizIndex and currentQuestionIndex.
    -Maintain a variable for the user's score (userScore).
    -Implement a function to check whether all quizzes are completed (isAllQuizzesCompleted()).

    c.Logical Outline:
    -Define a function (fetchQuestions()) to fetch and display questions for the current quiz.
    -Implement a function (startQuiz()) to initiate the quiz, displaying the first question.
    -Develop a function (checkAnswer(userChoice)) to verify the user's answer and update the score.
    -Create a function (nextQuestion()) to move to the next question or end the quiz.
    -Design a function (endQuiz()) to handle the end of the quiz, displaying the final score and handling the 
    transition to the next quiz or resetting.

2.Algorithm Implementation (Partial Code):

// Function to fetch and display questions
async function fetchQuestions() {
  //Responsibility: Fetches and organizes a set of questions for the current quiz.
}

// Function to initiate the quiz
function startQuiz() {
  // Responsibility: Initiates the quiz, updating the header to display the current quiz number and user's score.
}

// Function to check user's answer
function checkAnswer(userChoice) {
  // Responsibility: Checks the user's selected answer, updates the visual feedback
  // and increments the user's score if the answer is correct.
}

// Function to move to the next question or end the quiz
function nextQuestion() {
  // Responsibility: Moves to the next question or ends the quiz based on user progress, 
  // providing an alert if the user hasn't answered the current question.
}

// Function to handle the end of the quiz
function endQuiz() {
  // Responsibility: Handles the end of the quiz, displaying a modal with the user's score and allowing the user 
  // to proceed to the next quiz or reset the entire questionnaire.
}

Task:
Develop the logic for question randomization without repeating until all questions are answered.

Shuffle all the 50 questions using Fisher-Yates shuffle algorithm, get 10 questions for each quiz and mark
them as asked quiz by quiz, question by question. After all the 50 questions are asked, reshuffle.

3.Class and Database Representation:

a.Class Diagram:
    Question:
    Attributes:
    id: int
    question: string
    choices: string[]
    correctAnswer: string
    asked: boolean


    Quiz:
    Attributes:
    id: int
    questions: Question[]
    userScore: int
    currentQuestionIndex: int
    totalQuizzes: int
    userAnswered: boolean

    QuizManager:
    Methods:
    fetchQuestions(): void
    startQuiz(): void
    checkAnswer(userChoice: string): void
    nextQuestion(): void
    endQuiz(): void
    resetEntireQuestionnaire(): void

b.Database Schema:
Assuming a relational database, we could have two tables: Questions and Quizzes.

    Questions Table:

    Columns:
    question_id (Primary Key)
    question_text
    choice_1
    choice_2
    choice_3
    choice_4
    correct_choice
    asked (Boolean)

    Quizzes Table:

    Columns:
    quiz_id (Primary Key)
    user_id
    quiz_score
    current_question_index
    total_quizzes
    user_answered

c.Relationships:
One-to-Many (Questions to Quizzes):
A quiz can have multiple questions, but a question belongs to only one quiz.

One-to-One (Quizzes to QuizManager):
Each quiz is managed by one QuizManager instance.

d.Flow of Data:

Fetching Questions:
The QuizManager calls the fetchQuestions method,
which queries the database to retrieve a set of questions for the current quiz.

User Interaction and Scoring:
As the user interacts with the quiz, the QuizManager updates the Quizzes 
table with the user's progress, including the current score and question index.

Ending the Quiz:
When a quiz ends, the QuizManager updates the Quizzes table, and if all quizzes are completed,
it triggers a reset of the entire questionnaire.