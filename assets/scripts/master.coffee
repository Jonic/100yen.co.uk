
canvas          = document.getElementById('dots')
context         = canvas.getContext('2d')
maxVelocity     = 10
particlesArray  = []
particlesIds    = []
particlesOrigin = {
	x: 0
	y: 0
}

class Particle

	constructor: ->
		@id       = Math.random().toString(36).substr(2, 5)
		@alpha    = random(0.75, 1)
		@rgb      = randomColor()
		@diameter = Math.round(random(50))
		@radius   = Math.round(@diameter / 2)

		@position = {
			x: particlesOrigin.x - @radius
			y: particlesOrigin.y - @radius
		}

		@velocity = {
			x: random(0, maxVelocity) - (maxVelocity / 2)
			y: random(0, maxVelocity) - (maxVelocity / 2)
		}

		return this

	updateValues: ->
		@position.x += @velocity.x
		@position.y += @velocity.y

	draw: ->
		context.fillStyle = 'rgba(' + @rgb + ', ' + @alpha + ')'
		context.beginPath()
		context.arc(@position.x, @position.y, @radius, 0, 2 * Math.PI, true)
		context.closePath()
		context.fill()

	withinCanvasBounds: ->
		result = true

		if @position.x < -@diameter
			result = false
		else if @position.x > canvas.width + @diameter
			result = false

		if @position.y < -@diameter
			result = false
		else if @position.y > canvas.height + @diameter
			result = false

		return result

addParticle = ->
	particle = new Particle()

	particlesArray.unshift(particle)
	particlesIds.unshift(particle.id)

	return

animationLoop = ->
	window.requestAnimationFrame(animationLoop)

	particlesToDelete = []

	context.clearRect(0, 0, canvas.width, canvas.height)

	for particle in particlesArray
		if particle.withinCanvasBounds()
			particle.updateValues()
			particle.draw()
		else
			particlesToDelete.push(particle.id)

	destroyParticlesOutsideCanvasBounds(particlesToDelete)

	return

destroyParticlesOutsideCanvasBounds = (particlesToDelete) ->
	for id in particlesToDelete
		index    = particlesIds.indexOf(id)
		particle = particlesArray[index]

		if particle?
			particlesArray.splice(index, 1)
			particlesIds.splice(index, 1)

	return

random = (min, max) ->
	unless min?
		min = 0
		max = 1
	else unless max?
		max = min
		min = 0

	return (Math.random() * (max - min)) + min

randomColor = ->

	r = randomInteger(0, 200)
	g = randomInteger(0, 200)
	b = randomInteger(0, 200)

	return "#{r}, #{g}, #{b}"

randomInteger = (min, max) ->
	unless max?
		max = min
		min = 0

	return Math.floor(Math.random() * (max + 1 - min)) + min

updateParticlesOrigin = (event) ->
	event.preventDefault()

	particlesOrigin.x = event.pageX
	particlesOrigin.y = event.pageY

	addParticle()

	return

canvas.width  = document.body.clientWidth
canvas.height = document.body.clientHeight

devicePixelRatio  = window.devicePixelRatio || 1
backingStoreRatio = context.webkitBackingStorePixelRatio || context.backingStorePixelRatio || 1
ratio             = devicePixelRatio / backingStoreRatio

if devicePixelRatio != backingStoreRatio
	oldWidth  = canvas.width
	oldHeight = canvas.height

	canvas.width  = oldWidth * ratio
	canvas.height = oldHeight * ratio

	canvas.style.width  = oldWidth + 'px'
	canvas.style.height = oldHeight + 'px'

	context.scale(ratio, ratio)

document.addEventListener('mousemove', updateParticlesOrigin)
document.addEventListener('touchmove', updateParticlesOrigin)

animationLoop()
