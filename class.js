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
const obj2 = new Rectangle(7,4,"green");
const area = obj.area();
const p = obj.paint()
const area2 = obj.area();
const p2 = obj2.paint()
console.log(area);