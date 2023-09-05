const colorInput = document.getElementById('color');
const gradientInput = document.getElementById('gradient');
const setBackgroundBtn = document.getElementById('btn');
const body = document.body;

setBackgroundBtn.addEventListener('click', () => {
    const backgroundColor = color.value;
    const gradientColor = gradient.value;
    body.style.background = `linear-gradient(to right, ${backgroundColor}, ${gradientColor})`;
});