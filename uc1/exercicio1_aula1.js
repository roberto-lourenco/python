// Exibir informações básicas
console.log("Exercício 1:\n")
function exercicio1(){
    const nome = "Pedro";
    const sobrenome = "Ázara";
    let nomeCompleto = nome+" "+sobrenome;
    console.log(`Nome: ${nome}\nSobrenome:${sobrenome}\nNome Completo:${nomeCompleto}`)
}
exercicio1();


console.log("\nExercício 2:\n")
// Exibir dados cadastrais
function exercicio2(){
    const nome = "Maria Ázara";
    let telefone = "(21) 9999-9999";
    let email = "mariaazara@gmail.com";
    const dataNasc = "27/01/2001";
    let genero = "Feminino";
    let refGenero = genero ==="Feminino" ? "da":"do"
    console.log(
        `Dados cadastrais ${refGenero} cliente: ${nome}\n
        Telefone: ${telefone}\n
        Email: ${email}\n
        Data de Nascimento: ${dataNasc}

    `)
}
exercicio2();


console.log("Exercício 3:\n")
// Exibir nome e preço do produto
function exercicio3(){
    const nomeProduto = "Óleo de Soja";
    let precoProduto = 29.99;
    console.log(`Nome do produto: ${nomeProduto}\nPreço unitário: ${precoProduto}`)

}
exercicio3();