//   formEl.style.backgroundColor = 'yellow'
//   formEl.classList.add('form_hover')

// VIDEO 35 - MINUTE

// -- GLOBAL --
const textareaEl = document.querySelector('.form__textarea')
const counterEl = document.querySelector('.counter')
const formEl = document.querySelector('.form')

// -- COUNTER COMPONENT --

const inputHandler = (e) => {
  //determine max num of characters 150
  const maxChars = 150
  //determine num of characters typed (instead of "e" could be textarea)
  const charsTyped = e.target.value.length
  //calculate the num of characters left
  const charsLeft = maxChars - charsTyped
  //show number of characters left
  counterEl.textContent = charsLeft
}
textareaEl.addEventListener('input', inputHandler)

// -- FORM COMPONENT --
//the "submit-event" is linked to "forms" & "click-e" is linked to buttons
const submitHandler = (e) => {
  // preventing default browser action of submitting data to "action" address trhough refresh.
  e.preventDefault()
  // get text from textarea
  const text = textareaEl.value
  // validate if text has a #
  if (text.includes('#')) {
    //add class
  } else {
  }
}
formEl.addEventListener('submit', submitHandler)
