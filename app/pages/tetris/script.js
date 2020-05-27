const tetrominoShapes = [
  {
    name: 'I',
    color: '#FFF1E8',
    // prettier-ignore
    matrix: [
      1, 0, 0, 0,
      1, 0, 0, 0,
      1, 0, 0, 0,
      1, 0, 0, 0
    ]
  },
  {
    name: 'O',
    color: '#FFEC27',
    // prettier-ignore
    matrix: [
      1, 1, 0, 0,
      1, 1, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  },
  {
    name: 'T',
    color: '#FF77A8',
    // prettier-ignore
    matrix: [
      1, 1, 1, 0,
      0, 1, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  },
  {
    name: 'S',
    color: '#00E436',
    // prettier-ignore
    matrix: [
      0, 1, 1, 0,
      1, 1, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  },
  {
    name: 'Z',
    color: '#FF004D',
    // prettier-ignore
    matrix: [
      1, 1, 0, 0,
      0, 1, 1, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  },
  {
    name: 'J',
    color: '#29ADFF',
    // prettier-ignore
    matrix: [
      0, 1, 0, 0,
      0, 1, 0, 0,
      1, 1, 0, 0,
      0, 0, 0, 0
    ]
  },
  {
    name: 'L',
    color: '#FFA300',
    // prettier-ignore
    matrix: [
      1, 0, 0, 0,
      1, 0, 0, 0,
      1, 1, 0, 0,
      0, 0, 0, 0
    ]
  },
]

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

const randomTetromino = () => {
  return tetrominoShapes[Math.floor(Math.random() * tetrominoShapes.length)]
}

// https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript
const rotateMatrix = (matrix) => {
  const newMatrix = []
  const rowLength = Math.sqrt(matrix.length)

  newMatrix.length = matrix.length

  for (let i = 0; i < matrix.length; i += 1) {
    const x = i % rowLength
    const y = Math.floor(i / rowLength)

    const newX = rowLength - y - 1
    const newY = x

    const newPosition = newY * rowLength + newX
    newMatrix[newPosition] = matrix[i]
  }

  return newMatrix
}

class TetrisBoard {
  constructor(scene) {
    this.maxTetrominos = 100
    scene = scene
    this.tetrominos = []
    this.generationTimeout = this.newGenerationTimeout()

    this.populateTetrominos()
  }

  newGenerationTimeout() {
    return randomInt(5, 10)
  }

  populateTetrominos() {
    if (this.generationTimeout > 0) {
      this.generationTimeout -= 1
      return
    }

    if (this.tetrominos.length >= this.maxTetrominos) {
      return
    }

    const tetromino = new Tetromino()

    scene.add(tetromino.object)
    this.tetrominos.push(tetromino)
    this.generationTimeout = this.newGenerationTimeout()
  }

  removeTetromino(tetromino) {
    const selectedObject = scene.getObjectByName(tetromino.object.name)
    scene.remove(selectedObject)

    const index = this.tetrominos.indexOf(tetromino)
    this.tetrominos.splice(index, 1)
  }

  tetrominoIsNotVisible(tetromino) {
    const position = new THREE.Vector3()
    tetromino.object.getWorldPosition(position)

    return position.y < tetromino.deletionDepth
  }

  update() {
    this.populateTetrominos()

    this.tetrominos.map((tetromino) => {
      if (this.tetrominoIsNotVisible(tetromino)) {
        this.removeTetromino(tetromino)
        return
      }

      tetromino.update()
    })
  }
}

class TetrominoCube {
  constructor({ color, x, y }) {
    const cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial)

    cube.material.color.set(color)
    cube.position.set(x, y, 0)

    return cube
  }

  get cubeGeometry() {
    return new THREE.BoxGeometry(1, 1, 1)
  }

  get cubeMaterial() {
    return new THREE.MeshPhongMaterial({
      flatShading: true,
      side: THREE.DoubleSide,
      map: this.cubeTexture,
    })
  }

  get cubeTexture() {
    const texture = textureLoader.load('/app/pages/tetris/images/texture.png')

    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping

    return texture
  }
}

class Tetromino {
  constructor() {
    this.object = new THREE.Object3D()
    this.shape = this.selectShape()
    this.fallSpeed = this.setFallSpeed()

    this.object.name = this.setGroupName()
    this.matrix = this.shape.matrix
    this.z = randomInt(-40, -5)
    this.depthFactor = 15
    this.deletionDepth = -this.depthFactor + this.z

    this.setGroupPosition()
    this.setShapeRotation()
    this.createCubes()
  }

  createCubes() {
    for (let x = 0; x < 4; x += 1) {
      for (let y = 0; y < 4; y += 1) {
        if (!this.matrix[x * 4 + y]) {
          continue
        }

        let cube = new TetrominoCube({
          color: this.shape.color,
          x,
          y,
        })

        this.object.add(cube)
      }
    }
  }

  selectShape() {
    return randomTetromino()
  }

  setFallSpeed() {
    return random(0.05, 0.1)
  }

  setGroupName() {
    return ['cube_', Date.now(), Math.random() * (1000 - 0) + 0].join('')
  }

  setGroupPosition() {
    const x = randomInt(-30, 30)
    const y = this.depthFactor - this.z

    this.object.position.set(x, y, this.z)
  }

  setShapeRotation() {
    let rotationCount = randomInt(0, 3)

    for (rotationCount; rotationCount >= 0; rotationCount -= 1) {
      this.matrix = rotateMatrix(this.matrix)
    }
  }

  update() {
    this.object.position.y -= this.fallSpeed
  }
}

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.75)
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  logarithmicDepthBuffer: true,
})
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()

camera.position.z = 5
directionalLight.position.set(0, 10, 5)
directionalLight.target.position.set(-5, 0, 0)
renderer.setClearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

scene.add(hemisphereLight)
scene.add(directionalLight)
scene.add(directionalLight.target)

const tetrisBoard = new TetrisBoard(scene)

const animate = () => {
  requestAnimationFrame(animate)
  tetrisBoard.update()
  renderer.render(scene, camera)
}

animate()
