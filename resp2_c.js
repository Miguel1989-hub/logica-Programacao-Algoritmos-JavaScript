/* Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta
de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades
do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens
indicando a promoção.
*/

function mostraPromocao() {
	var inProduto = document.getElementById("inProduto");
	var inPreco = document.getElementById("inPreco");
	var outPromocao = document.getElementById("outPromocao");
	var outDesconto = document.getElementById("outDesconto");


	var produto = inProduto.value;
	var inPreco = Number(inPreco.value);

	var desconto = inPreco / 2;
	var promocao = inPreco * 2 + desconto;

	outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2);
	outDesconto.textContent = "O 3º produto custa apenas R$: " + desconto.toFixed(2);
}
	
	var btVerPromocao = document.getElementById("btVerPromocao");
	btVerPromocao.addEventListener("click", mostraPromocao);