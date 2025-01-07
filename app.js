const h1 = document.querySelector('.h1Title');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    
    
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;
})

