import { getRandomArbitrary } from '../prototypes/prototype_1/utilities'

document.addEventListener('DOMContentLoaded', () => {
  console.log('Test ', getRandomArbitrary(0, 1))

  const container = document.getElementById('prototype_3')

  const text1 = document.createElement('p')
  text1.innerText = 'the end of'

  const text2 = document.createElement('p')
  text2.innerText = 'evangelion'

  const text3 = document.createElement('p')
  text3.innerText = "episode:25'"

  const text4 = document.createElement('p')
  text4.innerText = 'Love is distructive.'

  text1.classList.add('text1')
  text2.classList.add('text2')
  text3.classList.add('text3')
  text4.classList.add('text4')

  container.appendChild(text1)
  container.appendChild(text2)
  container.appendChild(text3)
  container.appendChild(text4)
})
