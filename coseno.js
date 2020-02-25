var numero1=6;
var numero2=4;
var numero3=2;
var exponete1;
var x=2,res1,re2,re3;
console.clear();
console.log(factorial1(numero1));
console.log(factorial2(numero2));
console.log(factorial3(numero3));
console.log(coseno(x));

function factorial1(x){
    var fact=1;
    for(var i=1;i<=numero1;i++)
        fact*=i;         
        return fact;
          res1=(fact)/(fact-fact)
          console.log(res1)
}
function factorial2(x){
    var fact=1;
    for(var i=1;i<=numero2;i++)
        fact*=i;         
        return fact;
          res2=(fact)/(fact-fact)
          console.log(res2)
}
function factorial3(x){
    var fact=1;
    for(var i=1;i<=numero3;i++)
        fact*=i;         
        return fact;
          res3=(fact)/(fact-fact)
          console.log(res3)
}
function coseno(x){

    res1=exponete1/factorial3;
    console.log(res1);

    var exponente2=Math.pow(x,4);
    res2=exponente2/factorial2;
    console.log(res2);

    var exponente3=Math.pow(x,6);
    res3=exponente3/factorial1;
    console.log(res3)
}
