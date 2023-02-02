var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5

var renderer = new THREE.WebGLRenderer({ logarithmicDepthBuffer: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const hemisphereLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 0.75)
scene.add(hemisphereLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(0, 10, 5)
directionalLight.target.position.set(-5, 0, 0)
scene.add(directionalLight)
scene.add(directionalLight.target)

var ringGeometry = new THREE.TorusGeometry(2, 0.3, 12, 18)
var ringMaterial = new THREE.MeshPhongMaterial({
  color: 0xffff00,
  flatShading: true,
  side: THREE.DoubleSide,
})

var ring = new THREE.Mesh(ringGeometry, ringMaterial)
scene.add(ring)

function animate() {
  requestAnimationFrame(animate)

  ring.rotation.x += 0.015
  ring.rotation.y += 0.02

  renderer.render(scene, camera)
}

animate()
