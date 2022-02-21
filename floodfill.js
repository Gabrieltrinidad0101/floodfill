class FloodFill{
    constructor(ctx){
        this.ctx = ctx
        this.x = null
        this.y = null
        this.imageData = null
    }

    colorsMatch(currentColor,newColor){
        return currentColor[0] === newColor[0] && currentColor[1] === newColor[1] && currentColor[2] === newColor[2] && currentColor[3]  === newColor[3]
    }

    flood(x,y,newColor){
        const currentColor = this.ctx.getImageData(x,y,1,1)
        console.log(currentColor[0], newColor[0] , currentColor[1], newColor[1] , currentColor[2], newColor[2] , currentColor[3] , newColor[3])
        if(!this.colorsMatch(currentColor,newColor)) return
        console.log("hello world")
    }
}

export default FloodFill