// Criado um objeto / propriedade do objeto
Modal = {
  // funcões ou método
  open() {
    // Abrir modal
    // Adicionar a classe active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a classe active no modal
    document // vai no documento
      .querySelector(".modal-overlay") // faz a pesquisa dentro do documento
      .classList // na lista de classe
      .remove("active"); // remove o active
  },
};
// há a possibilidade de reduzir essas 2 funções para uma só -> toogler

// O array que vai conter todos os valores
/**
 * Vai precisar inserir e remover do array conforme o solicitante deseje
 **/
const transactions = [
  {
    id: 1,
    description: "Desenvolvimento Web",
    amount: 1200000,
    date: "14/12/2020",
  },
  {
    id: 2,
    description: "Hamburguer",
    amount: -6000,
    date: "12/11/2020",
  },
  {
    id: 3,
    description: "Aluguel Apartamento",
    amount: -50000,
    date: "10/11/2020",
  },
];

/**
 * Eu preciso somar as entradas
 * Depois eu preciso somar as saídas
 * e remover das entradas o valor das saídas
 * assim, eu terei o total
 **/
// constante transaction
const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saidas
  },
  total() {
    // entradas - saidas
  },
};

/**
 * Preciso pegar as transações do meu objeto aqui no javascript
 * E colocar lá no HTML.
 * Substituir os dados do HTML com os dados do JS.
 */

const DOM = {
  // contém todo o conteúdo do html. (container)
  transactionsContainer: document.querySelector("#data-table tbody"),

  // Responsavel por adicionar a transação
  addTransaction(transaction, index) {
    const tr = document.createElement("tr"); // criando elemento na DOM.
    tr.innerHTML = DOM.innerHTMLTransaction(transaction); // mostrar qual o html que está dentro dele ou receber o html

    DOM.transactionsContainer.appendChild(tr);
  },
  // de onde estamos pegando essas informações?
  // const transactions
  innerHTMLTransaction(transaction) {
    // Validando o dado inserido pelo usuário
    const CSSclasses = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclasses}">${transaction.amount}</td>
      <td class="data">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Botão Menos" />
      </td>
  `;

    return html;
  },
};

const Utils = {
  formatCurrency(valeu) {
    // retirando o sinal que entrar -> forçando o que entrar virar um numero
    const signal = Number(valeu) < 0 ? "-" : "";
  },
};

// Mostrando os elementos que estão na "base de dados" no html(tela)
transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});
