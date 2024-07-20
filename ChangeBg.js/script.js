const button = document.getElementById('btn')
const input = document.getElementById('input')
const body = document.getElementById('body')


button.addEventListener('click', () => {
    newColor = input.value
    body.style.backgroundColor = newColor
})
