// Adiciona o evento de envio do formulário
document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que a página recarregue

    // Pega os valores dos campos do formulário
    var nomeProduto = document.getElementById("produto").value;
    var valorProduto = document.getElementById("valor").value;

    // Exibe um alert com as informações do produto
    alert("Produto: " + nomeProduto + "\nValor: R$ " + valorProduto);

    // Exibe as informações na página
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<p>Produto: " + nomeProduto + "</p><p>Valor: R$ " + valorProduto + "</p>";
});
