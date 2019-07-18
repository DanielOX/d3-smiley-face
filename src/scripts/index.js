import { select, arc } from 'd3'

const svg = select('svg')

const width = window.innerWidth;
const height = window.innerHeight

svg.attr('width', width);
svg.attr('height', height)

const g = svg.append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`)

const circle = g.append('circle')
    .attr('r', height / 2.5)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')

const eyeSpacing = 100
const eyeYoffset = -70
const eyeRadius = 30;
const eyeBrowWidth = 50;
const eyeBrowHeight = 20;
const eyeBrowYOffset = -70;

const eyesG = g.append('g')
    .attr('transform', `translate(0,${eyeYoffset})`)


const leftEye = eyesG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing)

const rightEye = eyesG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', +eyeSpacing)



const eyeBrowsG = eyesG.append('g')
    .attr('transform', `translate(0,${eyeBrowYOffset - 50})`);
eyeBrowsG
    .transition().duration(1000)
    .attr('transform', `translate(0,${eyeBrowYOffset - 50})`)
    .transition().duration(1000)
    .attr('transform', `translate(0,${eyeBrowYOffset})`)

const leftEyebrow = eyeBrowsG.append('rect')
    .attr('x', -eyeSpacing - eyeBrowWidth / 2)
    .attr('width', eyeBrowWidth)
    .attr('height', eyeBrowHeight)

const RightEyebrow = eyeBrowsG
    .append('rect')
    .attr('x', +eyeSpacing - eyeBrowWidth / 2)
    .attr('width', eyeBrowWidth)
    .attr('height', eyeBrowHeight)


const mouth = g.append('path')
    .attr('d', arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }))


