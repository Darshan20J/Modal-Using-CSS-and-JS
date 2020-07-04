const modal = document.querySelector('#myModal');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', () => {
    modal.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (e) => {
    console.log(e)
    if (e.target === modal) {
        modal.style.display = "none";
    }
})