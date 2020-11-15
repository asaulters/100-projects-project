// let randomBackgroundColor();
const myBtn = document.getElementById('centerClick')
const bodyContainer = document.getElementById('body')
const color =['blue', 'green', 'red', 'purple', 'black', 'white']

bodyContainer.style.backgroundColor = 'violet'
myBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    const colorIndex = parseInt(Math.random() *color.length);
    bodyContainer.style.backgroundColor = color[colorIndex];
}

