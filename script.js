import FloodFill from "./floodfill.js"
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const cube = document.querySelector(".cube")
const paint = document.querySelector(".paint")

let functionRun = "paint"

const floodfill = new FloodFill(ctx)

paint.addEventListener("click",_=>functionRun = "paint")
cube.addEventListener("click",_=>functionRun = "cube")

let canDraw = false

canvas.addEventListener("mousedown",e=>{
    if(functionRun === "paint"){
        canDraw = true
        ctx.beginPath()
        ctx.moveTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop)
        ctx.lineWidth = 10
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.stroke()
        return
    }
    const x = e.clientX - canvas.offsetLeft
    const y = e.clientY - canvas.offsetTop
    floodfill.flood(x,y,[165,0,0,255])
})

canvas.addEventListener("mousemove",e=>{
    if(functionRun === "paint"){
        if(canDraw){
            ctx.lineTo(e.clientX - canvas.offsetLeft,e.clientY - canvas.offsetTop)
            ctx.stroke()
        }
        return
    }
})

canvas.addEventListener("mouseup",e=>{
    if(functionRun === "paint"){
        canDraw = false
    }
})
