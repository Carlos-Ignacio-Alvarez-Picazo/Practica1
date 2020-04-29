class triangulo
{
    constructor (base,altura)
    {
        this.base=base

        this.altura=altura
    }
    area()
    {
        return (this.base*this.altura)/2
    }
}
let t3=new triangulo(base,altura)
console.log(t3.area());
