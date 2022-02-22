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
        if (x < 0 || y < 0 || x >= image.width || y >= image.height) {
            return [-1, -1, -1, -1] // impossible color
        } 
        const offset = (y * image.width + x) * 4
        return image.data.slice(offset,offset + 4)
    }

    setPixel(image,x,y,newColor){
        const offset = (y * image.width + x) * 4;
        image.data[offset + 0] = newColor[0]
        image.data[offset + 1] = newColor[1]
        image.data[offset + 2] = newColor[2]
        image.data[offset +3] = newColor[3]
    }

    flood(x,y,newColor){
        this.image = this.ctx.getImageData(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        const targetColor = this.getPixel(this.image,x,y)
        if(this.colorsMatch(targetColor,newColor)) return
        const pixelsToCheck = [x,y]
        let a = 0
        while(pixelsToCheck.length > 0 && a < 600 ){
            const y = pixelsToCheck.pop()
            const x = pixelsToCheck.pop()
            const currentColor = this.getPixel(this.image,x,y)
            if(this.colorsMatch(currentColor,targetColor)){
                this.setPixel(this.image,x,y,newColor)
                pixelsToCheck.push(x - 1,y)
                pixelsToCheck.push(x + 1,y)
                pixelsToCheck.push(x,y + 1)
                pixelsToCheck.push(x,y - 1)
            }
        }
        this.ctx.putImageData(this.image, 0, 0);

    }
}

export default FloodFill