'use strict';

const adviceAPI = 'https://api.adviceslip.com/advice';
const adviceNumber = document.querySelector('.advice-number');
const adviceQuote = document.querySelector('.advice-quote');
const newAdviceBtn = document.querySelector('.advice-btn');

// 1. GET ADVICE
async function getAdvice() {
    const advice = await fetch(adviceAPI);
    const data = await advice.json();

    return data;
}

// 2. RENDER ADVICE
const renderAdvice = (adviceObj) => {
const {id, advice} = adviceObj;
adviceNumber.textContent = `Advice #${id}`;
adviceQuote.textContent = advice;
}

// 4. EVENT HANDLERS
window.addEventListener('DOMContentLoaded', () => {
    // 3. GENERATE NEW ADVICE 
    newAdviceBtn.addEventListener('click', async function() {
        const newAdvice = await getAdvice();
        const newData = await newAdvice.slip;
        // RENDER
        renderAdvice(newData);
    });
})



  


