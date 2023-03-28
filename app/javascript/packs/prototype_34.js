import html2canvas from 'html2canvas'
import { prototype } from 'p5'
import {
  getRandomArbitrary,
  sample,
  generateHash
} from '../prototypes/utilities'

const swatchesTypes = [
  'blue1',
  'blue2',
  'orange1',
  'orange2',
  'pink1',
  'pink2',
  'red1',
  'red2',
  'red3',
  'yellow1',
  'yellow2',
  'yellow3'
]
const sticker1 = ['sticker1']
const sticker2 = ['sticker2']
const sticker3 = ['sticker3']
const sticker4 = ['sticker4']
const stickersTypes = [sticker1, sticker2, sticker3, sticker4]

let container

function createSwatch(containerSwatch) {
  const swatchElement = document.createElement('div')
  swatchElement.classList.add('swatch')

  const top = getRandomArbitrary(50, 614)
  const left = getRandomArbitrary(50, 622)
  // const width = getRandomArbitrary(1, 5)

  swatchElement.style.top = [top, 'px'].join('')
  swatchElement.style.left = [left, 'px'].join('')
  // swatchElement.style.width = [width, 'px'].join('')
  // swatchElement.style.height = [width, 'px'].join('')
  swatchElement.style.transform = `rotate(${getRandomArbitrary(10, 350)}deg)`
  swatchElement.classList.add(sample(swatchesTypes))

  containerSwatch.appendChild(swatchElement)
}

function createSticker(containerStickers) {
  const stickerElement = document.createElement('div')
  stickerElement.classList.add('sticker')

  const top = getRandomArbitrary(50, 562)
  const left = getRandomArbitrary(50, 1172)
  // const width = getRandomArbitrary(1, 5)

  stickerElement.style.top = [top, 'px'].join('')
  stickerElement.style.left = [left, 'px'].join('')
  // swatchElement.style.width = [width, 'px'].join('')
  // swatchElement.style.height = [width, 'px'].join('')
  stickerElement.style.transform = `rotate(${getRandomArbitrary(20, -20)}deg)`
  stickerElement.classList.add(sample(stickersTypes))

  containerStickers.appendChild(stickerElement)
}

function mixing1() {
  let first_questions = [
    'будешь постить со мной истории?',
    'будешь отвлекаться на других, когда мы вместе?',
    'будешь писать мне первой(ым)?',
    'будешь первой(ым) звать меня гулять?',
    'будешь ненавидеть, что я курю?',
    'будешь жалеть меня, когда мне плохо?',
    'будешь со мной трогательной(ым)?',
    'будешь давать поводы злиться на меня?',
    'будешь злиться на меня?',
    'будешь обесценивать мои проблемы?',
    'будешь шутить надо мной?',
    'будешь бояться моих страхов?',
    'будешь хвалить мою работу?',
    'будешь мечтать вместе со мной?',
    'будешь по мне скучать?'
  ]
  let first_question = sample(first_questions)
  // console.log(first_question)
  return first_question
}
function mixing2() {
  let second_questions = [
    'ты покажешь мне свою любимую музыку?',
    'ты покажешь свои любимые клипы?',
    'ты отговоришь меня от татуировки?',
    'ты захочешь поехать со мной в Портофино?',
    'ты примешь мои комплименты?',
    'ты бросишь меня потом?',
    'ты себя любишь?',
    'ты сможешь проявлять благодарность?',
    'ты плачешь от радости?',
    'ты расскажешь обо мне другим друзьям?',
    'ты возненавидишь меня?',
    'ты сможешь сделать меня счастливой(ым)?'
  ]
  let second_question = sample(second_questions)
  // console.log(first_question)
  return second_question
}
function mixing3() {
  let third_questions = ['как часто ты грустишь?', 'как часто ты плачешь?']
  let third_question = sample(third_questions)
  // console.log(first_question)
  return third_question
}
function mixing4() {
  let fourth_questions = [
    'насколько ты спонтанная(ый)?',
    'насколько ты эмоциональная(ый)?',
    'насколько сильно ты меня полюбишь?'
  ]
  let fourth_question = sample(fourth_questions)
  // console.log(first_question)
  return fourth_question
}
function mixing5() {
  let fifth_questions = ['сегодня / завтра?', 'я / она(он)?']
  let fifth_question = sample(fifth_questions)
  // console.log(first_question)
  return fifth_question
}
function mixing6() {
  let sixth_questions = ['много / мало?', 'навсегда / никогда?']
  let sixth_question = sample(sixth_questions)
  // console.log(first_question)
  return sixth_question
}

function renderQuestionary() {
  const anketa = document.createElement('div')
  anketa.classList.add('anketa')

  //left-side
  const leftSide = document.createElement('div')
  leftSide.classList.add('leftSide')

  //right-side
  const rightSide = document.createElement('div')
  rightSide.classList.add('rightSide')
  const questions = document.createElement('div')
  questions.classList.add('questions')
  const rawFirst = document.createElement('div')
  rawFirst.classList.add('rawFirst')
  const rawLast = document.createElement('div')
  rawLast.classList.add('rawLast')

  //first_question
  const wrapperFirst = document.createElement('div')
  wrapperFirst.classList.add('wrapperFirst')

  const button1 = document.createElement('button')
  button1.classList.add('button')
  // button1.innerText = 'lets get nasty'
  button1.addEventListener('click', () => {
    question1.innerText = mixing1()
  })

  const question1 = document.createElement('h1')
  question1.innerText = mixing1()
  question1.classList.add('question1')

  const circle1 = document.createElement('div')
  circle1.classList.add('circle')

  //second_question
  const wrapperSecond = document.createElement('div')
  wrapperSecond.classList.add('wrapperSecond')

  const button2 = document.createElement('button')
  button2.classList.add('button')
  button2.addEventListener('click', () => {
    question2.innerText = mixing2()
  })

  const question2 = document.createElement('h1')
  question2.innerText = mixing2()
  question2.classList.add('question2')

  const circle2 = document.createElement('div')
  circle2.classList.add('circle')

  //third_question
  const wrapperThird = document.createElement('div')
  wrapperThird.classList.add('wrapperThird')

  const wrapperThirdQuestion = document.createElement('div')
  wrapperThirdQuestion.classList.add('wrapperThirdQuestion')

  const button3 = document.createElement('button')
  button3.classList.add('button')
  // button3.innerText = 'lets get nasty'
  button3.addEventListener('click', () => {
    question3.innerText = mixing3()
  })

  const question3 = document.createElement('h1')
  question3.innerText = mixing3()
  question3.classList.add('question3')

  const line = document.createElement('div')
  line.classList.add('line')

  //fourth_question
  const wrapperFourth = document.createElement('div')
  wrapperFourth.classList.add('wrapperFourth')

  const wrapperFourthQuestion = document.createElement('div')
  wrapperFourthQuestion.classList.add('wrapperFourthQuestion')

  const Ellipses = document.createElement('div')
  Ellipses.classList.add('Ellipses')
  const Ellipse1 = document.createElement('div')
  const Ellipse2 = document.createElement('div')
  const Ellipse3 = document.createElement('div')
  const Ellipse4 = document.createElement('div')
  const Ellipse5 = document.createElement('div')
  const Ellipse6 = document.createElement('div')
  const Ellipse7 = document.createElement('div')
  const Ellipse8 = document.createElement('div')
  const Ellipse9 = document.createElement('div')
  const Ellipse10 = document.createElement('div')

  const button4 = document.createElement('button')
  button4.classList.add('button')
  button4.addEventListener('click', () => {
    question4.innerText = mixing4()
  })

  const question4 = document.createElement('h1')
  question4.innerText = mixing4()
  question4.classList.add('question4')

  //fifth_question
  const wrapperFifth = document.createElement('div')
  wrapperFifth.classList.add('wrapperFifth')

  const button5 = document.createElement('button')
  button5.classList.add('button')
  button5.addEventListener('click', () => {
    question5.innerText = mixing5()
  })

  const question5 = document.createElement('h1')
  question5.innerText = mixing5()
  question5.classList.add('question5')

  //sixth_question
  const wrapperSixth = document.createElement('div')
  wrapperSixth.classList.add('wrapperSixth')

  const button6 = document.createElement('button')
  button6.classList.add('button')
  button6.addEventListener('click', () => {
    question6.innerText = mixing6()
  })

  const question6 = document.createElement('h1')
  question6.innerText = mixing6()
  question6.classList.add('question6')

  //canvases
  const containerStickers = document.createElement('div')
  containerStickers.classList.add('containerStickers')
  const stickersQuantity = Math.floor(getRandomArbitrary(6, 6))

  for (var i = 0; i < stickersQuantity; i++) {
    createSticker(containerStickers)
  }

  const containerSwatch = document.createElement('div')
  containerSwatch.classList.add('containerSwatch')
  const swatchesQuantity = Math.floor(getRandomArbitrary(6, 18))

  for (var i = 0; i < swatchesQuantity; i++) {
    createSwatch(containerSwatch)
  }

  const questionary = document.createElement('div')
  questionary.classList.add('questionary')

  wrapperFirst.appendChild(button1)
  wrapperFirst.appendChild(question1)
  wrapperFirst.appendChild(circle1)

  wrapperSecond.appendChild(button2)
  wrapperSecond.appendChild(question2)
  wrapperSecond.appendChild(circle2)

  wrapperThird.appendChild(wrapperThirdQuestion)
  wrapperThirdQuestion.appendChild(question3)
  wrapperThirdQuestion.appendChild(line)
  wrapperThird.appendChild(button3)

  wrapperFourth.appendChild(wrapperFourthQuestion)
  wrapperFourthQuestion.appendChild(question4)
  Ellipses.appendChild(Ellipse1)
  Ellipses.appendChild(Ellipse2)
  Ellipses.appendChild(Ellipse3)
  Ellipses.appendChild(Ellipse4)
  Ellipses.appendChild(Ellipse5)
  Ellipses.appendChild(Ellipse6)
  Ellipses.appendChild(Ellipse7)
  Ellipses.appendChild(Ellipse8)
  Ellipses.appendChild(Ellipse9)
  Ellipses.appendChild(Ellipse10)
  wrapperFourthQuestion.appendChild(Ellipses)
  wrapperFourth.appendChild(button4)

  wrapperFifth.appendChild(question5)
  wrapperFifth.appendChild(button5)

  wrapperSixth.appendChild(question6)
  wrapperSixth.appendChild(button6)

  rawFirst.appendChild(wrapperFirst)
  rawFirst.appendChild(wrapperSecond)
  rawLast.appendChild(wrapperFifth)
  rawLast.appendChild(wrapperSixth)
  questions.appendChild(rawFirst)
  questions.appendChild(wrapperThird)
  questions.appendChild(wrapperFourth)
  questions.appendChild(rawLast)

  rightSide.appendChild(containerSwatch)
  rightSide.appendChild(questions)
  anketa.appendChild(containerStickers)
  questionary.appendChild(rightSide)
  questionary.appendChild(leftSide)
  anketa.appendChild(questionary)
  // prototype_34.appendChild(anketa)
  document.body.appendChild(anketa)
}

//buttonSave
function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const saveButton = document.createElement('div')
  saveButton.classList.add('saveButton')
  saveButton.innerText = 'Save'

  saveButton.addEventListener('click', () => {
    generateImage().then(downloadImage)
  })

  wrapper.appendChild(saveButton)
  document.body.appendChild(wrapper)
}

function generateImage() {
  return new Promise((resolve, reject) => {
    const container = document.getElementById('prototype_35')

    html2canvas(container).then((canvas) => {
      canvas.style.position = 'absolute'
      canvas.style.left = '-99999px'
      document.body.appendChild(canvas)

      resolve()
    })
  })
}

function downloadImage() {
  const canvas = document.getElementsByTagName('canvas')[0]
  const imageData = canvas.toDataURL('image/png')

  const link = document.createElement('a')
  link.download = `Prototype-35-${generateHash()}.png`
  link.href = imageData
  link.click()
  link.remove()

  canvas.remove()
}

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementById('prototype_35')

  renderQuestionary()
  renderUI()

  // container.appendChild(question1)
  // container.appendChild(button1)
})
