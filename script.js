//   formEl.style.backgroundColor = 'yellow'
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
  // validate if text has a # visually with a color outine
  if (text.includes('#') && text.length >= 5) {
    //add class to show valid indicator
    formEl.classList.add('form--valid')
    setTimeout(() => {
      formEl.classList.remove('form--valid')
    }, 2000)
  } else {
    // add class to show invalid indicator
    formEl.classList.add('form--invalid')
    setTimeout(() => {
      formEl.classList.remove('form--invalid')
    }, 2000)
    // focus textarea to resume typing
    textareaEl.focus()
    // stop the fn execution
    return
  }
  // Now that we have the text let's extract: company name, company's 1st letter & date
  // const hashtag;
  // const company
  // const badgeLetter= 0
  // const daysAgo = 0

  // LOOPING TO FIND THE HASHTAG, WILL USE FIND INSTEAD
  const brandFeedback = text.split(' ')
  var company = null
  var hashtag = null
  brandFeedback.forEach((word) => {
    if (word.includes('#')) {
      company = word.substring(1)
      hashtag = company.substring(0, 1).toUpperCase()
    }
  })
  console.log(company)
  console.log(hashtag)
}
formEl.addEventListener('submit', submitHandler)

// -- VIDEO 36 - MINUTE 30
