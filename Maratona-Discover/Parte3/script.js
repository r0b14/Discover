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
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

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
   description: 'Hamburguer',
   amount: -6000,
   date: '12/11/2020',
  },
  {
   id: 3,
   description: 'Desenvolvimento Web',
   amount: 1200000,
   date: '14/12/2020',
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
