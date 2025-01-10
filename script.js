//   formEl.style.backgroundColor = 'yellow'
// -- GLOBAL --
const MAX_CHARS = 150

const textareaEl = document.querySelector('.form__textarea')
const counterEl = document.querySelector('.counter')
const formEl = document.querySelector('.form')
const feedbackListEl = document.querySelector('.feedbacks')
const submitBtnEl = document.querySelector('.submit-btn')
const spinnerEl = document.querySelector('.spinner')

const renderFeedbackItem = (feedbackItem) => {
  //new feedback item HTML
  const feedbackItemHTML = `
  <li class="feedback">
    <button class="upvote">
        <i class="fa-solid fa-caret-up upvote__icon"></i>
        <span class="upvote__count">${feedbackItem.upvoteCount}</span>
    </button>
    <section class="feedback__badge">
        <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
    </section>
    <div class="feedback__content">
        <p class="feedback__company">${feedbackItem.company}</p>
        <p class="feedback__text">${feedbackItem.text}</p>
    </div>
    <p class="feedback__date">${
      feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`
    }</p>
  </li>
  `
  // Insert feedback content into list
  feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML)
}

// -- COUNTER COMPONENT --
const inputHandler = (e) => {
  //determine max num of characters 150
  const maxChars = MAX_CHARS
  //determine num of characters typed (instead of "e" could be textarea)
  const charsTyped = e.target.value.length
  //calculate the num of characters left
  const charsLeft = maxChars - charsTyped
  //show number of characters left
  counterEl.textContent = charsLeft
}
textareaEl.addEventListener('input', inputHandler)

// -- FORM COMPONENT -
// FN ABSTRACTED TO REFACTOR THE CODE AND DRY
const showVisualIndicator = (textCheck) => {
  //add class to show valid indicator
  formEl.classList.add(`form--${textCheck}`)
  setTimeout(() => {
    formEl.classList.remove(`form--${textCheck}`)
  }, 2000)
}
//the "submit-event" is linked to "forms" & "click-e" is linked to buttons
const submitHandler = (e) => {
  // preventing default browser action of submitting data to "action" address trhough refresh.
  e.preventDefault()
  // get text from textarea
  const text = textareaEl.value
  // validate if text has a # visually with a color outine
  if (text.includes('#') && text.length >= 5) {
    showVisualIndicator('valid')
  } else {
    showVisualIndicator('invalid')
    // focus textarea to resume typing
    textareaEl.focus()
    // stop the fn execution
    return
  }
  // LOOPING TO FIND THE HASHTAG, WILL USE FIND INSTEAD
  // const brandFeedback = text.split(' ')
  // var company = null
  // var hashtag = null
  // brandFeedback.forEach((word) => {
  //   if (word.includes('#')) {
  //     company = word.substring(1)
  //     hashtag = company.substring(0, 1).toUpperCase()
  //   }
  // })
  // Now that we have the text let's extract: company name, company's 1st letter & date
  const hashtag = text.split(' ').find((word) => word.includes('#'))
  const company = hashtag.substring(1)
  const badgeLetter = company.substring(0, 1).toUpperCase()
  const upvoteCount = 0
  const daysAgo = 0
  // create feedback item object
  const feedbackItem = {
    hashtag,
    company,
    badgeLetter,
    upvoteCount,
    daysAgo,
    text,
  }
  // Rendering HTML feedback item
  renderFeedbackItem(feedbackItem)
  // Sending feedback item to server
  fetch('https://bytegrad.com/course-assets/js/1/api/feedbacks', {
    method: 'POST',
    body: JSON.stringify(feedbackItem),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  // clear text area, since it's an input we can use value
  textareaEl.value = ''
  // blur submit btn
  submitBtnEl.blur()
  // reset counter, since it is plain text we can use textContent
  counterEl.textContent = MAX_CHARS
}
formEl.addEventListener('submit', submitHandler)
// -- FEEDBACK LIST COMPONENT --

fetch('https://bytegrad.com/course-assets/js/1/api/feedbacks')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.feedbacks[0])
    // remove spinner
    spinnerEl.remove()
    // iterate over each element in the feedbacks array & render it in list
    data.feedbacks.forEach((feedbackItem) => renderFeedbackItem(feedbackItem))
  })
  .catch((err) => {
    spinnerEl.remove()
    feedbackListEl.insertAdjacentHTML(
      'beforeend',
      `<h2>An error has occurred: <br> ${err.message}<h2>`
    )
  })

// -- VIDEO 40 - MINUTE 00:00
