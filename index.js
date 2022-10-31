import intervalToDuration from 'date-fns/intervalToDuration';
import {UI_ELEMENTS} from './view.js';


UI_ELEMENTS.BUTTON.addEventListener('click', function() {
    if (!UI_ELEMENTS.INPUT_DATE.value) {
        alert('Введите дату.');
    } else {
        UI_ELEMENTS.OUTPUT_DATE.textContent = getDate();        
    };
});

function getDate() {
    const result = intervalToDuration({
        start: new Date(UI_ELEMENTS.INPUT_DATE.value),
        end: new Date()
    });

    return displayCount(result);
};

function displayCount(dataObject) {
    const countdown = `
    ${dataObject.years} лет, 
    ${dataObject.months} месяцев, 
    ${dataObject.days} дней
    `;
    return countdown;
}