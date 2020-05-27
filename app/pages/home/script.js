const random = (low, high) => {
  if (high === null) {
    high = low
    low = 0
  }

  return Math.random() * (high - low) + low
}

const randomInt = (low, high) => {
  return Math.round(random(low, high))
}

const colors = [
  'rgb(29, 43, 83)', // dark-blue
  'rgb(126, 37, 83)', // dark-purple
  'rgb(0, 135, 81)', // dark-green
  'rgb(95, 87, 79)', // dark-gray
  'rgb(171, 82, 54)', // brown
  'rgb(131, 118, 156)', // indigo
  'rgb(41, 173, 255)', // blue
  'rgb(0, 228, 54)', // green
  'rgb(255, 236, 39)', // yellow
  'rgb(255, 119, 168)', // pink
  'rgb(194, 195, 199)', // light-gray
  'rgb(255, 163, 0)', // orange
  'rgb(255, 204, 170)', // peach
  'rgb(255, 0, 77)', // red
  'rgb(255, 241, 232)', // white
]
const colorLow = 0
const colorHigh = colors.length - 1

const elem = document.querySelector('.c-two-js')
const params = { width: window.innerWidth, height: window.innerHeight }
const two = new Two(params).appendTo(elem)

const crossSpanCount = 80
const uDimension = Math.min(window.innerHeight, window.innerWidth)
const u = Math.round(uDimension / crossSpanCount)
const spotRadius = Math.round(u * 8) ** 2

let prefersReducedMotion = false
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const detectReducedMotion = (mq) => {
  prefersReducedMotion = mq.matches
}
mediaQuery.addEventListener('change', detectReducedMotion)
detectReducedMotion(mediaQuery)

class Cross {
  constructor({ color, x, y }) {
    this.color = color
    this.size = 20
    this.x = x
    this.y = y

    this.createGroup()
    this.setCycleTimeout()
  }

  createGroup() {
    const rectX = two.makeRectangle(0, 0, u, u * 3)
    const rectY = two.makeRectangle(0, 0, u * 3, u)
    const group = two.makeGroup(rectX, rectY)

    group.fill = colors[this.color]
    group.linewidth = 0
    group.translation.set(this.x, this.y)

    this.group = group
  }

  cycleColor() {
    if (this.color === colorLow) {
      return
    }

    if (this.cycleTimeout > 0) {
      this.cycleTimeout -= 1
      return
    }

    this.color -= 1
    this.group.fill = colors[this.color]
    this.setCycleTimeout()
  }

  setCycleTimeout() {
    this.cycleTimeout = randomInt(0, 5)
  }

  update() {
    if (this.insideSpotRadius && pointer.moveTimeout > 0) {
      this.color = colorHigh
      this.group.fill = colors[this.color]
      return
    }

    this.cycleColor()
  }

  get insideSpotRadius() {
    const fuzz = randomInt(-(u * 2), u * 2)
    let x = (this.x + fuzz - pointer.x) ** 2
    let y = (this.y + fuzz - pointer.y) ** 2

    return x + y < spotRadius
  }
}

class Field {
  constructor() {
    this.crosses = []

    this.addCrosses()
  }

  get crossCountX() {
    return this.crossCount(window.innerWidth, 4)
  }

  get crossCountY() {
    return this.crossCount(window.innerHeight, 3)
  }

  addCrosses() {
    for (let y = 0; y < this.crossCountY; y += 1) {
      for (let x = 0; x < this.crossCountX; x += 1) {
        let cross = new Cross(this.crossParams(x, y))
        this.crosses.push(cross)
      }
    }
  }

  crossCount(dimension, multiplier) {
    return Math.round(dimension / (multiplier * u)) + 1
  }

  crossParams(x, y) {
    return {
      color: colorLow,
      x: this.crossX(x, y),
      y: this.crossY(y),
    }
  }

  crossX(x, y) {
    return 1 + x * (4 * u) + (y % 2) * (2 * u)
  }

  crossY(y) {
    return 1 + y * (3 * u)
  }

  update() {
    this.crosses.map((cross) => cross.update())
  }
}

class Pointer {
  constructor() {
    this.moveTimeout = 0
    this.moved = false
    this.x = window.innerWidth / 2
    this.y = window.innerHeight / 2

    this.addEventListeners()
  }

  addEventListeners() {
    document.addEventListener('mousemove', this.updateCoords)
    document.addEventListener('touchmove', this.updateCoords)
  }

  updateCoords = (event) => {
    event.preventDefault()

    if (prefersReducedMotion) {
      return
    }

    this.x = Math.round(event.pageX - window.pageXOffset)
    this.y = Math.round(event.pageY - window.pageYOffset)

    this.moveTimeout = 50
    this.moved = true
  }

  update() {
    if (this.moveTimeout > 0) {
      this.moveTimeout -= 1
    }
  }
}

const field = new Field()
const pointer = new Pointer()

const animate = () => {
  requestAnimationFrame(animate)

  pointer.update()
  field.update()
  two.update()
}

animate()
