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

/**
 * Eu preciso somar as entradas
 * Depois eu precis o somar as saídas
 * e remover das entradas o valor das saídas
 * assim, eu terei o total
 **/
// constante transaction
const Transaction = {
  // O array que vai conter todos os valores
  all:
    /**
     * Vai precisar inserir e remover do array conforme o solicitante deseje
     **/
    [
      {
        description: "Desenvolvimento Web",
        amount: 1200000,
        date: "14/12/2020",
      },
      {
        description: "Hamburguer",
        amount: -6000,
        date: "12/11/2020",
      },
      {
        description: "Aluguel Apartamento",
        amount: -50000,
        date: "10/11/2020",
      },
    ],
  add(transaction) {
    // push vai colocar dentro do array alguma coisa
    Transaction.all.push(transaction);
    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },
  // somar as entradas
  incomes() {
    let income = 0;
    // pegar todas as transações
    // para cada transação,
    Transaction.all.forEach((transaction) => {
      // se ela for maior que zero
      if (transaction.amount > 0) {
        // somar a uma variavel e retornar a variavel
        income += transaction.amount;
      }
    });
    return income;
  },
  // somar as saidas
  expenses() {
    let expense = 0;
    // pegar todas as transações
    // para cada transação,
    Transaction.all.forEach((transaction) => {
      // se ela for menor que zero
      if (transaction.amount < 0) {
        // somar a uma variavel e retornar a variavel
        expense += transaction.amount;
      }
    });
    return expense;
  },
  // entradas - saidas
  total() {
    return Transaction.incomes() + Transaction.expenses();
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
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index); // mostrar qual o html que está dentro dele ou receber o html
    tr.dataset.index = index;

    DOM.transactionsContainer.appendChild(tr);
  },
  // de onde estamos pegando essas informações?
  // const transactions
  innerHTMLTransaction(transaction, index) {
    // Validando o dado inserido pelo usuário
    const CSSclasses = transaction.amount > 0 ? "income" : "expense";

    // Responsavel por ajustar o valor
    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclasses}">${amount}</td>
      <td class="data">${transaction.date}</td>
      <td>
        <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Botão Menos" />
      </td>
  `;

    return html;
  },

  // atualizando os valores do caixa
  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

const Utils = {
  formatAmount(value) {
    value = Number(value.replace(/\,\./g, "")) * 100;
    return value;
  },

  formatDate(date) {
    const splittedDate = date.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  },

  formatCurrency(value) {
    // retirando o sinal que entrar -> forçando o que entrar virar um numero
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    // Formandano o numero como real
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

const Form = {
  // Pegando os elementos inteiros
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValues() {
    // separando por id do html
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },

  validateFields() {
    const { description, amount, date } = Form.getValues();
    // Verificar se informações foram preenchidas
    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Por favor, preencha todos os campos");
    }
  },

  formatValues() {
    let { description, amount, date } = Form.getValues();
    amount = Utils.formatAmount(amount);

    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  saveTransaction(transaction) {
    Transaction.add(transaction);
  },

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  submit(event) {
    event.preventDefault();

    // tornando o erro mais elegante
    try {
      // Verificar se todas as informações foram preenchidas
      Form.validateFields();

      // Formatar os dados para salvar
      const transaction = Form.formatValues();

      //  Salvar
      Form.saveTransaction(transaction);

      //  Apagar os dados do formulário
      Form.clearFields();
      //  modal feche
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    // Mostrando os elementos que estão na "base de dados" no html(tela)
    Transaction.all.forEach((transaction, index)=> {
      DOM.addTransaction(transaction, index);
    });

    DOM.updateBalance();
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
};

App.init();
