let opcion = prompt("¿Que figura desea calcular? (Escriba T para Triangulo o C para circulo : )");

if (opcion == "T") {
    let base = Number(prompt("Digite la base del triangulo : "));
    let altura = Number(prompt("Digite la altura del triangulo : "));

    let areaTriangulo = base * altura / 2;
    alert("El area del triagulo es " + areaTriangulo);
} else if (opcion == "C") {

    const pi = 3.14
    let radio = Number(prompt("Digite el radio del circulo : "));

    let areaCirculo=pi*radio*radio;
    alert("El area del circulo es "+ areaCirculo);
}  else{
    alert("Error al digitar ")
}