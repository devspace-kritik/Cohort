class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width*this.height;
        return area;
    }
    paint(){
        console.log(`painting with color ${this.color}`);
    } 
}
const obj = new Rectangle(2,4,"red");
const area = obj.area();
const p = obj.paint()
console.log(area);