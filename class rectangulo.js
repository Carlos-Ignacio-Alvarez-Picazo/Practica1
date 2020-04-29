class rectangulo
{
    constructor (base,altura)
    {
        this.base=base

        this.altura=altura
    }
    area()
    {
        return this.base*this.altura
    }  
}
let t2=new rectangulo(base,altura)
console.log(t2.area());
