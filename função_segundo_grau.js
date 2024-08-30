//função para resolver euqação de segundo grau
//ax²+bx+c 
function resolverEquaçãosegundograu(a,b,c)
{
//Passo 1: Calcular o delta 
//o delta nos ajuda a determinar o número de soluções reais :)

let delta = b*b-4*a*c

// Passo 2: Verificar se o delta é negativo,zero ou positivo
if(delta<0){
// se dalta <0 a equação não tem soluções rais
console.log("A equação não tem soluções reais")
}else if (delta===0){
    // se delta for igual a zero, a equação tem raizes iguais
    let x = -b/(2*a)
    console.log("A equação tem uma solução real, x= ,", x)
 
}
else{
    // se delta for positivo, a equação tem duas soluções diferentes
    let x1 = (-b+Math.sqrt(delta)/(2*a))
    let x2 = (-b-Math.sqrt(delta)/(2*a))
    console.log("A equação de duas raizes: ",x1,'e', x2)

}



}
resolverEquaçãosegundograu(8,-5,7)