const accordianItem = document.querySelectorAll('.accordian-question');

for (item of accordianItem) {
    item.addEventListener('click', handleClick);
}

function handleClick(e) {
    const targetItem = e.currentTarget;

    const arrow = targetItem.querySelector('.arrow');
    arrow.classList.toggle('active');

    const answer = targetItem.querySelector('.answer');
    answer.classList.toggle('active');
}