const rect = document.querySelector('.rectangle')
const width = document.getElementById('width')
const height = document.getElementById('height')
const colorIndicator = document.getElementById('color')
const widthLabel = document.getElementById('width-label')
const heightLabel = document.getElementById('height-label')
const colorLabel = document.getElementById('color-label')
const resetBtn = document.getElementById('reset-button')

const changeWidth = () => {
  if (width.value) {
    rect.style.width = width.value + 'px'
    widthLabel.innerText = width.value.toString()
  }
}

const changeHeight = () => {
  if (height.value) {
    rect.style.height = height.value + 'px'
    heightLabel.innerText = height.value.toString()
  }
}

const changeColor = () => {
  if (colorIndicator.value) {
    rect.style.background = colorIndicator.value
    colorLabel.innerText = colorIndicator.value
  }
}

const resetHandler = () => {
  height.value = 0
  width.value = 0
  colorIndicator.value = 000000
  rect.style.background = 000000
  colorLabel.innerText = colorIndicator.value
  rect.style.width = width.value + 'px'
  rect.style.height = height.value + 'px'
  widthLabel.innerText = width.value.toString()
  heightLabel.innerText = height.value.toString()
}

resetBtn.addEventListener('click', resetHandler)
colorIndicator.addEventListener('input', changeColor)
width.addEventListener('input', changeWidth)
height.addEventListener('input', changeHeight)
