'use strict';

// get all necessary divs
let questions = document.querySelectorAll('.question');
let quests = document.querySelectorAll('.quest');
let answs = document.querySelectorAll('.answ');


// loop throught the quest
for(let i=0; i<quests.length; i++){
    // add event listener for quest at index[i]
    quests[i].addEventListener('click', ()=>{
        // close all quest if exist open
        close_all_quest();
        // open the current quest
        questions[i].classList.toggle('open');
    });
}

// funtion to close all quest
function close_all_quest(){
    // loop throught all questions
    questions.forEach((question, index) => {
        // removing the open class to each question if exist
        question.classList.remove('open');
    });
}