function mixing() {
  let first_questions = ['1', '2', '3', '4', '5', '6']
  let first_question = Math.floor(Math.random() * first_questions.length)
  console.log(first_question)
  return first_question
}

// let mixing = false

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_32')

  const question1 = document.createElement('h1')
  question1.innerText = mixing()
  question1.classList.add('question1')

  const button1 = document.createElement('button')
  button1.classList.add('button1')
  button1.innerText = 'lets get nasty'
  button1.addEventListener('click', () => {
    question1.innerText = mixing()
  })

  container.appendChild(question1)
  container.appendChild(button1)
})
