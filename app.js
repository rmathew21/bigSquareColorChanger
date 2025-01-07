const h1 = document.querySelector('.h1Title');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

button.addEventListener('keydown', () => {
    if (e.key === 'space') {
        const newColor = makeRandomColor()
        document.body.style.backgroundColor = newColor
        h1.innerText = newColor
    }
})
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    
    return `rgb(${r}, ${g}, ${b})`
}

