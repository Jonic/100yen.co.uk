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

const updateRotation = (element, factor) => {
  element
}
const pointer = new Pointer()

window.addEventListener('DOMContentLoaded', () => {
  const planesNodes = document.querySelectorAll('.plane')
  const planes = Array.from(planesNodes)

  windowWidth = window.innerWidth
  windowHeight = window.innerHeight

  const rotationFactor = 20

  // const textNodes = document.querySelectorAll('.fit-text')
  // Array.from(textNodes).map((textNode) => {
  //   console.log(textNode.offsetWidth / (1 * 10))
  //   const fontSize = Math.max(
  //     Math.min(textNode.offsetWidth / 5, parseFloat(Number.POSITIVE_INFINITY)),
  //     parseFloat(Number.NEGATIVE_INFINITY)
  //   )
  //   textNode.style.fontSize = `${fontSize}rem`
  // })

  const animate = () => {
    requestAnimationFrame(animate)

    const rotateY =
      (pointer.x / windowWidth) * rotationFactor - rotationFactor / 2
    const rotateX =
      (pointer.y / windowHeight) * rotationFactor - rotationFactor / 2

    let translateZ = 0

    planes.map((plane) => {
      plane.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)
      translate3d(-50%, -50%, ${translateZ}px)`
      translateZ += 50
    })
  }

  animate()
})
