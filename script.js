// const formEl = document.querySelector('.form')
// formEl.addEventListener('mouseenter', () => {
//   //   formEl.style.backgroundColor = 'yellow'
//   formEl.classList.add('form_hover')
// })

// VIDEO 35 - MINUTE
const textareaEl = document.querySelector('.form__textarea')
const inputHandler = (e) => {
  //determine max num of characters 150
  const maxChars = 150
  //determine num of characters typed
  const charsTyped = e.target.value.length
  const charsLeft = maxChars - charsTyped
  console.log(charsLeft)
}
textareaEl.addEventListener('input', inputHandler)
