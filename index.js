/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const progressBar = document.querySelector('.progress-bar');
const overlay = document.querySelector('.overlay');

function startAnimation() {
    let progress = 0;

    const interval = setInterval(() => {
        progress += (1/3);
        if (progress >= 100) {
            progressBar.style.width = `100%`;
            clearInterval(interval);
        } else {
            progressBar.style.width = `${progress}%`;
        }
    }, 10);
}

function openWindow() {
    overlay.classList.add('active');
    startAnimation();
}
function closeWindow() {
    overlay.classList.remove('active');
}