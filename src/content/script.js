/* eslint-disable no-magic-numbers */
let canvas = document.getElementById('dots')
let context = canvas.getContext('2d')
let maxVelocity = 10
let particlesArray = []
let particlesIds = []
let particlesOrigin = {
  x: 0,
  y: 0,
}

let Particle = function() {
  this.id = Math.random()
    .toString(36)
    .substr(2, 5)
  this.alpha = random(0.75, 1)
  this.rgb = randomColor()
  this.size = Math.round(random(50))
  this.half = Math.round(this.size / 2)
  // this.colorStop = this.size / 40
  this.colorStop = 1

  this.position = {
    x: particlesOrigin.x - this.half,
    y: particlesOrigin.y - this.half,
  }

  this.velocity = {
    x: random(0, maxVelocity) - maxVelocity / 2,
    y: random(0, maxVelocity) - maxVelocity / 2,
  }
}

Particle.prototype.updateValues = function() {
  this.position.x += this.velocity.x
  this.position.y += this.velocity.y
}

Particle.prototype.draw = function() {
  let rgb = this.rgb.r + ', ' + this.rgb.g + ', ' + this.rgb.b

  if (this.colorStop < 1) {
    let radgrad = context.createRadialGradient(
      this.position.x + this.half,
      this.position.y + this.half,
      0,
      this.position.x + this.half,
      this.position.y + this.half,
      this.half,
    )

    radgrad.addColorStop(0, 'rgba(' + rgb + ', ' + this.alpha + ')')
    radgrad.addColorStop(
      this.colorStop,
      'rgba(' + rgb + ', ' + this.alpha + ')',
    )
    radgrad.addColorStop(1, 'rgba(' + rgb + ', 0)')

    context.fillStyle = radgrad
    context.fillRect(this.position.x, this.position.y, this.size, this.size)
  } else {
    context.fillStyle = 'rgba(' + rgb + ', ' + this.alpha + ')'
    context.beginPath()
    context.arc(
      this.position.x,
      this.position.y,
      this.half,
      0,
      2 * Math.PI,
      true,
    )
    context.closePath()
    context.fill()
  }
}

Particle.prototype.withinCanvasBounds = function() {
  let result = true

  if (
    this.position.x < -this.size ||
    this.position.x > canvas.width + this.size ||
    this.position.y < -this.size ||
    this.position.y > canvas.height + this.size
  ) {
    result = false
  }

  return result
}

const addParticle = () => {
  let particle = new Particle()

  particlesArray.unshift(particle)
  particlesIds.unshift(particle.id)
}

const animationLoop = () => {
  window.requestAnimationFrame(animationLoop)

  let particle
  let particlesToDelete = []

  context.clearRect(0, 0, canvas.width, canvas.height)

  for (particle of particlesArray) {
    if (particle.withinCanvasBounds()) {
      particle.updateValues()
      particle.draw()
    } else {
      particlesToDelete.push(particle.id)
    }
  }

  destroyParticlesOutsideCanvasBounds(particlesToDelete)
}

const destroyParticlesOutsideCanvasBounds = particlesToDelete => {
  for (let id of particlesToDelete) {
    let index = particlesIds.indexOf(id)
    let particle = particlesArray[index]

    if (particle) {
      particlesArray.splice(index, 1)
      particlesIds.splice(index, 1)
    }
  }
}

const random = (min, max) => {
  if (typeof min === 'undefined') {
    min = 0
    max = 1
  } else if (typeof max === 'undefined') {
    max = min
    min = 0
  }

  return Math.random() * (max - min) + min
}

const randomColor = () => {
  return {
    r: randomInteger(0, 200),
    g: randomInteger(0, 200),
    b: randomInteger(0, 200),
  }
}

const randomInteger = (min, max) => {
  if (typeof max === 'undefined') {
    max = min
    min = 0
  }

  return Math.floor(Math.random() * (max + 1 - min)) + min
}

const updateParticlesOrigin = event => {
  event.preventDefault()

  particlesOrigin.x = event.pageX
  particlesOrigin.y = event.pageY

  addParticle()
}

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

let devicePixelRatio = window.devicePixelRatio || 1
let backingStoreRatio =
  context.webkitBackingStorePixelRatio || context.backingStorePixelRatio || 1
let ratio = devicePixelRatio / backingStoreRatio

if (devicePixelRatio !== backingStoreRatio) {
  let oldWidth = canvas.width
  let oldHeight = canvas.height

  canvas.width = oldWidth * ratio
  canvas.height = oldHeight * ratio

  canvas.style.width = oldWidth + 'px'
  canvas.style.height = oldHeight + 'px'

  context.scale(ratio, ratio)
}

document.addEventListener('mousemove', updateParticlesOrigin)
document.addEventListener('touchmove', updateParticlesOrigin)

animationLoop()
