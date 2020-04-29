class Cuadrado
{
    constructor (lado)
    {
        this.lado=lado;

    }
    area()
    {
        return this.lado*this.lado
    }
}
let t1=new Cuadrado(lado)
console.clear();
console.log(t1.area());
