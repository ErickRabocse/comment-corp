// const formEl = document.querySelector('.form')
// formEl.addEventListener('mouseenter', () => {
//   //   formEl.style.backgroundColor = 'yellow'
//   formEl.classList.add('form_hover')
// })

// VIDEO 35 - MINUTE
const textareaEl = document.querySelector('.form__textarea')
const inputHandler = (e) => {
  console.log(e.target.value.length)
}
textareaEl.addEventListener('input', inputHandler)
