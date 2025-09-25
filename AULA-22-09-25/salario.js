// Adiciona o evento de envio do formulário
document.getElementById("salarioForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que a página recarregue

    // Pega o valor do salário inserido pelo usuário
    let salario = parseFloat(prompt("Insira o valor do produto: "))

    // Calcula 10% do salário
    let valorDesconto = salario * 0.10;  // 10% do salário
    let salarioComDesconto = salario - valorDesconto;

    // Exibe os resultados na página
    let resultadoSalarioDiv = document.getElementById("resultadoSalario");
    resultadoSalarioDiv.innerHTML = `
        <p>Salário Bruto: R$ ${salario}</p>
        <p>Valor dos 10%: R$ ${valorDesconto}</p>
        <p>Salário com 10% descontado: R$ ${salarioComDesconto}</p>
    `;
});


