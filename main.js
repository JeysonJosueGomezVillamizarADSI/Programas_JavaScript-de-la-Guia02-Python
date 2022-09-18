let num1 = Number(prompt("Ingrese el primer numero : "));
let num2 = Number(prompt("Ingrese el segundo numero : "));
let num3 = Number(prompt("Ingrese el tercer numero : "));

if (num1 >= num2 && num1 > num3) {
    if (num2 > num3) {
        alert(num1 + 'es el mayor')
        alert(num3 + 'es el menor');
    }
} else if (num3 > num2) {
    alert(num1 + 'es el mayor')
    alert(num2 + 'es el menor')
} else {
    alert(num1 + 'es el mayor')
    alert('El segundo y el tercer numero son iguales' + num2)
}

if (num2 > num1 && num2 >= num3)
    if (num1 > num3) {
        alert(num1 + 'es el mayor')
        print(num3 + 'es el menor')
    } else if (num3 > num2) {
        alert(num2 + 'es el mayor')
        alert(num1 + 'es el menor')
    } else {
        alert(num2 + 'es el mayor')
        alert('El primer y el tercer numero son iguales' + num1)
    }

if (num3 >= num1 && num3 > num2) {
    if (num1 > num2) {
        alert(num3 + 'es el mayor')
        alert(num2 + 'es el menor')
    }
} else if (b > a) {
    alert(num3 + 'es el mayor')
    print(num1 + 'es el menor')
} else {
    print(c, 'es el mayor')
    print('El primer y el segundo numero son iguales', a)
}




