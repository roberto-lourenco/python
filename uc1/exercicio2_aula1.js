// 4 operações aritméticas
function exercicio4() {
    const valor1 = 2;
    const valor2 = 2;
    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let mult = valor1 * valor2;
    let divisao = valor1 / valor2;

    console.log(`Operações ariméticas de 2 valores (${valor1} e ${valor2})`)
    console.log("Soma: " + soma)
    console.log("Subtração: " + subtracao)
    console.log("Multiplicação: " + mult)
    console.log("Divisão: " + divisao+"\n")
}
exercicio4();

// Calcular a média
function exercicio5() {
    let media1 = 5;
    let media2 = 5;
    let calculoMedia = (media1 + media2) / 2;
    let textoMedia = calculoMedia >= 5 ? "Parabéns você está Aprovado":"Infelizmente você foi Reprovado"
    console.log(`Nota 1: ${media1} Nota 2: ${media2}`)
    console.log(`${textoMedia}\nA sua média foi: ${calculoMedia}`+"\n");
}
exercicio5();

// Calcular o IMC
function exercicio6() {
    let alturaUsuario = 1.71;
    let pesoUsuario = 50.00;
    const IMC = pesoUsuario / (alturaUsuario * alturaUsuario);
    console.log(`Peso:${pesoUsuario}kg Altura: ${alturaUsuario}m`)
    console.log("O seu IMC é: " + IMC.toFixed(2)+" Kg/M²"+"\n")
}
exercicio6();

// Transformar CM em Metros
function exercicio7() {
    let valorCM = 200;
    const conversorCM = valorCM / 100;
    console.log(`${valorCM}cm equivalem a ${conversorCM} metros`+"\n")

}
exercicio7();

// Calcular a área do retângulo
function exercicio8(a, b) {
    return a * b
}
var areaRetangulo = exercicio8(45, 90);
console.log("O valor da área do retângulo é: " + areaRetangulo+" cm²"+"\n");

// Calcular a área do triângulo
function exercicio9(a, b) {
    return (a * b) / 2;
}
const areaTriangulo = exercicio9(45, 80);
console.log("A área do triangulo é: " + areaTriangulo+" cm²"+"\n")

// Calcular o volume da caixa
function exercicio10(a, b, c) {
    return (a * b * c);
}

const volumeCaixa = exercicio10(5,4,0.5);
console.log("O volume da caixa é: " + volumeCaixa+" m³");


