// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.
// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

// Cria um objeto
const user = {
    name: 'Gabriel',
    transactions: [],
    balance: 0
}

// Crie uma função createTransaction para adicionar uma nova transação no array de transações de 
// um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

// Cria uma função para adicionar uma transação ao usuário
function createTransaction(transaction) {
    // Adiciona a transação ao array de transações do usuário (user.transactions)
    user.transactions.push(transaction)
    
    // Veririca se o tipo da transação (transaction.type) é igual a crédito
    if (transaction.type == 'credit') {
        // Se for adicione o valor da transação (transaction.value) ao saldo do usuário (user.balance)
        user.balance = user.balance + transaction.value
    }
    // Verifica se o tipo da transação é débito
    if (transaction.type == 'debit') {
        // Se for subtraia o valor da transação do saldo do usuário
        user.balance = user.balance - transaction.value
    }
}

// Cria um função que retorna a maior transação do tipo recebido 
function getHigherTransactionByType(type) {
    // Seta a maior transação como sendo do tipo recebido, e de valor 0
    let higherTransaction = { type: type, value: 0 }

    // Percorre o array de transações do usuário
    for (let transaction of user.transactions) {
        // Verifica se o valor da transação atual (transaction.value) é maior do que o valor
        // da maior transação, e, se é do tipo informado
        if ( (transaction.value > higherTransaction.value) && (transaction.type == type ) ) {
            // Se for, atribua a transação como sendo a maior transação
            higherTransaction = transaction
        }
    }

    console.log(higherTransaction)
}

// Cria uma função que retorna a média de todas as transações
function getAverageTransactionValue() {
    let sum = 0

    // Percorre o array de transações
    for (let transaction of user.transactions) {
        // Atribui o valor da transação à variável 'sum'
        sum = sum + transaction.value
    }

    // Divide a soma das transações pela quantidade de transações
    average = (sum / user.transactions.length)
    
    console.log(average.toFixed(2))
}

// Cria uma função que retorna a contagem de transaçoes
function getTransactionsCount() {
    // Inicia a contagem como 0, em ambos os tipos
    let counter = { credit: 0, debit: 0 }

    // Percorre o array de transações
    for (let transaction of user.transactions) {
        // Se for do tipo crédito, incremente a contagem crédito
        if (transaction.type == 'credit') {
            counter.credit++
        }
        // Se for do tipo débito, incremente a contagem débito
        if (transaction.type == 'debit') {
            counter.debit++
        }
    }

    console.log(counter)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
