function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
  background(51)
  noStroke()

  ambientLight(50)
  let locX = mouseX - windowWidth / 2
  let locY = mouseY - windowHeight / 2
  pointLight(255, 255, 255, locX, locY, 255)
  let dirX = (mouseX / windowWidth - 0.5) * 2
  let dirY = (mouseY / windowHeight - 0.5) * 2
  directionalLight(255, 0, 0, -dirX, -dirY, -1)

  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  specularMaterial(255, 100, 255, 255)
  shininess(255)
  box(300)
  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  setup()
}
