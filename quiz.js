
const quizData = [
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    },
    {
        question: "Choose the word that best completes the following sentence:\n<br><br> Yesterday it was raining a lot, but the sun ________ now.",
        options: ["shine", "is shining", "shone", "are shining"],
        answer: "is shining"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Harper Lee", "Jane Austen", "Rick Riordan", "F. Scott Fitzgerald"],
        answer: "Jane Austen"
    },
    {
        question: "Choose the word that best completes the following sentence:\n<br><br> Do you hear that? someone ________ a song.",
        options: ["is singing", "are singing", "sang", "sing"],
        answer: "is singing"
    },
    {
        question: "Choose the word that best completes the following sentence:\n<br><br> The artist's _______ use of color captivated the audience, evoking a range of emotions.",
        options: ["nuanced", "arbitrary", "pedestrian", "conspicuous"],
        answer: "nuanced"
    },
    {
        question: "Identify the <b>antonym</b> of the given word.\n<br><br>The project manager praised the team for their 'diligent' efforts in completing the task ahead of schedule.",
        options: ["lethargic", "industrious", "meticulous", "lax"],
        answer: "lax"
    },
    {
        question: "Select the correct spelling of the given word.",
        options: ["embarras", "embarrass", "embarass", "embrrass"],
        answer: "embarrass"
    },   
    {
        question: "Identify the closest <b>synonym</b> of the highlighted word.\n<br><br> The politician's <b>eloquent</b> speech resonated with the audience, compelling them to support his candidacy.",
        options: ["inarticulate", "articulate", "verbose", "taciturn"],
        answer: "articulate"
    },   

    {
        question: "Read the passage below and answer the question.\n<br><br> 'The sun was setting, casting an orange glow over the horizon. The birds flew across the sky, silhouetted against the fading light. It was a moment of peace, of quiet reflection.'\n<br><br> What does the phrase 'moment of peace' suggest about the scene? ",
        options: ["The scene was chaotic and loud.", "The scene was calm and tranquil.", "The scene was tense and filled with anticipation.", "The scene was dark and gloomy."],
        answer: "The scene was calm and tranquil."
    },  
    {
        question: "Select the correct spelling of the given word.",
        options: ["connoisseur", "conoisseur", "connoiseur", "conniosseur"],
        answer: "connoisseur"
    },   
    {
        question: "Select the correct spelling of the given word.",
        options: ["bacalaureate", "baccalaureate", "baccalaurate", "baccaluareate"],
        answer: "baccalaureate"
    },   
    {
        question: "Select the correct spelling of the given word.",
        options: ["preposterous", "preposterrous", "prepostrerous", "preposterouss"],
        answer: "preposterous"
    },  
    {
        question: "Identify the <b>antonym</b> of the highlighted word.\n<br><br> The orchestra delivered a <b>lackluster</b> performance that failed to captivate the audience.",
        options: ["energetic", "vibrant", "uninspired", "lackadaisical"],
        answer: "vibrant"
    }, 
    {
        question: "Choose the word that best completes the following sentence:\n<br><br> The leader's ______ leadership style empowered employees to innovate and take ownership of their work.",
        options: ["autocratic", "authoritarian", "democratic", "bureaucratic"],
        answer: "democratic"
    }, 
    {
        question: "What does the word 'magnanimous' mean?",
        options: ["Selfish", "Generous and forgiving", "Rude", "Dishonest"],
        answer: "Generous and forgiving"
    },  
    {
        question: "Which of the following sentences best describes the theme of a story about a hero who faces great challenges but triumphs in the end?",
        options: [" The hero enjoys a peaceful life with no problems to face.", "The hero goes on an adventurous journey but faces many hardships along the way.", "The hero is believes that the lesson is the friends we made along the way.", " The hero becomes wealthy after an easy adventure."],
        answer: "The hero goes on an adventurous journey but faces many hardships along the way."
    },  
    {
        question: "Which of the following sentences is a <b> compound sentence?</b>",
        options: [" She went to the store because she needed groceries.", "He loves playing, and she enjoys reading.", "They were tired after work, so they went home early.", "After the meeting, we went for coffee."],
        answer: "He loves playing, and she enjoys reading."
    },
    {
        question: "Choose the word that is most similar in meaning to 'benevolent':",
        options: ["Mean-spirited", "Unconcerned", "Kind-hearted", "Hostile"],
        answer: "Kind-hearted"
    },  
    {
        question: "Identify the correct form of the verb in the following sentence:<br><br> If she __________ earlier, she would have caught the train.",
        options: ["leave", "left", "leaves", "leaving"],
        answer: "left"
    },  
    {
        question: "Which sentence is grammatically correct?",
        options: ["She doesn't know the answer.", " She don't knows the answer.", "She don't know the answer.", "She doesn't knows the answer."],
        answer: "She doesn't know the answer."
    },    
    {
        question: "What is the past tense of 'go'?",
        options: ["Goed", "Went", "Go", "Going"],
        answer: "Went"
    },  
    {
        question: "Choose the correct sentence:",
        options: ["She don't like pizza.", "She doesn't like pizza.", "She don't likes pizza.", "She didn't liked pizza."],
        answer: "She doesn't like pizza."
    },  
    {
        question: "Which word is a noun?",
        options: ["Quickly", "Happiness", "Run", "Sadly"],
        answer: "Happiness"
    },  
    {
        question: "The cat is ___ the table.",
        options: ["in", "on", "at", "to"],
        answer: "on"
    },  
    {
        question: "Pick the correct sentence:",
        options: ["I have seen that movie.", "I seen that movie.", "I sawed that movie.", "I seeing that movie."],
        answer: "I have seen that movie."
    },  
    {
        question: "Which sentence uses the correct form of 'their'?",
        options: ["Their going to the park.", "They're going to the park.", "There going to the park.", "Theyre going to the park."],
        answer: "They're going to the park."
    },  
    {
        question: "Choose the correct plural form:",
        options: ["Mouses", "Mouse", "Mice", "Mices"],
        answer: "Mice"
    }, 
    {
        question: "What is the synonym of 'happy'?",
        options: ["Joyful", "Sad", "Angry", "Upset"],
        answer: "Joyful"
    }, 
    {
        question: "Which is the correct sentence?",
        options: ["He is taller than me.", "He taller than me.", "He more tall than me.", "He most taller than me."],
        answer: "He is taller than me."
    }, 
    {
        question: "Choose the correct verb tense: \n <br><br>  I ___ my homework already.",
        options: ["do", "have done", "did", "does"],
        answer: "have done"
    }, 
    {
        question: "Find the adjective:",
        options: ["Running", "Beautiful", "Quickly", "Happiness"],
        answer: "Beautiful"
    }, 
    {
        question: "Which word is spelled correctly?",
        options: ["Recieve", "Receive", "Receeve", "Recive"],
        answer: "Receive"
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["I am go to school.", "I am going to school.", "I going school.", "I goes to school."],
        answer: "I am going to school."
    }, 
    {
        question: "Find the pronoun:",
        options: ["Quickly", "They", "School", "Beautiful"],
        answer: "They"
    }, 
    {
        question: "Which uses the correct question tag?",
        options: ["isn't it", "are you", "aren't you", "do you"],
        answer: "aren't you"
    }, 
    {
        question: "Choose the correct word: \n <br><br> She has ___ apples.",
        options: ["much", "many", "any", "lot"],
        answer: "many"
    }, 
    {
        question: "Pick the correct sentence:",
        options: ["He don't like ice cream.", "He doesn't like ice cream.", "He doesn't likes ice cream.", "He didn't likes ice cream."],
        answer: "He doesn't like ice cream."
    }, 
    {
        question: "Choose the correct verb: \n <br><br> My brother ___ to school every day.",
        options: ["walk", "walks", "walking", "walked"],
        answer: "walks"
    }, 
    {
        question: "Choose the correct preposition: \n <br><br> The book is ___ the bag.",
        options: ["under", "in", "on", "over"],
        answer: "in"
    }, 
    {
        question: "Find the adverb:",
        options: ["Slowly", "Slow", "Slowness", "Slower"],
        answer: "Slowly"
    }, 
    {
        question: "Choose the correct form of the verb: \n <br><br> I ___ to the store yesterday.",
        options: ["go", "gone", "going", "went"],
        answer: "went"
    }, 
    {
        question: "Which sentence is correct?",
        options: ["She can sings well.", "She can sing well.", "She can sung well.", "She can singing well."],
        answer: "She can sing well."
    }, 
    {
        question: "Which sentence uses the correct form of 'too'?",
        options: ["She is too tired to go.", "She is to tired to go.", "She is too tired for go.", "She too tired to go."],
        answer: "She is too tired to go."
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["We was waiting for the bus.", "We are waiting for the bus.", "We were waiting for the bus.", "We is waiting for the bus."],
        answer: "We were waiting for the bus."
    }, 
    {
        question: "Find the conjunction in the sentence:\n<br><br> I want to go, but I don't have time.",
        options: ["Want", "Go", "But", "Time"],
        answer: "But"
    }, 
    {
        question: "Choose the correct word for the blank:\n <br><br> She is sitting ___ the chair.",
        options: ["under", "on", "in", "at"],
        answer: "on"
    }, 
    {
        question: "What is the plural of 'child'?",
        options: ["Childs", "Childes", "Children", "Childeren"],
        answer: "Children"
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["I can't hardly wait.", "I can hardly wait.", "I can wait hardly.", "I can’t wait hardly."],
        answer: "I can hardly wait."
    }, 
    {
        question: "Which of these is a proper noun?",
        options: ["book", "city", "London", "school"],
        answer: "London"
    }, 
    {
        question: "Which sentence is correct?",
        options: ["I have went to the store.", "I have gone to the store.", "I have going to the store.", "I had went to the store."],
        answer: "I have gone to the store."
    }, 
    {
        question: "Choose the correct verb: \n <br><br> They ___ in the park every day.",
        options: ["walk", "walks", "walking", "walked"],
        answer: "walk"
    }, 
    {
        question: "Find the subject in the sentence: \n <br><br> The cat is sleeping.",
        options: ["The cat", "is", "sleeping", "The"],
        answer: "The cat"
    }, 
    {
        question: "Choose the correct form of 'there': \n <br><br> ___ are many people in the room.",
        options: ["Their", "There", "They're", "They"],
        answer: "There"
    }, 
    {
        question: "What is the <b>synonym</b> of 'fast'?",
        options: ["Slow", "Quick", "Heavy", "Light"],
        answer: "Quick"
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["There going to the movies tonight.", "They’re going to the movies tonight.", "They goes to the movies tonight.", "They going to the movies tonight."],
        answer: "They’re going to the movies tonight."
    }, 
    {
        question: "Find the correct <b>article:</b> \n <br><br>  ___ apple a day keeps the doctor away.",
        options: ["A", "An", "The", "No article needed"],
        answer: "An"
    }, 
    {
        question: "Which word is a preposition?",
        options: ["She", "Walk", "On", "Loudly"],
        answer: "On"
    }, 
    {
        question: "Choose the correct word: \n <br><br> The dog is running ___ the yard.",
        options: ["in", "to", "at", "under"],
        answer: "in"
    }, 
    {
        question: "What is the <b>opposite</b> of 'hot'?",
        options: ["Warm", "Cold", "Wet", "warmth"],
        answer: "Cold"
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["She has a lot of friends.", "She have a lot of friends.", "She has a lot friends.", "She having a lot of friends."],
        answer: "She has a lot of friends."
    }, 
    {
        question: "Choose the correct word: \n <br><br> I don't ___ any sugar in my coffee.",
        options: ["want", "wants", "wanting", "want to"],
        answer: "want"
    }, 
    {
        question: "Which is a correct sentence?",
        options: ["I don't know where is she.", "I don't know where she is.", "I don't know where she are.", "I know where she don't."],
        answer: "I don't know where she is."
    }, 
    {
        question: "Choose the correct form: \n <br><br> He ___ to the gym every day.",
        options: ["go", "goes", "going", "gone"],
        answer: "goes"
    }, 
    {
        question: "What is the past tense of 'eat'?",
        options: ["Eats", "Eating", "Ate", "Eaten"],
        answer: "Ate"
    }, 
    {
        question: "Find the correct question tag: \n <br><br> She isn't coming, ___?",
        options: ["is she", "she is", "isn't she", "she isn't"],
        answer: "is she"
    }, 
    {
        question: "Choose the correct form: \n <br><br> They have been ___ their homework all afternoon.",
        options: ["do", "did", "doing", "done"],
        answer: "doing"
    }, 
    {
        question: "What is the <b>opposite</b> of 'difficult'?",
        options: ["Hard", "Easy", "Challenging", "Complex"],
        answer: "Easy"
    }, 
    {
        question: "Which is the correct sentence?",
        options: ["He don't have enough time.", "He doesn't have enough time.", " He doesn't has enough time.", "He don't has enough time."],
        answer: "He doesn't have enough time."
    }, 
    {
        question: "Choose the correct preposition: \n <br><br> The cat jumped ___ the table.",
        options: ["on", "at", "in", "over"],
        answer: "over"
    }, 
    {
        question: "Find the adjective in the sentence: \n <br><br> The sky is blue.",
        options: ["Sky", "Blue", "Is", "The"],
        answer: "Blue"
    }, 
    {
        question: "Which is a verb?",
        options: ["Beautiful", "Run", "Quickly", "Happiness"],
        answer: "Run"
    }, 
    {
        question: "Choose the correct sentence:",
        options: ["The book is laying on the table.", "The book is lie on the table.", "The book is laying in the table.", "The book is lying on the table."],
        answer: "The book is lying on the table."
    }, 
    {
        question: "What is the plural of 'man'?",
        options: ["Mans", "Men", "Manes", "Menses"],
        answer: "Men"
    }, 
    {
        question: "Find the adverb in the sentence: \n <br><br> She sings beautifully.",
        options: ["She", "Sings", "Beautifully", "None of the above"],
        answer: "Beautifully"
    }, 
    

];

const supabaseUrl = 'https://ddqfglztxogflorqilvc.supabase.co'; // <-- Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkcWZnbHp0eG9nZmxvcnFpbHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzAyOTQsImV4cCI6MjA2MDM0NjI5NH0.kuA3zWlghlW1Ij-wE6dZXyWdGVqE8iuidgp8vvD40wE'; // <-- Replace with your Supabase anon key
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabase = createClient(supabaseUrl, supabaseKey);

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let globalTimer;
let timeLeft = 60; // Total time for the entire quiz in seconds (3 minutes = 180 seconds)
let isQuizFinished = false;

async function getCurrentUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error || !data.session || !data.session.user) {
        // User is NOT logged in
        return null;
    }
    // User is logged in
    return data.session.user;
}

// Example usage:
getCurrentUser().then(user => {
    if (user) {
        console.log("User is logged in:", user.email);
        // You can display the user's name/email or allow quiz actions
    } else {
        console.log("User is NOT logged in");
        // Optionally redirect to login page
    }
});

function shuffleArray(array) {
    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function startGlobalTimer() {
    // Start the global timer countdown for the entire quiz
    globalTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
        } else {
            clearInterval(globalTimer); // Stop the global timer
            endQuiz(); // End the quiz when the global timer runs out
        }
    }, 1000);
}

function loadQuestion() {
    if (isQuizFinished) return;

    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;

    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    // Shuffle the options for each question
    shuffleArray(currentQuestion.options);

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

//image mover
let currentPosition = 0; 
let totalDistance = 0;

let consecutiveCorrectAnswers = 0; // Track consecutive correct answers
let distanceMultiplier = 1; // Default distance multiplier
let currencyMultiplier = 1; // Default currency multiplier
let currency = 0; // Track the user's currency

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    userAnswers.push({
        question: quizData[currentQuestionIndex].question,
        selected: selectedAnswer,
        correct: correctAnswer
    });

    const image = document.getElementById("moving-image");
    const trailContainer = document.getElementById("trail-container");

    const trackWidth = trailContainer.offsetWidth; 
    const maxPosition = trackWidth - image.offsetWidth; 

    if (selectedAnswer === correctAnswer) {
        consecutiveCorrectAnswers++; // Increment the count for consecutive correct answers

        // Increment currency with the multiplier
        currency += 5 * currencyMultiplier;
        document.getElementById("currency-display").textContent = `Currency: ${currency}`;

        if (consecutiveCorrectAnswers === 5) {
            // Trigger the special event
            showBonusChoice();
            consecutiveCorrectAnswers = 0; // Reset the streak after triggering the bonus
        }

        const previousPosition = currentPosition;
        currentPosition += 20;

        if (currentPosition > maxPosition) {
            currentPosition = maxPosition;
        }

        image.style.transform = `translateX(${currentPosition}px)`; // Move the car

       const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.left = `${previousPosition}px`; // Start at the previous position
        trail.style.width = `${currentPosition - previousPosition}px`; // Expand to the current position
        trailContainer.appendChild(trail);

        const markerPositions = [
          /*  { percentage: 0.15, label: "15 KM" },
            { percentage: 0.30, label: "30 KM" },
            { percentage: 0.5, label: "50 KM" },
            { percentage: 0.75, label: "75 KM" }, */
            { percentage: 0.99, label: "500 KM" }
        ];

        markerPositions.forEach(marker => {
            const position = Math.floor(trackWidth * marker.percentage);
            if (!document.querySelector(`.marker[data-position="${position}"]`)) {
                const mark = document.createElement("div");
                mark.classList.add("marker");
                mark.style.left = `${position}px`;
                mark.setAttribute("data-position", position); 

                const label = document.createElement("div");
                label.classList.add("marker-label");
                label.textContent = marker.label;
                label.style.left = `${position}px`; 

                trailContainer.appendChild(mark);
                trailContainer.appendChild(label);
            }
        }); 

        score++;
        totalDistance += 5 * distanceMultiplier; // Apply the distance multiplier
        document.getElementById("distance-travelled").textContent = `Distance travelled: ${totalDistance}km`;
    } else {
        consecutiveCorrectAnswers = 0; // Reset the count if the answer is wrong
        image.style.transform = `translateX(${currentPosition}px)`;
    }

    nextQuestion();
}

function showBonusChoice() {
    // Create a modal or UI element for the bonus choice
    const bonusModal = document.createElement("div");
    bonusModal.id = "bonus-modal";
    bonusModal.style.position = "fixed";
    bonusModal.style.top = "50%";
    bonusModal.style.left = "50%";
    bonusModal.style.transform = "translate(-50%, -50%)";
    bonusModal.style.color = "#000"
    bonusModal.style.backgroundColor = "#fff";
    bonusModal.style.padding = "20px";
    bonusModal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    bonusModal.style.zIndex = "1000";

    bonusModal.innerHTML = `
        <h3>Bonus Choice!</h3>
        <p>You've answered 5 questions correctly in a row! Choose your reward:</p>
        <button id="add-time">Add 30 seconds</button>
        <button id="distance-multiplier">2x Distance Multiplier</button>
        <button id="currency-multiplier">2x Currency Multiplier</button>
    `;

    document.body.appendChild(bonusModal);

    // Add event listeners for the buttons
    document.getElementById("add-time").onclick = () => {
        timeLeft += 30; // Add 30 seconds to the timer
        document.getElementById("timer").textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
        closeBonusModal();
    };

    document.getElementById("distance-multiplier").onclick = () => {
        distanceMultiplier *= 2; // Set the distance multiplier to 2x
        closeBonusModal();
    };

    document.getElementById("currency-multiplier").onclick = () => {
        currencyMultiplier *= 2; // Set the currency multiplier to 2x
        closeBonusModal();
    };
}

function closeBonusModal() {
    const bonusModal = document.getElementById("bonus-modal");
    if (bonusModal) {
        bonusModal.remove();
    }
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    if (isQuizFinished) return; // Prevent multiple calls to end the quiz
    isQuizFinished = true; // Mark the quiz as finished

    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    result.style.display = "block";
    document.getElementById("score").textContent = `Your score is: ${score} / ${userAnswers.length}`;
    document.getElementById("distance-result").textContent = `Distance travelled: ${totalDistance}km`;
    document.getElementById("currency-result").textContent = `Currency Earned: ${currency}`;

     // Calculate the percentage of correct answers
     const correctAnswers = userAnswers.filter(answer => answer.selected === answer.correct).length;
     const percentage = (correctAnswers / userAnswers.length) * 100;
 
     // Displaying the percentage of correct answers in the result tab
     document.getElementById("correct-percentage").textContent = `Correct Answers: ${percentage.toFixed(2)}%`;
    

    const summary = document.getElementById("question-summary");
    summary.innerHTML = '';

    userAnswers.forEach(answer => {
        const summaryItem = document.createElement("div");
        summaryItem.classList.add("question-summary");

        summaryItem.innerHTML = `
            <strong>${answer.question}</strong><br>
            Your Answer: <span class="${answer.selected === answer.correct ? 'correct' : 'incorrect'}">${answer.selected}</span><br>
            Correct Answer: <span class="correct">${answer.correct}</span><br><br>
        `;
        summary.appendChild(summaryItem);
    });

// --- Save distance to Supabase ---
    saveDistanceToSupabase(totalDistance);
}


function restartQuiz() {
location.reload();
}

// Make it available globally for HTML onclick
window.restartQuiz = restartQuiz;

function resetGlobalTimer() {
    // Reset the global timer to the initial time (3 minutes)
    clearInterval(globalTimer);
    timeLeft = 10; // Reset to 3 minutes
    document.getElementById("timer").textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    startGlobalTimer(); // Restart the global timer
}

// Start the quiz on page load
startQuiz();

let selectedCar = "car.png"; // Default car

// Event listener for car selection
document.querySelectorAll(".select-car").forEach(button => {
    button.addEventListener("click", () => {
        selectedCar = button.getAttribute("data-car");
        alert(`You selected ${selectedCar.split('.')[0]}!`);
    });
});

function applySelectedCar() {
    const carImage = document.getElementById("moving-image");
    if (carImage) {
        carImage.src = selectedCar; // Set the car image to the selected car
        console.log(`Car applied: ${selectedCar}`);
    }
}

function startQuiz() {
    // Shuffle the questions at the start of the quiz
    shuffleArray(quizData);

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    isQuizFinished = false; // Reset the quiz finished flag
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    startGlobalTimer(); // Start the global timer when the quiz starts
    loadQuestion();

}

function loadSelectedCar() {
    const defaultCar = 'car.png';
    const selectedCar = localStorage.getItem('selectedCar') || defaultCar;
    const carElement = document.getElementById('moving-image'); // Make sure this ID matches
    
    if (carElement) {
        carElement.src = `${selectedCar}`;
        console.log('Car loaded:', selectedCar); // Check browser console
    } else {
        console.error('Could not find car element!');
    }
}

// Run when page loads
window.addEventListener('DOMContentLoaded', loadSelectedCar);


async function saveDistanceToSupabase(distance) {
    const { data, error } = await supabase.auth.getSession();
    const user = data?.session?.user;
    if (error || !user) {
        alert('You must be logged in to save your distance.');
        return;
    }

    // Fetch username, email, and current high_score from users table
    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('username, email, high_score')
        .eq('user_id', user.id)
        .single();

    if (userError || !userData) {
        alert('Could not find user profile.');
        return;
    }

    // Set new high score as the higher of previous high_score or totalDistance
    const newHighScore = Math.max(userData.high_score || 0, distance);

    // Upsert distance, username, email, and high_score
    const { error: upsertError } = await supabase
        .from('users')
        .upsert([
            { user_id: user.id, username: userData.username, email: userData.email, distance, high_score: newHighScore }
        ], { onConflict: ['user_id'] });

    if (upsertError) {
        alert('Failed to save distance: ' + upsertError.message);
    } else {
        console.log('Distance and high score saved to Supabase!');
    }
}



/*
function addCurrency(amount) {
    currency += amount;
    localStorage.setItem('currency', currency);
    updateCurrencyDisplay();
    updatePurchaseButtons(); // Enable purchase buttons if now affordable
}*/

