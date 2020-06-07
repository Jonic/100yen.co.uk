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

class Pointer {
  constructor() {
    this.x = windowWidth / 2
    this.y = windowHeight / 2

    this.addEventListeners()
  }

  addEventListeners() {
    document.addEventListener('mousemove', (event) => this.updateCoords(event))
    document.addEventListener('touchmove', (event) => this.updateCoords(event))
  }

  updateCoords(event) {
    event.preventDefault()

    if (prefersReducedMotion) {
      return
    }

    this.x = Math.round(event.pageX - window.pageXOffset)
    this.y = Math.round(event.pageY - window.pageYOffset)
  }
}

let prefersReducedMotion = false
let windowHeight
let windowWidth

const motionMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
const detectMotion = (mq) => (prefersReducedMotion = mq.matches)
detectMotion(motionMQ)
motionMQ.addListener(detectMotion)

window.addEventListener('DOMContentLoaded', () => {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight

  const planesNodes = document.querySelectorAll('.plane')
  const planes = Array.from(planesNodes)
  const pointer = new Pointer()
  const rotationFactor = 20

  const animate = () => {
    requestAnimationFrame(animate)

    const rotateY =
      (pointer.x / windowWidth) * rotationFactor - rotationFactor / 2
    const rotateX =
      (pointer.y / windowHeight) * rotationFactor - rotationFactor / 2
    let translateZ = 0

    planes.map((plane) => {
      const transformValues = [
        `rotateX(${rotateX}deg)`,
        `rotateY(${-rotateY}deg)`,
        `translate3d(-50%, -50%, ${translateZ}px)`,
      ]

      plane.style.transform = transformValues.join(' ')

      translateZ += 50
    })
  }

  animate()
})
