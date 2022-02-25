class FloodFill{
    constructor(ctx){
        this.ctx = ctx
    }

    getPixel(x,y,image){
        if(x < 0 || y < 0 || x >=  image.width || y >= image.height){
            return [-1,-1,-1,-1]
        }
        const offset = (y * image.width + x) * 4
        return image.data.slice(offset,offset+4)
    }

    setPixel(image,x,y,newColor){
        const offset = (y * image.width + x) * 4
        image.data[offset] = newColor[0]
        image.data[offset + 1] = newColor[1]
        image.data[offset + 2] = newColor[2]
        image.data[offset + 3] = newColor[3]
    }

    colorsMatch(currentColor,newColor){
        return currentColor[0] === newColor[0] && currentColor[1] === newColor[1] && currentColor[2] === newColor[2] && currentColor[3] === newColor[3]
    }

    flood(x,y,newColor){
        const {width,height} = this.ctx.canvas
        const image = this.ctx.getImageData(0,0,width,height)
        const targetColor = this.getPixel(x,y,image)
        if(this.colorsMatch(targetColor,newColor)) return
        const pixelToCheck = [x,y]
        while(pixelToCheck.length > 0){
            const y = pixelToCheck.pop()
            const x = pixelToCheck.pop()
            const currentColor = this.getPixel(x,y,image)
            if(this.colorsMatch(currentColor,targetColor)){
                this.setPixel(image,x,y,newColor)
                pixelToCheck.push(x - 1,y)
                pixelToCheck.push(x + 1,y)
                pixelToCheck.push(x,y + 1)
                pixelToCheck.push(x,y - 1)
            }
        }
        this.ctx.putImageData(image,0,0)

    }
}

export default FloodFill