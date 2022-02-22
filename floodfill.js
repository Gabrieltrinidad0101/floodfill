class FloodFill{
    constructor(ctx){
        this.ctx = ctx
        this.x = null
        this.y = null
        this.image = null
    }

    colorsMatch(currentColor,newColor){
        return currentColor[0] === newColor[0] && currentColor[1] === newColor[1] && currentColor[2] === newColor[2] && currentColor[3]  === newColor[3]
    }

    getPixel(image,x,y){
        console.log(image.getImageData(x,y,1,1))
    }

    setPixel(image,newColor){
        image.data[0] = newColor[0]
        image.data[1] = newColor[1]
        image.data[2] = newColor[2]
        image.data[3] = newColor[3]
    }

    flood(x,y,newColor){
        const image = this.ctx.getImageData(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        console.log(this.getPixel(image,x,y))
        const targetColor = this.ctx.getImageData(x,y,1,1)
        if(this.colorsMatch(targetColor.data,newColor)) return
        const pixelsToCheck = [x,y]
        while(pixelsToCheck.length > 0 ){
            const y = pixelsToCheck.pop()
            const x = pixelsToCheck.pop()
            const currentColor = this.ctx.getImageData(x,y,1,1)
            if(this.colorsMatch(currentColor.data,targetColor)){
                this.setPixel(image,x,y,newColor)
                pixelsToCheck.push(x - 1,y)
                pixelsToCheck.push(x + 1,y)
                pixelsToCheck.push(x,y - 1)
                pixelsToCheck.push(x,y + 1)
            }
        }
        this.ctx.putImageData(this.image, 0, 0);

    }
}

export default FloodFill