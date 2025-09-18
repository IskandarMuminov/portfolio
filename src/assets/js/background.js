import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Particles
 */
// Parameters
const particlesCount = 500
const particlesSize = 0.03
const movementFactor = 0.5 // How much particles move with mouse

// Geometry
const positions = new Float32Array(particlesCount * 3)
const colors = new Float32Array(particlesCount * 3)

for(let i = 0; i < particlesCount; i++)
{
    // Random positions
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    
    // Random colors (pastel shades)
    colors[i * 3 + 0] = Math.random() * 0.5 + 0.5 // R
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.5 // G
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.5 // B
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    size: particlesSize,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

// Store original positions for reference
const originalPositions = positions.slice()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 5
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>
{
    cursor.x = (event.clientX / sizes.width - 0.5) * movementFactor
    cursor.y = (event.clientY / sizes.height - 0.5) * movementFactor
})

/**
 * Animate
 */
const tick = () =>
{
    // Update particles based on mouse position
    const positions = particlesGeometry.attributes.position.array
    
    for(let i = 0; i < particlesCount; i++)
    {
        // Apply mouse movement to original positions
        positions[i * 3 + 0] = originalPositions[i * 3 + 0] + cursor.x
        positions[i * 3 + 1] = originalPositions[i * 3 + 1] + cursor.y
    }
    
    particlesGeometry.attributes.position.needsUpdate = true

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()