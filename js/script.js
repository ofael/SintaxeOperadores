function operadores(){
    let n1 = Number(prompt('Digite o primeiro numero:'))
    let n2 = Number(prompt('Digite o segundo numero:'))

    if(n1 == n2){
        alert(`Os numero ${n1} e ${n2} são iguais`)
    }else{
        alert(`Os numero ${n1} e ${n2} não são iguais` )
    }
    if(n1 + n2 > 10 && n1 + n2 < 20){
        alert(`A soma de ${n1} + ${n2} é maior do que 10 e menor do que 20`)
    }else{
        alert(`A soma de ${n1} + ${n2} NÃO é maior do que 10 e menor do que 20`)
    }
}

operadores();
