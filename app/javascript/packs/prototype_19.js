import { sample } from '../prototypes/utilities'

import {
  getLargeWhiteCircleStore,
  setLargeWhiteCircleStore
} from '../prototypes/prototype_19/store'

function createLargeWhiteCircle() {
  return new Promise((resolve, reject) => {
    const sides = ['top', 'bottom']
    const side = sample(sides)

    console.log('createLargeWhiteCircle')

    resolve(side)
  });
}

function check (side) {
  console.log('check')
  console.log(side)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_19')
  // createLargeWhiteCircle()

console.log('DOMContentLoaded')

  console.log(createLargeWhiteCircle().then((side) => {check(side)}))
})