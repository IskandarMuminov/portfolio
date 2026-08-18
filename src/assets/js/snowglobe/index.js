import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import ScreenShake from './components/ScreenShake.js'
import Ground from './components/ground.js'
import snowman from './components/snowman.js'
import House from './components/house.js'
import snowFall from './components/snowfall.js'
import forest from './components/forest.js'
import Stand from './components/Stand.js'
import MusicHandler from './components/MusicHandler.js'

import normalMapUrl from '../../textures/SnowGlobeDemo/img/normal.jpg'
import skyboxUrl from '../../textures/SnowGlobeDemo/blockadesLabsSkybox/winter.jpg'
import jingleUrl from '../../textures/SnowGlobeDemo/audio/jingle.mp3'

let snowActive = false

/**
 * Debug
 */
const gui = new GUI()
const options = {
  transmission: 1,
  thickness: 0,
  roughness: 0,
  envMapIntensity: 1.5,
  clearcoat: 0,
  clearcoatRoughness: 0,
  normalScale: 0,
  clearcoatNormalScale: 0,
  normalRepeat: 1
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
  width: canvas.parentElement.clientWidth,
  height: canvas.parentElement.clientHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// Head-on in front of the globe, slightly above its center, at roughly the
// same distance as the previous raised three-quarter view.
camera.position.set(7, 1, 5)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x1f1e1c, 1)
// Roll off bright values instead of hard-clipping them to flat white
// (visible through the clear glass where the bright background shows through).
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1

window.addEventListener('resize', () => {
  sizes.width = canvas.parentElement.clientWidth
  sizes.height = canvas.parentElement.clientHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Screen shake
const screenShakeInstance = ScreenShake()
function triggerShake() {
  screenShakeInstance.shake(camera, new THREE.Vector3(2, 2, 0), 1000)
  snowActive = true
}

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
directionalLight.position.set(0, 5, 10)

// Clock
const clock = new THREE.Clock()

const textureLoader = new THREE.TextureLoader()

/**
 * Environment map
 */
const environmentMap = textureLoader.load(skyboxUrl)
environmentMap.mapping = THREE.EquirectangularReflectionMapping
environmentMap.colorSpace = THREE.SRGBColorSpace
scene.background = environmentMap

/**
 * Glass globe
 */
const normalMapTexture = textureLoader.load(normalMapUrl)
normalMapTexture.wrapS = THREE.RepeatWrapping
normalMapTexture.wrapT = THREE.RepeatWrapping

const geometry = new THREE.IcosahedronGeometry(3, 20)
const glassMaterial = new THREE.MeshPhysicalMaterial({
  transmission: options.transmission,
  thickness: options.thickness,
  roughness: options.roughness,
  envMap: environmentMap,
  envMapIntensity: options.envMapIntensity,
  clearcoat: options.clearcoat,
  clearcoatRoughness: options.clearcoatRoughness,
  normalScale: new THREE.Vector2(options.normalScale),
  normalMap: normalMapTexture,
  clearcoatNormalMap: normalMapTexture,
  clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale)
})
const glassMesh = new THREE.Mesh(geometry, glassMaterial)

// Bowl (semi-circle terrain base)
const semiCircleTerrain = new THREE.SphereGeometry(3, 32, 32, 0, Math.PI, 0, Math.PI)
const bowlMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  metalness: 0.5,
  roughness: 0.5
})
const bowlMesh = new THREE.Mesh(semiCircleTerrain, bowlMaterial)
bowlMesh.rotation.set(Math.PI / -2, Math.PI, 0)

// Scene contents
const ground = new Ground()

const snowMan = new snowman()
snowMan.scale.set(0.005, 0.005, 0.005)
snowMan.position.set(1, 0.5, 0)
snowMan.rotation.y = 1

const house = new House()
house.scale.set(0.005, 0.005, 0.005)
house.position.set(0, 0.5, 1)
house.rotation.y = 1

const stand = new Stand()
stand.position.y = -3.5

const snowfall = new snowFall()
snowfall.scale.set(0.005, 0.005, 0.005)

const Forest = new forest()
Forest.scale.set(0.003, 0.003, 0.002)
Forest.position.set(0.5, 0.5, 0)
Forest.rotation.y = 3
// Placed after the transform above, so the house/snowman keep-out zones can be
// converted into the forest's local space. The stand is deliberately excluded:
// it sits below the globe, so it never collides with the trees. Trees that
// would poke out through the glass are discarded.
Forest.populate({ obstacles: [house, snowMan], container: glassMesh })

// Snow burst (triggered by shake) — a single InstancedMesh instead of 1000
// individual Mesh objects, so this is one draw call instead of a thousand.
const snowflakeGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05)
const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
const numParticles = 100
const globeRadius = 2.9
const snowParticles = new THREE.InstancedMesh(snowflakeGeometry, snowflakeMaterial, numParticles)
const snowflakePositions = new Float32Array(numParticles * 3)
const snowDummy = new THREE.Object3D()

function randomSnowPosition(out, index) {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.random() * Math.PI
  const radius = Math.cbrt(Math.random()) * globeRadius
  out[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
  out[index * 3 + 1] = radius * Math.cos(phi)
  out[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
}

for (let i = 0; i < numParticles; i++) {
  randomSnowPosition(snowflakePositions, i)
  snowDummy.position.set(snowflakePositions[i * 3], snowflakePositions[i * 3 + 1], snowflakePositions[i * 3 + 2])
  snowDummy.updateMatrix()
  snowParticles.setMatrixAt(i, snowDummy.matrix)
}

// Music
const musicHandler = new MusicHandler()
musicHandler.loadAudio(jingleUrl).then(() => musicHandler.play())

/**
 * Scene assembly
 */
scene.add(
  glassMesh,
  bowlMesh,
  camera,
  ambientLight,
  directionalLight,
  ground,
  snowMan,
  house,
  snowfall,
  Forest,
  stand
)

/**
 * Animate
 */
function animate() {
  requestAnimationFrame(animate)

  const delta = clock.getDelta()

  controls.update()
  screenShakeInstance.update(camera)
  snowfall.update(delta)

  if (snowActive) {
    if (!scene.children.includes(snowParticles)) {
      scene.add(snowParticles)
    }

    for (let i = 0; i < numParticles; i++) {
      snowflakePositions[i * 3 + 1] -= 0.001
      if (snowflakePositions[i * 3 + 1] < -1) {
        randomSnowPosition(snowflakePositions, i)
      }
      snowDummy.position.set(snowflakePositions[i * 3], snowflakePositions[i * 3 + 1], snowflakePositions[i * 3 + 2])
      snowDummy.updateMatrix()
      snowParticles.setMatrixAt(i, snowDummy.matrix)
    }
    snowParticles.instanceMatrix.needsUpdate = true
  }

  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}
animate()

/**
 * GUI options
 */
gui.add(options, 'transmission', 0, 1, 0.01).onChange((val) => { glassMaterial.transmission = val })
gui.add(options, 'thickness', 0, 5, 0.1).onChange((val) => { glassMaterial.thickness = val })
gui.add(options, 'roughness', 0, 1, 0.01).onChange((val) => { glassMaterial.roughness = val })
gui.add(options, 'envMapIntensity', 0, 3, 0.1).onChange((val) => { glassMaterial.envMapIntensity = val })
gui.add(options, 'clearcoat', 0, 1, 0.01).onChange((val) => { glassMaterial.clearcoat = val })
gui.add(options, 'clearcoatRoughness', 0, 1, 0.01).onChange((val) => { glassMaterial.clearcoatRoughness = val })
gui.add(options, 'normalScale', 0, 5, 0.01).onChange((val) => { glassMaterial.normalScale.set(val, val) })
gui.add(options, 'clearcoatNormalScale', 0, 5, 0.01).onChange((val) => { glassMaterial.clearcoatNormalScale.set(val, val) })
gui.add(options, 'normalRepeat', 1, 4, 1).onChange((val) => { normalMapTexture.repeat.set(val, val) })
gui.add({ triggerShake }, 'triggerShake').name('Shake')
gui.add({ play: () => musicHandler.play() }, 'play').name('Play music')
gui.add({ pause: () => musicHandler.pause() }, 'pause').name('Pause music')
