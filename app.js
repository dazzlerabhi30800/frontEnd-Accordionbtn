let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');
let arrow4 = document.querySelector('.arrow4');
let arrow5 = document.querySelector('.arrow5');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');
let answer5 = document.querySelector('.answer5');
arrow1.addEventListener('click', () => {
    arrow1.classList.toggle('active');
    answer1.classList.toggle('active');
})
arrow2.addEventListener('click', () => {
    arrow2.classList.toggle('active');
    answer2.classList.toggle('active');

})
arrow3.addEventListener('click', () => {
    arrow3.classList.toggle('active');
    answer3.classList.toggle('active');
})
arrow4.addEventListener('click', () => {
    arrow4.classList.toggle('active');
    answer4.classList.toggle('active');
})
arrow5.addEventListener('click', () => {
    arrow5.classList.toggle('active');
    answer5.classList.toggle('active');
})
