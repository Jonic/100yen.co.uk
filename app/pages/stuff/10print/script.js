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

const tof = () => {
  return Boolean(randomInt(0, 1))
}

window.addEventListener('DOMContentLoaded', () => {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight + 100

  const two = new Two({
    width: windowWidth,
    height: windowHeight + 100,
    type: Two.Types.webgl,
  }).appendTo(document.querySelector('.c-two-js'))

  const uDimension = Math.max(windowHeight, windowWidth)
  const unit = (2 * Math.round(uDimension / 50)) / 2
  // const unit = 50
  const unitHalf = unit / 2

  const pieceCountX = Math.ceil(windowWidth / unit)
  const pieceCountY = Math.ceil(windowHeight / unit)

  let addPiece = true
  let animId
  let x = 0
  let y = 0

  const animate = () => {
    animId = window.requestAnimationFrame(animate)

    if (!addPiece) {
      window.cancelAnimationFrame(animId)
      return
    }

    let translation = {
      x: x * unit,
      y: y * unit,
    }

    const mask = two.makeRectangle(0, 0, unit, unit)
    mask.translation.set(translation.x + unitHalf, translation.y + unitHalf)
    mask.linewidth = 0
    mask.noStroke()
    mask.fill = 'rgba(0, 0, 0, 0.05)'

    let n1 = 0
    let n2 = unit

    if (tof()) {
      line = two.makeLine(n1, n1, n2, n2)
    } else {
      line = two.makeLine(n2, n1, n1, n2)
    }

    line.cap = 'square'
    line.linewidth = unit / 4
    line.stroke = '#ddf'

    const container = two.makeGroup(line)
    container.mask = mask
    container.translation.set(translation.x, translation.y)
    two.update()

    x += 1

    if (x > pieceCountX) {
      x = 0
      y += 1

      if (y > pieceCountY) {
        addPiece = false
      }
    }
  }

  animate()
})
